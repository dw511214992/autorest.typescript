/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Explicit } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RequiredOptionalClientContext } from "../requiredOptionalClientContext";
import {
  ExplicitPutOptionalBinaryBodyOptionalParams,
  ExplicitPutRequiredBinaryBodyOptionalParams,
  ExplicitPostRequiredIntegerParameterOptionalParams,
  ExplicitPostOptionalIntegerParameterOptionalParams,
  IntWrapper,
  ExplicitPostRequiredIntegerPropertyOptionalParams,
  ExplicitPostOptionalIntegerPropertyOptionalParams,
  ExplicitPostRequiredIntegerHeaderOptionalParams,
  ExplicitPostOptionalIntegerHeaderOptionalParams,
  ExplicitPostRequiredStringParameterOptionalParams,
  ExplicitPostOptionalStringParameterOptionalParams,
  StringWrapper,
  ExplicitPostRequiredStringPropertyOptionalParams,
  ExplicitPostOptionalStringPropertyOptionalParams,
  ExplicitPostRequiredStringHeaderOptionalParams,
  ExplicitPostOptionalStringHeaderOptionalParams,
  Product,
  ExplicitPostRequiredClassParameterOptionalParams,
  ExplicitPostOptionalClassParameterOptionalParams,
  ClassWrapper,
  ExplicitPostRequiredClassPropertyOptionalParams,
  ExplicitPostOptionalClassPropertyOptionalParams,
  ExplicitPostRequiredArrayParameterOptionalParams,
  ExplicitPostOptionalArrayParameterOptionalParams,
  ArrayWrapper,
  ExplicitPostRequiredArrayPropertyOptionalParams,
  ExplicitPostOptionalArrayPropertyOptionalParams,
  ExplicitPostRequiredArrayHeaderOptionalParams,
  ExplicitPostOptionalArrayHeaderOptionalParams
} from "../models";

/** Class representing a Explicit. */
export class ExplicitImpl implements Explicit {
  private readonly client: RequiredOptionalClientContext;

  /**
   * Initialize a new instance of the class Explicit class.
   * @param client Reference to the service client
   */
  constructor(client: RequiredOptionalClientContext) {
    this.client = client;
  }

