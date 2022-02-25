/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ObjectReplicationPolicy,
  StorageManagementClient
} from "@msinternal/storage-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update the object replication policy of the storage account.
 *
 * @summary Create or update the object replication policy of the storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/StorageAccountCreateObjectReplicationPolicyOnDestination.json
 */
async function storageAccountCreateObjectReplicationPolicyOnDestination() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res7687";
  const accountName = "dst112";
  const objectReplicationPolicyId = "default";
  const properties: ObjectReplicationPolicy = {
    destinationAccount: "dst112",
    rules: [
      {
        destinationContainer: "dcont139",
        filters: { prefixMatch: ["blobA", "blobB"] },
        sourceContainer: "scont139"
      }
    ],
    sourceAccount: "src1122"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.objectReplicationPoliciesOperations.createOrUpdate(
    resourceGroupName,
    accountName,
    objectReplicationPolicyId,
    properties
  );
  console.log(result);
}

storageAccountCreateObjectReplicationPolicyOnDestination().catch(console.error);

/**
 * This sample demonstrates how to Create or update the object replication policy of the storage account.
 *
 * @summary Create or update the object replication policy of the storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/StorageAccountCreateObjectReplicationPolicyOnSource.json
 */
async function storageAccountCreateObjectReplicationPolicyOnSource() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res7687";
  const accountName = "src1122";
  const objectReplicationPolicyId = "2a20bb73-5717-4635-985a-5d4cf777438f";
  const properties: ObjectReplicationPolicy = {
    destinationAccount: "dst112",
    rules: [
      {
        destinationContainer: "dcont139",
        filters: {
          minCreationTime: "2020-02-19T16:05:00Z",
          prefixMatch: ["blobA", "blobB"]
        },
        ruleId: "d5d18a48-8801-4554-aeaa-74faf65f5ef9",
        sourceContainer: "scont139"
      }
    ],
    sourceAccount: "src1122"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.objectReplicationPoliciesOperations.createOrUpdate(
    resourceGroupName,
    accountName,
    objectReplicationPolicyId,
    properties
  );
  console.log(result);
}

storageAccountCreateObjectReplicationPolicyOnSource().catch(console.error);

/**
 * This sample demonstrates how to Create or update the object replication policy of the storage account.
 *
 * @summary Create or update the object replication policy of the storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/StorageAccountUpdateObjectReplicationPolicyOnDestination.json
 */
async function storageAccountUpdateObjectReplicationPolicyOnDestination() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res7687";
  const accountName = "dst112";
  const objectReplicationPolicyId = "2a20bb73-5717-4635-985a-5d4cf777438f";
  const properties: ObjectReplicationPolicy = {
    destinationAccount: "dst112",
    rules: [
      {
        destinationContainer: "dcont139",
        filters: { prefixMatch: ["blobA", "blobB"] },
        ruleId: "d5d18a48-8801-4554-aeaa-74faf65f5ef9",
        sourceContainer: "scont139"
      },
      { destinationContainer: "dcont179", sourceContainer: "scont179" }
    ],
    sourceAccount: "src1122"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.objectReplicationPoliciesOperations.createOrUpdate(
    resourceGroupName,
    accountName,
    objectReplicationPolicyId,
    properties
  );
  console.log(result);
}

storageAccountUpdateObjectReplicationPolicyOnDestination().catch(console.error);

/**
 * This sample demonstrates how to Create or update the object replication policy of the storage account.
 *
 * @summary Create or update the object replication policy of the storage account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/examples/StorageAccountUpdateObjectReplicationPolicyOnSource.json
 */
async function storageAccountUpdateObjectReplicationPolicyOnSource() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res7687";
  const accountName = "src1122";
  const objectReplicationPolicyId = "2a20bb73-5717-4635-985a-5d4cf777438f";
  const properties: ObjectReplicationPolicy = {
    destinationAccount: "dst112",
    rules: [
      {
        destinationContainer: "dcont139",
        filters: { prefixMatch: ["blobA", "blobB"] },
        ruleId: "d5d18a48-8801-4554-aeaa-74faf65f5ef9",
        sourceContainer: "scont139"
      },
      {
        destinationContainer: "dcont179",
        ruleId: "cfbb4bc2-8b60-429f-b05a-d1e0942b33b2",
        sourceContainer: "scont179"
      }
    ],
    sourceAccount: "src1122"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.objectReplicationPoliciesOperations.createOrUpdate(
    resourceGroupName,
    accountName,
    objectReplicationPolicyId,
    properties
  );
  console.log(result);
}

storageAccountUpdateObjectReplicationPolicyOnSource().catch(console.error);
