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
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  PrivateEndpointConnectionsListByDatabaseAccountResponse,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionAutoGenerated,
  PrivateEndpointConnectionsCreateOrUpdateResponse
} from "../models";

/**
 * Class representing a PrivateEndpointConnections.
 */
export class PrivateEndpointConnections {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * List all private endpoint connections on a Cosmos DB account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateEndpointConnectionsListByDatabaseAccountResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options: operationOptions },
      listByDatabaseAccountOperationSpec
    ) as Promise<PrivateEndpointConnectionsListByDatabaseAccountResponse>;
  }

  /**
   * Gets a private endpoint connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<PrivateEndpointConnectionsGetResponse>;
  }

  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnectionAutoGenerated,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<PrivateEndpointConnectionsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      privateEndpointConnectionName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        PrivateEndpointConnectionsCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      privateEndpointConnectionName,
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
      sendOperation
    });
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

const listByDatabaseAccountOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionAutoGenerated
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnectionAutoGenerated
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnectionAutoGenerated
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnectionAutoGenerated
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
