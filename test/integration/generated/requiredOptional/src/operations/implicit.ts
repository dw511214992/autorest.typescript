/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Implicit } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RequiredOptionalClientContext } from "../requiredOptionalClientContext";
import {
  ImplicitGetRequiredPathOptionalParams,
  ImplicitPutOptionalQueryOptionalParams,
  ImplicitPutOptionalHeaderOptionalParams,
  ImplicitPutOptionalBodyOptionalParams,
  ImplicitPutOptionalBinaryBodyOptionalParams,
  ImplicitGetRequiredGlobalPathOptionalParams,
  ImplicitGetRequiredGlobalQueryOptionalParams,
  ImplicitGetOptionalGlobalQueryOptionalParams
} from "../models";

/** Class representing a Implicit. */
export class ImplicitImpl implements Implicit {
  private readonly client: RequiredOptionalClientContext;

  /**
   * Initialize a new instance of the class Implicit class.
   * @param client Reference to the service client
   */
  constructor(client: RequiredOptionalClientContext) {
    this.client = client;
  }

  /**
   * Test implicitly required path parameter
   * @param pathParameter
   * @param options The options parameters.
   */
  getRequiredPath(
    pathParameter: string,
    options?: ImplicitGetRequiredPathOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { pathParameter, options },
      getRequiredPathOperationSpec
    );
  }

  /**
   * Test implicitly optional query parameter
   * @param options The options parameters.
   */
  putOptionalQuery(
    options?: ImplicitPutOptionalQueryOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putOptionalQueryOperationSpec
    );
  }

  /**
   * Test implicitly optional header parameter
   * @param options The options parameters.
   */
  putOptionalHeader(
    options?: ImplicitPutOptionalHeaderOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putOptionalHeaderOperationSpec
    );
  }

  /**
   * Test implicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBody(
    options?: ImplicitPutOptionalBodyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putOptionalBodyOperationSpec
    );
  }

  /**
   * Test implicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBinaryBody(
    options?: ImplicitPutOptionalBinaryBodyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putOptionalBinaryBodyOperationSpec
    );
  }

  /**
   * Test implicitly required path parameter
   * @param options The options parameters.
   */
  getRequiredGlobalPath(
    options?: ImplicitGetRequiredGlobalPathOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getRequiredGlobalPathOperationSpec
    );
  }

  /**
   * Test implicitly required query parameter
   * @param options The options parameters.
   */
  getRequiredGlobalQuery(
    options?: ImplicitGetRequiredGlobalQueryOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getRequiredGlobalQueryOperationSpec
    );
  }

  /**
   * Test implicitly optional query parameter
   * @param options The options parameters.
   */
  getOptionalGlobalQuery(
    options?: ImplicitGetOptionalGlobalQueryOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getOptionalGlobalQueryOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getRequiredPathOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/implicit/required/path/{pathParameter}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.pathParameter],
  headerParameters: [Parameters.accept],
  serializer
};
const putOptionalQueryOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/implicit/optional/query",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.queryParameter],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putOptionalHeaderOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/implicit/optional/header",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.queryParameter1],
  serializer
};
const putOptionalBodyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/implicit/optional/body",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const putOptionalBinaryBodyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/implicit/optional/binary-body",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "binary",
  serializer
};
const getRequiredGlobalPathOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/global/required/path/{required-global-path}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.requiredGlobalPath],
  headerParameters: [Parameters.accept],
  serializer
};
const getRequiredGlobalQueryOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/global/required/query",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.requiredGlobalQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOptionalGlobalQueryOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/global/optional/query",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.optionalGlobalQuery],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
