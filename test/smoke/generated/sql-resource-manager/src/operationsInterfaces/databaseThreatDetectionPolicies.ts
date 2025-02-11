/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SecurityAlertPolicyName,
  DatabaseThreatDetectionPoliciesGetOptionalParams,
  DatabaseThreatDetectionPoliciesGetResponse,
  DatabaseSecurityAlertPolicy,
  DatabaseThreatDetectionPoliciesCreateOrUpdateOptionalParams,
  DatabaseThreatDetectionPoliciesCreateOrUpdateResponse
} from "../models";

/** Interface representing a DatabaseThreatDetectionPolicies. */
export interface DatabaseThreatDetectionPolicies {
  /**
   * Gets a database's threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    options?: DatabaseThreatDetectionPoliciesGetOptionalParams
  ): Promise<DatabaseThreatDetectionPoliciesGetResponse>;
  /**
   * Creates or updates a database's threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is defined.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The database Threat Detection policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: DatabaseSecurityAlertPolicy,
    options?: DatabaseThreatDetectionPoliciesCreateOrUpdateOptionalParams
  ): Promise<DatabaseThreatDetectionPoliciesCreateOrUpdateResponse>;
}
