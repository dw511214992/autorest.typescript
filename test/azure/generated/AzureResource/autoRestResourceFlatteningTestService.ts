/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AutoRestResourceFlatteningTestServiceContext } from "./autoRestResourceFlatteningTestServiceContext";


class AutoRestResourceFlatteningTestService extends AutoRestResourceFlatteningTestServiceContext {
  /**
   * Initializes a new instance of the AutoRestResourceFlatteningTestService class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, options?: Models.AutoRestResourceFlatteningTestServiceOptions) {
    super(credentials, options);
  }

  /**
   * Put External Resource as an Array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putArray(options?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putArray(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putArray(options: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putArray(options?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      putArrayOperationSpec,
      callback);
  }

  /**
   * Get External Resource as an Array
   * @param [options] The optional parameters
   * @returns Promise<Models.GetArrayResponse>
   */
  getArray(options?: msRest.RequestOptionsBase): Promise<Models.GetArrayResponse>;
  /**
   * @param callback The callback
   */
  getArray(callback: msRest.ServiceCallback<Models.FlattenedProduct[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getArray(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlattenedProduct[]>): void;
  getArray(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FlattenedProduct[]>, callback?: msRest.ServiceCallback<Models.FlattenedProduct[]>): Promise<Models.GetArrayResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getArrayOperationSpec,
      callback) as Promise<Models.GetArrayResponse>;
  }

  /**
   * Put External Resource as a Dictionary
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putDictionary(options?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putDictionary(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putDictionary(options: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putDictionary(options?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      putDictionaryOperationSpec,
      callback);
  }

  /**
   * Get External Resource as a Dictionary
   * @param [options] The optional parameters
   * @returns Promise<Models.GetDictionaryResponse>
   */
  getDictionary(options?: msRest.RequestOptionsBase): Promise<Models.GetDictionaryResponse>;
  /**
   * @param callback The callback
   */
  getDictionary(callback: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDictionary(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  getDictionary(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>, callback?: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): Promise<Models.GetDictionaryResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getDictionaryOperationSpec,
      callback) as Promise<Models.GetDictionaryResponse>;
  }

  /**
   * Put External Resource as a ResourceCollection
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putResourceCollection(options?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  putResourceCollection(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putResourceCollection(options: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putResourceCollection(options?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      putResourceCollectionOperationSpec,
      callback);
  }

  /**
   * Get External Resource as a ResourceCollection
   * @param [options] The optional parameters
   * @returns Promise<Models.GetResourceCollectionResponse>
   */
  getResourceCollection(options?: msRest.RequestOptionsBase): Promise<Models.GetResourceCollectionResponse>;
  /**
   * @param callback The callback
   */
  getResourceCollection(callback: msRest.ServiceCallback<Models.ResourceCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getResourceCollection(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceCollection>): void;
  getResourceCollection(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceCollection>, callback?: msRest.ServiceCallback<Models.ResourceCollection>): Promise<Models.GetResourceCollectionResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getResourceCollectionOperationSpec,
      callback) as Promise<Models.GetResourceCollectionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const putArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceArray"
    ],
    mapper: {
      serializedName: "ResourceArray",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "Resource"
          }
        }
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDictionaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceDictionary"
    ],
    mapper: {
      serializedName: "ResourceDictionary",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "Composite",
            className: "FlattenedProduct"
          }
        }
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDictionaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putResourceCollectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceComplexObject"
    ],
    mapper: Mappers.ResourceCollection
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getResourceCollectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  AutoRestResourceFlatteningTestService,
  AutoRestResourceFlatteningTestServiceContext,
  Models as AutoRestResourceFlatteningTestServiceModels,
  Mappers as AutoRestResourceFlatteningTestServiceMappers
};
