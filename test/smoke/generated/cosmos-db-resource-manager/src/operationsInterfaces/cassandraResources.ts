/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  CassandraKeyspaceGetResults,
  CassandraResourcesListCassandraKeyspacesOptionalParams,
  CassandraTableGetResults,
  CassandraResourcesListCassandraTablesOptionalParams,
  CassandraResourcesGetCassandraKeyspaceOptionalParams,
  CassandraResourcesGetCassandraKeyspaceResponse,
  CassandraKeyspaceCreateUpdateParameters,
  CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams,
  CassandraResourcesCreateUpdateCassandraKeyspaceResponse,
  CassandraResourcesDeleteCassandraKeyspaceOptionalParams,
  CassandraResourcesGetCassandraKeyspaceThroughputOptionalParams,
  CassandraResourcesGetCassandraKeyspaceThroughputResponse,
  ThroughputSettingsUpdateParameters,
  CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams,
  CassandraResourcesUpdateCassandraKeyspaceThroughputResponse,
  CassandraResourcesGetCassandraTableOptionalParams,
  CassandraResourcesGetCassandraTableResponse,
  CassandraTableCreateUpdateParameters,
  CassandraResourcesCreateUpdateCassandraTableOptionalParams,
  CassandraResourcesCreateUpdateCassandraTableResponse,
  CassandraResourcesDeleteCassandraTableOptionalParams,
  CassandraResourcesGetCassandraTableThroughputOptionalParams,
  CassandraResourcesGetCassandraTableThroughputResponse,
  CassandraResourcesUpdateCassandraTableThroughputOptionalParams,
  CassandraResourcesUpdateCassandraTableThroughputResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CassandraResources. */
export interface CassandraResources {
  /**
   * Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listCassandraKeyspaces(
    resourceGroupName: string,
    accountName: string,
    options?: CassandraResourcesListCassandraKeyspacesOptionalParams
  ): PagedAsyncIterableIterator<CassandraKeyspaceGetResults>;
  /**
   * Lists the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  listCassandraTables(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesListCassandraTablesOptionalParams
  ): PagedAsyncIterableIterator<CassandraTableGetResults>;
  /**
   * Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  getCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesGetCassandraKeyspaceOptionalParams
  ): Promise<CassandraResourcesGetCassandraKeyspaceResponse>;
  /**
   * Create or update an Azure Cosmos DB Cassandra keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param createUpdateCassandraKeyspaceParameters The parameters to provide for the current Cassandra
   *                                                keyspace.
   * @param options The options parameters.
   */
  beginCreateUpdateCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        CassandraResourcesCreateUpdateCassandraKeyspaceResponse
      >,
      CassandraResourcesCreateUpdateCassandraKeyspaceResponse
    >
  >;
  /**
   * Create or update an Azure Cosmos DB Cassandra keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param createUpdateCassandraKeyspaceParameters The parameters to provide for the current Cassandra
   *                                                keyspace.
   * @param options The options parameters.
   */
  beginCreateUpdateCassandraKeyspaceAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    createUpdateCassandraKeyspaceParameters: CassandraKeyspaceCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraKeyspaceOptionalParams
  ): Promise<CassandraResourcesCreateUpdateCassandraKeyspaceResponse>;
  /**
   * Deletes an existing Azure Cosmos DB Cassandra keyspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  beginDeleteCassandraKeyspace(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesDeleteCassandraKeyspaceOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing Azure Cosmos DB Cassandra keyspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  beginDeleteCassandraKeyspaceAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesDeleteCassandraKeyspaceOptionalParams
  ): Promise<void>;
  /**
   * Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param options The options parameters.
   */
  getCassandraKeyspaceThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    options?: CassandraResourcesGetCassandraKeyspaceThroughputOptionalParams
  ): Promise<CassandraResourcesGetCassandraKeyspaceThroughputResponse>;
  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra Keyspace.
   * @param options The options parameters.
   */
  beginUpdateCassandraKeyspaceThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        CassandraResourcesUpdateCassandraKeyspaceThroughputResponse
      >,
      CassandraResourcesUpdateCassandraKeyspaceThroughputResponse
    >
  >;
  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra Keyspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra Keyspace.
   * @param options The options parameters.
   */
  beginUpdateCassandraKeyspaceThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraKeyspaceThroughputOptionalParams
  ): Promise<CassandraResourcesUpdateCassandraKeyspaceThroughputResponse>;
  /**
   * Gets the Cassandra table under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesGetCassandraTableOptionalParams
  ): Promise<CassandraResourcesGetCassandraTableResponse>;
  /**
   * Create or update an Azure Cosmos DB Cassandra Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateCassandraTableParameters The parameters to provide for the current Cassandra
   *                                             Table.
   * @param options The options parameters.
   */
  beginCreateUpdateCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    createUpdateCassandraTableParameters: CassandraTableCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraTableOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CassandraResourcesCreateUpdateCassandraTableResponse>,
      CassandraResourcesCreateUpdateCassandraTableResponse
    >
  >;
  /**
   * Create or update an Azure Cosmos DB Cassandra Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateCassandraTableParameters The parameters to provide for the current Cassandra
   *                                             Table.
   * @param options The options parameters.
   */
  beginCreateUpdateCassandraTableAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    createUpdateCassandraTableParameters: CassandraTableCreateUpdateParameters,
    options?: CassandraResourcesCreateUpdateCassandraTableOptionalParams
  ): Promise<CassandraResourcesCreateUpdateCassandraTableResponse>;
  /**
   * Deletes an existing Azure Cosmos DB Cassandra table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginDeleteCassandraTable(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesDeleteCassandraTableOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an existing Azure Cosmos DB Cassandra table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  beginDeleteCassandraTableAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesDeleteCassandraTableOptionalParams
  ): Promise<void>;
  /**
   * Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getCassandraTableThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    options?: CassandraResourcesGetCassandraTableThroughputOptionalParams
  ): Promise<CassandraResourcesGetCassandraTableThroughputResponse>;
  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra table.
   * @param options The options parameters.
   */
  beginUpdateCassandraTableThroughput(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraTableThroughputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        CassandraResourcesUpdateCassandraTableThroughputResponse
      >,
      CassandraResourcesUpdateCassandraTableThroughputResponse
    >
  >;
  /**
   * Update RUs per second of an Azure Cosmos DB Cassandra table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param keyspaceName Cosmos DB keyspace name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Cassandra table.
   * @param options The options parameters.
   */
  beginUpdateCassandraTableThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    keyspaceName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: CassandraResourcesUpdateCassandraTableThroughputOptionalParams
  ): Promise<CassandraResourcesUpdateCassandraTableThroughputResponse>;
}
