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
  ExpressRouteCrossConnectionsListResponse,
  ExpressRouteCrossConnectionsListByResourceGroupResponse,
  ExpressRouteCrossConnectionsGetResponse,
  ExpressRouteCrossConnection,
  ExpressRouteCrossConnectionsCreateOrUpdateResponse,
  TagsObject,
  ExpressRouteCrossConnectionsUpdateTagsResponse,
  ExpressRouteCrossConnectionsListArpTableResponse,
  ExpressRouteCrossConnectionsListRoutesTableSummaryResponse,
  ExpressRouteCrossConnectionsListRoutesTableResponse,
  ExpressRouteCrossConnectionsListNextResponse,
  ExpressRouteCrossConnectionsListByResourceGroupNextResponse
} from "../models";

/**
 * Class representing a ExpressRouteCrossConnections.
 */
export class ExpressRouteCrossConnections {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ExpressRouteCrossConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCrossConnectionsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<ExpressRouteCrossConnectionsListResponse>;
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCrossConnectionsListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<ExpressRouteCrossConnectionsListByResourceGroupResponse>;
  }

  /**
   * Gets details about the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group (peering location of the circuit).
   * @param crossConnectionName The name of the ExpressRouteCrossConnection (service key of the circuit).
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    crossConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCrossConnectionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, crossConnectionName, options: operationOptions },
      getOperationSpec
    ) as Promise<ExpressRouteCrossConnectionsGetResponse>;
  }

  /**
   * Update the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param parameters Parameters supplied to the update express route crossConnection operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    crossConnectionName: string,
    parameters: ExpressRouteCrossConnection,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ExpressRouteCrossConnectionsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      crossConnectionName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ExpressRouteCrossConnectionsCreateOrUpdateResponse
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
   * Updates an express route cross connection tags.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the cross connection.
   * @param crossConnectionParameters Parameters supplied to update express route cross connection tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    crossConnectionName: string,
    crossConnectionParameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCrossConnectionsUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        crossConnectionName,
        crossConnectionParameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<ExpressRouteCrossConnectionsUpdateTagsResponse>;
  }

  /**
   * Gets the currently advertised ARP table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async listArpTable(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ExpressRouteCrossConnectionsListArpTableResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      crossConnectionName,
      peeringName,
      devicePath,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ExpressRouteCrossConnectionsListArpTableResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      listArpTableOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: listArpTableOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the route table summary associated with the express route cross connection in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async listRoutesTableSummary(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>
  > {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      crossConnectionName,
      peeringName,
      devicePath,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ExpressRouteCrossConnectionsListRoutesTableSummaryResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      listRoutesTableSummaryOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: listRoutesTableSummaryOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the currently advertised routes table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  async listRoutesTable(
    resourceGroupName: string,
    crossConnectionName: string,
    peeringName: string,
    devicePath: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ExpressRouteCrossConnectionsListRoutesTableResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      crossConnectionName,
      peeringName,
      devicePath,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ExpressRouteCrossConnectionsListRoutesTableResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      listRoutesTableOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: listRoutesTableOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCrossConnectionsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<ExpressRouteCrossConnectionsListNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCrossConnectionsListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<ExpressRouteCrossConnectionsListByResourceGroupNextResponse>;
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

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCrossConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
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
    Parameters.crossConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    202: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    204: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.crossConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.crossConnectionParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.crossConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listArpTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/arpTables/{devicePath}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult
    },
    202: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult
    },
    204: {
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult
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
    Parameters.peeringName,
    Parameters.devicePath,
    Parameters.crossConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRoutesTableSummaryOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTablesSummary/{devicePath}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult
    },
    201: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult
    },
    202: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult
    },
    204: {
      bodyMapper:
        Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult
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
    Parameters.peeringName,
    Parameters.devicePath,
    Parameters.crossConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRoutesTableOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTables/{devicePath}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult
    },
    202: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult
    },
    204: {
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult
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
    Parameters.peeringName,
    Parameters.devicePath,
    Parameters.crossConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
