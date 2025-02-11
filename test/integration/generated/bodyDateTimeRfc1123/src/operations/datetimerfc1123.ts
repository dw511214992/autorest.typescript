/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Datetimerfc1123 } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyDateTimeRfc1123ClientContext } from "../bodyDateTimeRfc1123ClientContext";
import {
  Datetimerfc1123GetNullOptionalParams,
  Datetimerfc1123GetNullResponse,
  Datetimerfc1123GetInvalidOptionalParams,
  Datetimerfc1123GetInvalidResponse,
  Datetimerfc1123GetOverflowOptionalParams,
  Datetimerfc1123GetOverflowResponse,
  Datetimerfc1123GetUnderflowOptionalParams,
  Datetimerfc1123GetUnderflowResponse,
  Datetimerfc1123PutUtcMaxDateTimeOptionalParams,
  Datetimerfc1123GetUtcLowercaseMaxDateTimeOptionalParams,
  Datetimerfc1123GetUtcLowercaseMaxDateTimeResponse,
  Datetimerfc1123GetUtcUppercaseMaxDateTimeOptionalParams,
  Datetimerfc1123GetUtcUppercaseMaxDateTimeResponse,
  Datetimerfc1123PutUtcMinDateTimeOptionalParams,
  Datetimerfc1123GetUtcMinDateTimeOptionalParams,
  Datetimerfc1123GetUtcMinDateTimeResponse
} from "../models";

/** Class representing a Datetimerfc1123. */
export class Datetimerfc1123Impl implements Datetimerfc1123 {
  private readonly client: BodyDateTimeRfc1123ClientContext;

  /**
   * Initialize a new instance of the class Datetimerfc1123 class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDateTimeRfc1123ClientContext) {
    this.client = client;
  }

  /**
   * Get null datetime value
   * @param options The options parameters.
   */
  getNull(
    options?: Datetimerfc1123GetNullOptionalParams
  ): Promise<Datetimerfc1123GetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Get invalid datetime value
   * @param options The options parameters.
   */
  getInvalid(
    options?: Datetimerfc1123GetInvalidOptionalParams
  ): Promise<Datetimerfc1123GetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    );
  }

  /**
   * Get overflow datetime value
   * @param options The options parameters.
   */
  getOverflow(
    options?: Datetimerfc1123GetOverflowOptionalParams
  ): Promise<Datetimerfc1123GetOverflowResponse> {
    return this.client.sendOperationRequest(
      { options },
      getOverflowOperationSpec
    );
  }

  /**
   * Get underflow datetime value
   * @param options The options parameters.
   */
  getUnderflow(
    options?: Datetimerfc1123GetUnderflowOptionalParams
  ): Promise<Datetimerfc1123GetUnderflowResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUnderflowOperationSpec
    );
  }

  /**
   * Put max datetime value Fri, 31 Dec 9999 23:59:59 GMT
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMaxDateTime(
    datetimeBody: Date,
    options?: Datetimerfc1123PutUtcMaxDateTimeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putUtcMaxDateTimeOperationSpec
    );
  }

  /**
   * Get max datetime value fri, 31 dec 9999 23:59:59 gmt
   * @param options The options parameters.
   */
  getUtcLowercaseMaxDateTime(
    options?: Datetimerfc1123GetUtcLowercaseMaxDateTimeOptionalParams
  ): Promise<Datetimerfc1123GetUtcLowercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUtcLowercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * Get max datetime value FRI, 31 DEC 9999 23:59:59 GMT
   * @param options The options parameters.
   */
  getUtcUppercaseMaxDateTime(
    options?: Datetimerfc1123GetUtcUppercaseMaxDateTimeOptionalParams
  ): Promise<Datetimerfc1123GetUtcUppercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUtcUppercaseMaxDateTimeOperationSpec
    );
  }

  /**
   * Put min datetime value Mon, 1 Jan 0001 00:00:00 GMT
   * @param datetimeBody datetime body
   * @param options The options parameters.
   */
  putUtcMinDateTime(
    datetimeBody: Date,
    options?: Datetimerfc1123PutUtcMinDateTimeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { datetimeBody, options },
      putUtcMinDateTimeOperationSpec
    );
  }

  /**
   * Get min datetime value Mon, 1 Jan 0001 00:00:00 GMT
   * @param options The options parameters.
   */
  getUtcMinDateTime(
    options?: Datetimerfc1123GetUtcMinDateTimeOptionalParams
  ): Promise<Datetimerfc1123GetUtcMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUtcMinDateTimeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOverflowOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/overflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUnderflowOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/underflow",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putUtcMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/max",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUtcLowercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/max/lowercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUtcUppercaseMaxDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/max/uppercase",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putUtcMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/min",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.datetimeBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUtcMinDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/datetimerfc1123/min",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "DateTimeRfc1123" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
