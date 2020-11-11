/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  PrivateLinkServicesGetOptionalParams,
  PrivateLinkServicesGetResponse,
  PrivateLinkService,
  PrivateLinkServicesCreateOrUpdateResponse,
  PrivateLinkServicesListResponse,
  PrivateLinkServicesListBySubscriptionResponse,
  PrivateLinkServicesGetPrivateEndpointConnectionOptionalParams,
  PrivateLinkServicesGetPrivateEndpointConnectionResponse,
  PrivateEndpointConnection,
  PrivateLinkServicesUpdatePrivateEndpointConnectionResponse,
  PrivateLinkServicesListPrivateEndpointConnectionsResponse,
  CheckPrivateLinkServiceVisibilityRequest,
  PrivateLinkServicesCheckPrivateLinkServiceVisibilityResponse,
  PrivateLinkServicesCheckPrivateLinkServiceVisibilityByResourceGroupResponse,
  PrivateLinkServicesListAutoApprovedPrivateLinkServicesResponse,
  PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupResponse,
  PrivateLinkServicesListNextResponse,
  PrivateLinkServicesListBySubscriptionNextResponse,
  PrivateLinkServicesListPrivateEndpointConnectionsNextResponse,
  PrivateLinkServicesListAutoApprovedPrivateLinkServicesNextResponse,
  PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupNextResponse
} from "../models";

/**
 * Class representing a PrivateLinkServices.
 */
