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
import * as operations from "./operations";
import { AutoRestPagingTestServiceContext } from "./autoRestPagingTestServiceContext";


class AutoRestPagingTestService extends AutoRestPagingTestServiceContext {
  // Operation groups
  paging: operations.Paging;

  /**
   * Initializes a new instance of the AutoRestPagingTestService class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials needed to
   * authenticate the client using Azure Active Directory. Credentials implementing the
   * TokenCredential interface from the @azure/identity package are recommended. Credentials
   * implementing the ServiceClientCredentials interface from the older packages
   * @azure/ms-rest-nodeauth and @azure/ms-rest-browserauth are also supported. The simplest
   * TokenCredential credential can be obtained as follows:
   * ```js
   * const { DefaultAzureCredential } = require("@azure/identity");
   * const credential = new DefaultAzureCredential();
   * ```
   * For more information about these credentials, see {@link http://aka.ms/AAaz61x}
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, options?: Models.AutoRestPagingTestServiceOptions) {
    super(credentials, options);
    this.paging = new operations.Paging(this);
  }
}

// Operation Specifications

export {
  AutoRestPagingTestService,
  AutoRestPagingTestServiceContext,
  Models as AutoRestPagingTestServiceModels,
  Mappers as AutoRestPagingTestServiceMappers
};
export * from "./operations";
