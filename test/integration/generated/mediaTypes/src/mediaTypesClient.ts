/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { MediaTypesClientContext } from "./mediaTypesClientContext";
import {
  MediaTypesClientOptionalParams,
  ContentType,
  MediaTypesClientAnalyzeBody$binaryOptionalParams,
  MediaTypesClientAnalyzeBody$jsonOptionalParams,
  MediaTypesClientAnalyzeBodyResponse,
  MediaTypesClientContentTypeWithEncodingOptionalParams,
  MediaTypesClientContentTypeWithEncodingResponse
} from "./models";

export class MediaTypesClient extends MediaTypesClientContext {
  /**
   * Initializes a new instance of the MediaTypesClient class.
   * @param options The parameter options
   */
  constructor(options?: MediaTypesClientOptionalParams) {
    super(options);
  }

  /**
   * Analyze body, that could be different media types.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  analyzeBody(
    contentType: ContentType,
    options?: MediaTypesClientAnalyzeBody$binaryOptionalParams
  ): Promise<MediaTypesClientAnalyzeBodyResponse>;
  /**
   * Analyze body, that could be different media types.
   * @param contentType Body Parameter content-type
   * @param options The options parameters.
   */
  analyzeBody(
    contentType: "application/json",
    options?: MediaTypesClientAnalyzeBody$jsonOptionalParams
  ): Promise<MediaTypesClientAnalyzeBodyResponse>;
  /**
   * Analyze body, that could be different media types.
   * @param args Includes all the parameters for this operation.
   */
  analyzeBody(
    ...args:
      | [ContentType, MediaTypesClientAnalyzeBody$binaryOptionalParams?]
      | ["application/json", MediaTypesClientAnalyzeBody$jsonOptionalParams?]
  ): Promise<MediaTypesClientAnalyzeBodyResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (
      args[0] === "application/pdf" ||
      args[0] === "image/jpeg" ||
      args[0] === "image/png" ||
      args[0] === "image/tiff"
    ) {
      operationSpec = analyzeBody$binaryOperationSpec;
      operationArguments = { contentType: args[0], options: args[1] };
      options = args[1];
    } else if (args[0] === "application/json") {
      operationSpec = analyzeBody$jsonOperationSpec;
      operationArguments = { contentType: args[0], options: args[1] };
      options = args[1];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Pass in contentType 'text/plain; encoding=UTF-8' to pass test. Value for input does not matter
   * @param options The options parameters.
   */
  contentTypeWithEncoding(
    options?: MediaTypesClientContentTypeWithEncodingOptionalParams
  ): Promise<MediaTypesClientContentTypeWithEncodingResponse> {
    return this.sendOperationRequest(
      { options },
      contentTypeWithEncodingOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const analyzeBody$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/analyze",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.input,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const analyzeBody$jsonOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/analyze",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.input1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "json",
  serializer
};
const contentTypeWithEncodingOperationSpec: coreClient.OperationSpec = {
  path: "/mediatypes/contentTypeWithEncoding",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.input2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType2, Parameters.accept2],
  mediaType: "text",
  serializer
};
