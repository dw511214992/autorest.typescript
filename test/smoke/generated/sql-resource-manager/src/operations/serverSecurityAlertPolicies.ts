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
import { SqlManagementClient } from "../sqlManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  SecurityAlertPolicyNameAutoGenerated,
  ServerSecurityAlertPoliciesGetResponse,
  ServerSecurityAlertPolicy,
  ServerSecurityAlertPoliciesCreateOrUpdateResponse,
  ServerSecurityAlertPoliciesListByServerResponse,
  ServerSecurityAlertPoliciesListByServerNextResponse
} from "../models";

/**
 * Class representing a ServerSecurityAlertPolicies.
 */
export class ServerSecurityAlertPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerSecurityAlertPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Get a server's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    options?: coreHttp.OperationOptions
  ): Promise<ServerSecurityAlertPoliciesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        securityAlertPolicyName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<ServerSecurityAlertPoliciesGetResponse>;
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the threat detection policy.
   * @param parameters The server security alert policy.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ServerSecurityAlertPoliciesCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      securityAlertPolicyName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ServerSecurityAlertPoliciesCreateOrUpdateResponse
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
   * Get the server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServerSecurityAlertPoliciesListByServerResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options: operationOptions },
      listByServerOperationSpec
    ) as Promise<ServerSecurityAlertPoliciesListByServerResponse>;
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServerSecurityAlertPoliciesListByServerNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options: operationOptions },
      listByServerNextOperationSpec
    ) as Promise<ServerSecurityAlertPoliciesListByServerNextResponse>;
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

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    202: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    204: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters43,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
