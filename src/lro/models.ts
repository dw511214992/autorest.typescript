// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FullOperationResponse,
  OperationArguments,
  OperationSpec
} from "@azure/core-client";
import { PollOperationState } from "@azure/core-lro";

export type FinalStateVia =
  | "azure-async-operation"
  | "location"
  | "original-uri";

export interface LROResult<T> {
  flatResponse: T;
  rawResponse: FullOperationResponse;
}

export type LROMode = "AzureAsync" | "Location" | "Body";

export interface LROConfig {
  mode?: LROMode;
  resourceLocation?: string;
}

export type SendOperationFn<T> = (
  args: OperationArguments,
  spec: OperationSpec
) => Promise<LROResult<T>>;

/**
 * Type of a polling operation state that can actually be resumed.
 */
export type ResumablePollOperationState<T> = PollOperationState<T> & {
  initialRawResponse?: FullOperationResponse;
  config?: LROConfig;
  pollingURL?: string;
};

export interface PollerConfig {
  intervalInMs: number;
}
