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
  PublicIPAddress,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PublicIpAddressCreateDns.json
 */
async function createPublicIPAddressDns() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const publicIpAddressName = "test-ip";
  const parameters: PublicIPAddress = {
    dnsSettings: { domainNameLabel: "dnslbl" },
    location: "eastus"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

createPublicIPAddressDns().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PublicIpAddressCreateCustomizedValues.json
 */
async function createPublicIPAddressAllocationMethod() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const publicIpAddressName = "test-ip";
  const parameters: PublicIPAddress = {
    idleTimeoutInMinutes: 10,
    location: "eastus",
    publicIPAddressVersion: "IPv4",
    publicIPAllocationMethod: "Static",
    sku: { name: "Standard", tier: "Global" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

createPublicIPAddressAllocationMethod().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PublicIpAddressCreateDefaults.json
 */
async function createPublicIPAddressDefaults() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const publicIpAddressName = "test-ip";
  const parameters: PublicIPAddress = { location: "eastus" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

createPublicIPAddressDefaults().catch(console.error);
