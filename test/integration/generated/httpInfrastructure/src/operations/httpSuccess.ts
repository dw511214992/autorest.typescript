/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { HttpSuccess } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HttpInfrastructureClientContext } from "../httpInfrastructureClientContext";
import {
  HttpSuccessHead200OptionalParams,
  HttpSuccessGet200OptionalParams,
  HttpSuccessGet200Response,
  HttpSuccessOptions200OptionalParams,
  HttpSuccessOptions200Response,
  HttpSuccessPut200OptionalParams,
  HttpSuccessPatch200OptionalParams,
  HttpSuccessPost200OptionalParams,
  HttpSuccessDelete200OptionalParams,
  HttpSuccessPut201OptionalParams,
  HttpSuccessPost201OptionalParams,
  HttpSuccessPut202OptionalParams,
  HttpSuccessPatch202OptionalParams,
  HttpSuccessPost202OptionalParams,
  HttpSuccessDelete202OptionalParams,
  HttpSuccessHead204OptionalParams,
  HttpSuccessPut204OptionalParams,
  HttpSuccessPatch204OptionalParams,
  HttpSuccessPost204OptionalParams,
  HttpSuccessDelete204OptionalParams,
  HttpSuccessHead404OptionalParams
} from "../models";

/** Class representing a HttpSuccess. */
export class HttpSuccessImpl implements HttpSuccess {
  private readonly client: HttpInfrastructureClientContext;

  /**
   * Initialize a new instance of the class HttpSuccess class.
   * @param client Reference to the service client
   */
  constructor(client: HttpInfrastructureClientContext) {
    this.client = client;
  }

  /**
   * Return 200 status code if successful
   * @param options The options parameters.
   */
  head200(options?: HttpSuccessHead200OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, head200OperationSpec);
  }

  /**
   * Get 200 success
   * @param options The options parameters.
   */
  get200(
    options?: HttpSuccessGet200OptionalParams
  ): Promise<HttpSuccessGet200Response> {
    return this.client.sendOperationRequest({ options }, get200OperationSpec);
  }

  /**
   * Options 200 success
   * @param options The options parameters.
   */
  options200(
    options?: HttpSuccessOptions200OptionalParams
  ): Promise<HttpSuccessOptions200Response> {
    return this.client.sendOperationRequest(
      { options },
      options200OperationSpec
    );
  }

  /**
   * Put boolean value true returning 200 success
   * @param options The options parameters.
   */
  put200(options?: HttpSuccessPut200OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, put200OperationSpec);
  }

  /**
   * Patch true Boolean value in request returning 200
   * @param options The options parameters.
   */
  patch200(options?: HttpSuccessPatch200OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, patch200OperationSpec);
  }

  /**
   * Post bollean value true in request that returns a 200
   * @param options The options parameters.
   */
  post200(options?: HttpSuccessPost200OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, post200OperationSpec);
  }

  /**
   * Delete simple boolean value true returns 200
   * @param options The options parameters.
   */
  delete200(options?: HttpSuccessDelete200OptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      delete200OperationSpec
    );
  }

  /**
   * Put true Boolean value in request returns 201
   * @param options The options parameters.
   */
  put201(options?: HttpSuccessPut201OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, put201OperationSpec);
  }

  /**
   * Post true Boolean value in request returns 201 (Created)
   * @param options The options parameters.
   */
  post201(options?: HttpSuccessPost201OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, post201OperationSpec);
  }

  /**
   * Put true Boolean value in request returns 202 (Accepted)
   * @param options The options parameters.
   */
  put202(options?: HttpSuccessPut202OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, put202OperationSpec);
  }

  /**
   * Patch true Boolean value in request returns 202
   * @param options The options parameters.
   */
  patch202(options?: HttpSuccessPatch202OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, patch202OperationSpec);
  }

  /**
   * Post true Boolean value in request returns 202 (Accepted)
   * @param options The options parameters.
   */
  post202(options?: HttpSuccessPost202OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, post202OperationSpec);
  }

  /**
   * Delete true Boolean value in request returns 202 (accepted)
   * @param options The options parameters.
   */
  delete202(options?: HttpSuccessDelete202OptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      delete202OperationSpec
    );
  }

  /**
   * Return 204 status code if successful
   * @param options The options parameters.
   */
  head204(options?: HttpSuccessHead204OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, head204OperationSpec);
  }

  /**
   * Put true Boolean value in request returns 204 (no content)
   * @param options The options parameters.
   */
  put204(options?: HttpSuccessPut204OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, put204OperationSpec);
  }

  /**
   * Patch true Boolean value in request returns 204 (no content)
   * @param options The options parameters.
   */
  patch204(options?: HttpSuccessPatch204OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, patch204OperationSpec);
  }

  /**
   * Post true Boolean value in request returns 204 (no content)
   * @param options The options parameters.
   */
  post204(options?: HttpSuccessPost204OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, post204OperationSpec);
  }

  /**
   * Delete true Boolean value in request returns 204 (no content)
   * @param options The options parameters.
   */
  delete204(options?: HttpSuccessDelete204OptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      delete204OperationSpec
    );
  }

  /**
   * Return 404 status code
   * @param options The options parameters.
   */
  head404(options?: HttpSuccessHead404OptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, head404OperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const head200OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/200",
  httpMethod: "HEAD",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get200OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/200",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const options200OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/200",
  httpMethod: "OPTIONS",
  responses: {
    200: {
      bodyMapper: { type: { name: "Boolean" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const put200OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/200",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const patch200OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/200",
  httpMethod: "PATCH",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const post200OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/200",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const delete200OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/200",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const put201OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/201",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const post201OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/201",
  httpMethod: "POST",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const put202OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/202",
  httpMethod: "PUT",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const patch202OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/202",
  httpMethod: "PATCH",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const post202OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/202",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const delete202OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/202",
  httpMethod: "DELETE",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const head204OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/204",
  httpMethod: "HEAD",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const put204OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/204",
  httpMethod: "PUT",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const patch204OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/204",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const post204OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/204",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const delete204OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/204",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const head404OperationSpec: coreClient.OperationSpec = {
  path: "/http/success/404",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
