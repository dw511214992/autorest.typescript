// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FullOperationResponse,
  OperationArguments,
  OperationSpec,
  RawResponseCallback
} from "@azure/core-client";
import { processAzureAsyncOperationResult } from "./azureAsyncPolling";
import {
  isBodyPollingDone,
  processBodyPollingOperationResult
} from "./bodyPolling";
import { processLocationPollingOperationResult } from "./locationPolling";
import {
  FinalStateVia,
  LROConfig,
  LROResult,
  PollerConfig,
  ResumablePollOperationState,
  SendOperationFn
} from "./models";
import { processPassthroughOperationResult } from "./passthrough";
import {
  createPollingMethod,
  createRetrieveAzureAsyncResource
} from "./pollingMethod";
import { getPollingURL, getSpecPath, inferLROMode } from "./requestUtils";

export const successStates = ["succeeded"];
export const failureStates = ["failed", "canceled", "cancelled"];
export const terminalStates = successStates.concat(failureStates);

/**
 * The type of a terminal state of an LRO.
 */
interface LROTerminalState<T> extends LROResult<T> {
  /**
   * Whether the operation has finished.
   */
  done: true;
}

/**
 * The type of an in-progress state of an LRO.
 */
interface LROInProgressState<T> extends LROResult<T> {
  /**
   * Whether the operation has finished.
   */
  done: false;
  /**
   * The request to be sent next if it is different from the standard polling one.
   * Notice that it will disregard any polling URLs provided to it.
   */
  next?: () => Promise<LROState<T>>;
}

/**
 * The type of an LRO state which is a tagged union of terminal and in-progress states.
 */
export type LROState<T> = LROTerminalState<T> | LROInProgressState<T>;

/**
 * creates a stepping function that maps an LRO state to another.
 */
function createTransition<TResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec,
  config: LROConfig,
  finalStateVia?: FinalStateVia
): (
  rawResponse: FullOperationResponse,
  flatResponse: TResult
) => LROState<TResult> {
  switch (config.mode) {
    case "AzureAsync": {
      return processAzureAsyncOperationResult(
        createRetrieveAzureAsyncResource(sendOperationFn, args, spec),
        config.resourceLocation,
        finalStateVia
      );
    }
    case "Location": {
      return processLocationPollingOperationResult;
    }
    case "Body": {
      return processBodyPollingOperationResult;
    }
    default: {
      return processPassthroughOperationResult;
    }
  }
}

/**
 * Creates a polling operation that returns a LRO state.
 */
export function createGetLROState<TResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec,
  config: LROConfig,
  finalStateVia?: FinalStateVia
): (
  pollingURL: string,
  pollerConfig: PollerConfig
) => Promise<LROState<TResult>> {
  const step = createTransition(
    sendOperationFn,
    args,
    spec,
    config,
    finalStateVia
  );
  const customerCallback = args?.options?.onResponse;
  let response: LROState<TResult> | undefined = undefined;
  let retryAfter: string | undefined = undefined;
  const poll = createPollingMethod(
    sendOperationFn,
    {
      ...args,
      options: {
        ...args.options,
        onResponse: (
          rawResponse: FullOperationResponse,
          flatResponse: unknown
        ): void => {
          response = step(rawResponse, flatResponse as TResult);
          retryAfter = rawResponse.headers.get("Retry-After");
          if (response.done) {
            customerCallback?.(rawResponse, flatResponse);
          }
        }
      }
    },
    spec,
    config.mode
  );
  return async (
    path: string,
    pollerConfig: PollerConfig
  ): Promise<LROState<TResult>> => {
    await poll(path);
    if (retryAfter !== undefined) {
      const retryAfterInMs = parseInt(retryAfter);
      pollerConfig.intervalInMs = isNaN(retryAfterInMs)
        ? calculatePollingIntervalFromDate(
            new Date(retryAfter),
            pollerConfig.intervalInMs
          )
        : retryAfterInMs;
    }
    return response!;
  };
}

function calculatePollingIntervalFromDate(
  retryAfterDate: Date,
  defaultIntervalInMs: number
): number {
  const timeNow = Math.floor(new Date().getTime());
  const retryAfterTime = retryAfterDate.getTime();
  if (timeNow < retryAfterTime) {
    return retryAfterTime - timeNow;
  }
  return defaultIntervalInMs;
}

/**
 * Creates a callback to be used to initialize the polling operation state.
 * @param state of the polling operation
 * @param operationSpec of the LRO
 * @param callback callback to be called when the operation is done
 * @returns callback that initializes the state of the polling operation
 */
export function initializeState<TResult>(
  state: ResumablePollOperationState<TResult>,
  operationSpec: OperationSpec,
  callback?: RawResponseCallback
): (rawResponse: FullOperationResponse, flatResponse: unknown) => void {
  return (rawResponse: FullOperationResponse, flatResponse: unknown) => {
    state.initialRawResponse = rawResponse;
    state.isStarted = true;
    state.pollingURL = getPollingURL(
      state.initialRawResponse,
      getSpecPath(operationSpec)
    );
    state.config = inferLROMode(operationSpec, state.initialRawResponse);
    /** short circuit polling if body polling is done in the initial request */
    if (
      state.config.mode === undefined ||
      (state.config.mode === "Body" &&
        isBodyPollingDone(state.initialRawResponse))
    ) {
      state.result = flatResponse as TResult;
      state.isCompleted = true;
      /**
       * We need to check if the LRO operation is finished inside the
       * call back so that we can call the customer-provided callback
       * on that result.
       */
      callback?.(rawResponse, flatResponse);
    }
  };
}
