/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import { MetricsImpl } from "./operations";
import { Metrics } from "./operationsInterfaces";
import { MonitorClientContext } from "./monitorClientContext";
import { MonitorClientOptionalParams } from "./models";

export class MonitorClient extends MonitorClientContext {
  /**
   * Initializes a new instance of the MonitorClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: MonitorClientOptionalParams
  ) {
    super(credentials, options);
    this.metrics = new MetricsImpl(this);
  }

  metrics: Metrics;
}