export class PrivateLinkServices {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkServices class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified private link service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serviceName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the specified private link service by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: PrivateLinkServicesGetOptionalParams
  ): Promise<PrivateLinkServicesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options: operationOptions },
      getOperationSpec
    ) as Promise<PrivateLinkServicesGetResponse>;
  }

  /**
   * Creates or updates an private link service in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param parameters Parameters supplied to the create or update private link service operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    parameters: PrivateLinkService,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<PrivateLinkServicesCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serviceName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        PrivateLinkServicesCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Gets all private link services in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listOperationSpec
    ) as Promise<PrivateLinkServicesListResponse>;
  }

  /**
   * Gets all private link service in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesListBySubscriptionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listBySubscriptionOperationSpec
    ) as Promise<PrivateLinkServicesListBySubscriptionResponse>;
  }

  /**
   * Get the specific private end point connection by specific private link service in the resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param peConnectionName The name of the private end point connection.
   * @param options The options parameters.
   */
  getPrivateEndpointConnection(
    resourceGroupName: string,
    serviceName: string,
    peConnectionName: string,
    options?: PrivateLinkServicesGetPrivateEndpointConnectionOptionalParams
  ): Promise<PrivateLinkServicesGetPrivateEndpointConnectionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        peConnectionName,
        options: operationOptions
      },
      getPrivateEndpointConnectionOperationSpec
    ) as Promise<PrivateLinkServicesGetPrivateEndpointConnectionResponse>;
  }

  /**
   * Approve or reject private end point connection for a private link service in a subscription.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param peConnectionName The name of the private end point connection.
   * @param parameters Parameters supplied to approve or reject the private end point connection.
   * @param options The options parameters.
   */
  updatePrivateEndpointConnection(
    resourceGroupName: string,
    serviceName: string,
    peConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesUpdatePrivateEndpointConnectionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        peConnectionName,
        parameters,
        options: operationOptions
      },
      updatePrivateEndpointConnectionOperationSpec
    ) as Promise<PrivateLinkServicesUpdatePrivateEndpointConnectionResponse>;
  }

  /**
   * Delete private end point connection for a private link service in a subscription.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param peConnectionName The name of the private end point connection.
   * @param options The options parameters.
   */
  async deletePrivateEndpointConnection(
    resourceGroupName: string,
    serviceName: string,
    peConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serviceName,
      peConnectionName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deletePrivateEndpointConnectionOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deletePrivateEndpointConnectionOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets all private end point connections for a specific private link service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param options The options parameters.
   */
  listPrivateEndpointConnections(
    resourceGroupName: string,
    serviceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesListPrivateEndpointConnectionsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options: operationOptions },
      listPrivateEndpointConnectionsOperationSpec
    ) as Promise<PrivateLinkServicesListPrivateEndpointConnectionsResponse>;
  }

  /**
   * Checks whether the subscription is visible to private link service.
   * @param location The location of the domain name.
   * @param parameters The request body of CheckPrivateLinkService API call.
   * @param options The options parameters.
   */
  checkPrivateLinkServiceVisibility(
    location: string,
    parameters: CheckPrivateLinkServiceVisibilityRequest,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesCheckPrivateLinkServiceVisibilityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, parameters, options: operationOptions },
      checkPrivateLinkServiceVisibilityOperationSpec
    ) as Promise<PrivateLinkServicesCheckPrivateLinkServiceVisibilityResponse>;
  }

  /**
   * Checks whether the subscription is visible to private link service in the specified resource group.
   * @param location The location of the domain name.
   * @param resourceGroupName The name of the resource group.
   * @param parameters The request body of CheckPrivateLinkService API call.
   * @param options The options parameters.
   */
  checkPrivateLinkServiceVisibilityByResourceGroup(
    location: string,
    resourceGroupName: string,
    parameters: CheckPrivateLinkServiceVisibilityRequest,
    options?: coreHttp.OperationOptions
  ): Promise<
    PrivateLinkServicesCheckPrivateLinkServiceVisibilityByResourceGroupResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, resourceGroupName, parameters, options: operationOptions },
      checkPrivateLinkServiceVisibilityByResourceGroupOperationSpec
    ) as Promise<
      PrivateLinkServicesCheckPrivateLinkServiceVisibilityByResourceGroupResponse
    >;
  }

  /**
   * Returns all of the private link service ids that can be linked to a Private Endpoint with auto
   * approved in this subscription in this region.
   * @param location The location of the domain name.
   * @param options The options parameters.
   */
  listAutoApprovedPrivateLinkServices(
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesListAutoApprovedPrivateLinkServicesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, options: operationOptions },
      listAutoApprovedPrivateLinkServicesOperationSpec
    ) as Promise<
      PrivateLinkServicesListAutoApprovedPrivateLinkServicesResponse
    >;
  }

  /**
   * Returns all of the private link service ids that can be linked to a Private Endpoint with auto
   * approved in this subscription in this region.
   * @param location The location of the domain name.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listAutoApprovedPrivateLinkServicesByResourceGroup(
    location: string,
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, resourceGroupName, options: operationOptions },
      listAutoApprovedPrivateLinkServicesByResourceGroupOperationSpec
    ) as Promise<
      PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupResponse
    >;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<PrivateLinkServicesListNextResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  listBySubscriptionNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesListBySubscriptionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listBySubscriptionNextOperationSpec
    ) as Promise<PrivateLinkServicesListBySubscriptionNextResponse>;
  }

  /**
   * ListPrivateEndpointConnectionsNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the private link service.
   * @param nextLink The nextLink from the previous successful call to the ListPrivateEndpointConnections
   *                 method.
   * @param options The options parameters.
   */
  listPrivateEndpointConnectionsNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateLinkServicesListPrivateEndpointConnectionsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options: operationOptions },
      listPrivateEndpointConnectionsNextOperationSpec
    ) as Promise<PrivateLinkServicesListPrivateEndpointConnectionsNextResponse>;
  }

  /**
   * ListAutoApprovedPrivateLinkServicesNext
   * @param location The location of the domain name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListAutoApprovedPrivateLinkServices method.
   * @param options The options parameters.
   */
  listAutoApprovedPrivateLinkServicesNext(
    location: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PrivateLinkServicesListAutoApprovedPrivateLinkServicesNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, nextLink, options: operationOptions },
      listAutoApprovedPrivateLinkServicesNextOperationSpec
    ) as Promise<
      PrivateLinkServicesListAutoApprovedPrivateLinkServicesNextResponse
    >;
  }

  /**
   * ListAutoApprovedPrivateLinkServicesByResourceGroupNext
   * @param location The location of the domain name.
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListAutoApprovedPrivateLinkServicesByResourceGroup method.
   * @param options The options parameters.
   */
  listAutoApprovedPrivateLinkServicesByResourceGroupNext(
    location: string,
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, resourceGroupName, nextLink, options: operationOptions },
      listAutoApprovedPrivateLinkServicesByResourceGroupNextOperationSpec
    ) as Promise<
      PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupNextResponse
    >;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkService
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkService
    },
    201: {
      bodyMapper: Mappers.PrivateLinkService
    },
    202: {
      bodyMapper: Mappers.PrivateLinkService
    },
    204: {
      bodyMapper: Mappers.PrivateLinkService
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters39,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/privateLinkServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getPrivateEndpointConnectionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}/privateEndpointConnections/{peConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.peConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updatePrivateEndpointConnectionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}/privateEndpointConnections/{peConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.parameters40,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.peConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deletePrivateEndpointConnectionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}/privateEndpointConnections/{peConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.peConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPrivateEndpointConnectionsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateLinkServices/{serviceName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkPrivateLinkServiceVisibilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/checkPrivateLinkServiceVisibility",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServiceVisibility
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters41,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const checkPrivateLinkServiceVisibilityByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/checkPrivateLinkServiceVisibility",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServiceVisibility
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters41,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAutoApprovedPrivateLinkServicesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/autoApprovedPrivateLinkServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoApprovedPrivateLinkServicesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAutoApprovedPrivateLinkServicesByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/autoApprovedPrivateLinkServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoApprovedPrivateLinkServicesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPrivateEndpointConnectionsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAutoApprovedPrivateLinkServicesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoApprovedPrivateLinkServicesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAutoApprovedPrivateLinkServicesByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AutoApprovedPrivateLinkServicesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
