/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets a list of service tag information resources with pagination.
 *
 * @summary Gets a list of service tag information resources with pagination.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ServiceTagInformationListResultWithTagname.json
 */
import {
  ServiceTagInformationListOptionalParams,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getListOfServiceTagsWithTagName() {
  const subscriptionId = "subid";
  const location = "westeurope";
  const tagName = "ApiManagement";
  const options: ServiceTagInformationListOptionalParams = { tagName };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.serviceTagInformationOperations.list(
    location,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getListOfServiceTagsWithTagName().catch(console.error);
