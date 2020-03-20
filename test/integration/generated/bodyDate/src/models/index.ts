/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * Contains response data for the getNull operation.
 */
export type DateModelGetNullResponse = {
  /**
   * The parsed response body.
   */
  body: Date;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Date;
  };
};

/**
 * Contains response data for the getInvalidDate operation.
 */
export type DateModelGetInvalidDateResponse = {
  /**
   * The parsed response body.
   */
  body: Date;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Date;
  };
};

/**
 * Contains response data for the getOverflowDate operation.
 */
export type DateModelGetOverflowDateResponse = {
  /**
   * The parsed response body.
   */
  body: Date;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Date;
  };
};

/**
 * Contains response data for the getUnderflowDate operation.
 */
export type DateModelGetUnderflowDateResponse = {
  /**
   * The parsed response body.
   */
  body: Date;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Date;
  };
};

/**
 * Contains response data for the getMaxDate operation.
 */
export type DateModelGetMaxDateResponse = {
  /**
   * The parsed response body.
   */
  body: Date;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Date;
  };
};

/**
 * Contains response data for the getMinDate operation.
 */
export type DateModelGetMinDateResponse = {
  /**
   * The parsed response body.
   */
  body: Date;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Date;
  };
};

/**
 * Optional parameters.
 */
export interface BodyDateClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