  /**
   * Test explicitly optional body parameter
   * @param options The options parameters.
   */
  putOptionalBinaryBody(
    options?: ExplicitPutOptionalBinaryBodyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      putOptionalBinaryBodyOperationSpec
    );
  }

  /**
   * Test explicitly required body parameter
   * @param bodyParameter
   * @param options The options parameters.
   */
  putRequiredBinaryBody(
    bodyParameter: coreRestPipeline.RequestBodyType,
    options?: ExplicitPutRequiredBinaryBodyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      putRequiredBinaryBodyOperationSpec
    );
  }

  /**
   * Test explicitly required integer. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredIntegerParameter(
    bodyParameter: number,
    options?: ExplicitPostRequiredIntegerParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredIntegerParameterOperationSpec
    );
  }

  /**
   * Test explicitly optional integer. Please put null.
   * @param options The options parameters.
   */
  postOptionalIntegerParameter(
    options?: ExplicitPostOptionalIntegerParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalIntegerParameterOperationSpec
    );
  }

  /**
   * Test explicitly required integer. Please put a valid int-wrapper with 'value' = null and the client
   * library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredIntegerProperty(
    bodyParameter: IntWrapper,
    options?: ExplicitPostRequiredIntegerPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredIntegerPropertyOperationSpec
    );
  }

  /**
   * Test explicitly optional integer. Please put a valid int-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalIntegerProperty(
    options?: ExplicitPostOptionalIntegerPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalIntegerPropertyOperationSpec
    );
  }

  /**
   * Test explicitly required integer. Please put a header 'headerParameter' => null and the client
   * library should throw before the request is sent.
   * @param headerParameter
   * @param options The options parameters.
   */
  postRequiredIntegerHeader(
    headerParameter: number,
    options?: ExplicitPostRequiredIntegerHeaderOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { headerParameter, options },
      postRequiredIntegerHeaderOperationSpec
    );
  }

  /**
   * Test explicitly optional integer. Please put a header 'headerParameter' => null.
   * @param options The options parameters.
   */
  postOptionalIntegerHeader(
    options?: ExplicitPostOptionalIntegerHeaderOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalIntegerHeaderOperationSpec
    );
  }

  /**
   * Test explicitly required string. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredStringParameter(
    bodyParameter: string,
    options?: ExplicitPostRequiredStringParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredStringParameterOperationSpec
    );
  }

  /**
   * Test explicitly optional string. Please put null.
   * @param options The options parameters.
   */
  postOptionalStringParameter(
    options?: ExplicitPostOptionalStringParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalStringParameterOperationSpec
    );
  }

  /**
   * Test explicitly required string. Please put a valid string-wrapper with 'value' = null and the
   * client library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredStringProperty(
    bodyParameter: StringWrapper,
    options?: ExplicitPostRequiredStringPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredStringPropertyOperationSpec
    );
  }

  /**
   * Test explicitly optional integer. Please put a valid string-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalStringProperty(
    options?: ExplicitPostOptionalStringPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalStringPropertyOperationSpec
    );
  }

  /**
   * Test explicitly required string. Please put a header 'headerParameter' => null and the client
   * library should throw before the request is sent.
   * @param headerParameter
   * @param options The options parameters.
   */
  postRequiredStringHeader(
    headerParameter: string,
    options?: ExplicitPostRequiredStringHeaderOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { headerParameter, options },
      postRequiredStringHeaderOperationSpec
    );
  }

  /**
   * Test explicitly optional string. Please put a header 'headerParameter' => null.
   * @param options The options parameters.
   */
  postOptionalStringHeader(
    options?: ExplicitPostOptionalStringHeaderOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalStringHeaderOperationSpec
    );
  }

  /**
   * Test explicitly required complex object. Please put null and the client library should throw before
   * the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredClassParameter(
    bodyParameter: Product,
    options?: ExplicitPostRequiredClassParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredClassParameterOperationSpec
    );
  }

  /**
   * Test explicitly optional complex object. Please put null.
   * @param options The options parameters.
   */
  postOptionalClassParameter(
    options?: ExplicitPostOptionalClassParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalClassParameterOperationSpec
    );
  }

  /**
   * Test explicitly required complex object. Please put a valid class-wrapper with 'value' = null and
   * the client library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredClassProperty(
    bodyParameter: ClassWrapper,
    options?: ExplicitPostRequiredClassPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredClassPropertyOperationSpec
    );
  }

  /**
   * Test explicitly optional complex object. Please put a valid class-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalClassProperty(
    options?: ExplicitPostOptionalClassPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalClassPropertyOperationSpec
    );
  }

  /**
   * Test explicitly required array. Please put null and the client library should throw before the
   * request is sent.
   * @param bodyParameter Array of PostContentSchemaItem
   * @param options The options parameters.
   */
  postRequiredArrayParameter(
    bodyParameter: string[],
    options?: ExplicitPostRequiredArrayParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredArrayParameterOperationSpec
    );
  }

  /**
   * Test explicitly optional array. Please put null.
   * @param options The options parameters.
   */
  postOptionalArrayParameter(
    options?: ExplicitPostOptionalArrayParameterOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalArrayParameterOperationSpec
    );
  }

  /**
   * Test explicitly required array. Please put a valid array-wrapper with 'value' = null and the client
   * library should throw before the request is sent.
   * @param bodyParameter
   * @param options The options parameters.
   */
  postRequiredArrayProperty(
    bodyParameter: ArrayWrapper,
    options?: ExplicitPostRequiredArrayPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { bodyParameter, options },
      postRequiredArrayPropertyOperationSpec
    );
  }

  /**
   * Test explicitly optional array. Please put a valid array-wrapper with 'value' = null.
   * @param options The options parameters.
   */
  postOptionalArrayProperty(
    options?: ExplicitPostOptionalArrayPropertyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalArrayPropertyOperationSpec
    );
  }

  /**
   * Test explicitly required array. Please put a header 'headerParameter' => null and the client library
   * should throw before the request is sent.
   * @param headerParameter Array of Post0ItemsItem
   * @param options The options parameters.
   */
  postRequiredArrayHeader(
    headerParameter: string[],
    options?: ExplicitPostRequiredArrayHeaderOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { headerParameter, options },
      postRequiredArrayHeaderOperationSpec
    );
  }

  /**
   * Test explicitly optional integer. Please put a header 'headerParameter' => null.
   * @param options The options parameters.
   */
  postOptionalArrayHeader(
    options?: ExplicitPostOptionalArrayHeaderOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      postOptionalArrayHeaderOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const putOptionalBinaryBodyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/explicit/optional/binary-body",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "binary",
  serializer
};
const putRequiredBinaryBodyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/explicit/required/binary-body",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "binary",
  serializer
};
const postRequiredIntegerParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/integer/parameter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalIntegerParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/integer/parameter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter5,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postRequiredIntegerPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/integer/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter6,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalIntegerPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/integer/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter7,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postRequiredIntegerHeaderOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/integer/header",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.headerParameter],
  serializer
};
const postOptionalIntegerHeaderOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/integer/header",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.headerParameter1],
  serializer
};
const postRequiredStringParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/string/parameter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter8,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalStringParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/string/parameter",
  httpMethod: "POST",
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
const postRequiredStringPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/string/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter9,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalStringPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/string/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter10,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postRequiredStringHeaderOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/string/header",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.headerParameter2],
  serializer
};
const postOptionalStringHeaderOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/string/header",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.bodyParameter11],
  serializer
};
const postRequiredClassParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/class/parameter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter12,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalClassParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/class/parameter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter13,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postRequiredClassPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/class/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter14,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalClassPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/class/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter15,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postRequiredArrayParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/array/parameter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter16,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalArrayParameterOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/array/parameter",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter17,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postRequiredArrayPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/array/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter18,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postOptionalArrayPropertyOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/array/property",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.bodyParameter19,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const postRequiredArrayHeaderOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/requied/array/header",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.headerParameter3],
  serializer
};
const postOptionalArrayHeaderOperationSpec: coreClient.OperationSpec = {
  path: "/reqopt/optional/array/header",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.headerParameter4],
  serializer
};
