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
import { ComputeManagementClient } from "../computeManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  GalleryApplicationVersion,
  GalleryApplicationVersionsCreateOrUpdateResponse,
  GalleryApplicationVersionUpdate,
  GalleryApplicationVersionsUpdateResponse,
  GalleryApplicationVersionsGetOptionalParams,
  GalleryApplicationVersionsGetResponse,
  GalleryApplicationVersionsListByGalleryApplicationResponse,
  GalleryApplicationVersionsListByGalleryApplicationNextResponse
} from "../models";

/**
 * Class representing a GalleryApplicationVersions.
 */
export class GalleryApplicationVersions {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class GalleryApplicationVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   *                                  Version operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersion,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryApplicationVersionsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplicationVersionName,
      galleryApplicationVersion,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        GalleryApplicationVersionsCreateOrUpdateResponse
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
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   *                                  operation.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersionUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryApplicationVersionsUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplicationVersionName,
      galleryApplicationVersion,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        GalleryApplicationVersionsUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      updateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Retrieves information about a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsGetOptionalParams
  ): Promise<GalleryApplicationVersionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<GalleryApplicationVersionsGetResponse>;
  }

  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplicationVersionName,
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

  /**
   * List gallery Application Versions in a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
   *                               which the Application Versions are to be listed.
   * @param options The options parameters.
   */
  listByGalleryApplication(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GalleryApplicationVersionsListByGalleryApplicationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        options: operationOptions
      },
      listByGalleryApplicationOperationSpec
    ) as Promise<GalleryApplicationVersionsListByGalleryApplicationResponse>;
  }

  /**
   * ListByGalleryApplicationNext
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
   *                               which the Application Versions are to be listed.
   * @param nextLink The nextLink from the previous successful call to the ListByGalleryApplication
   *                 method.
   * @param options The options parameters.
   */
  listByGalleryApplicationNext(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GalleryApplicationVersionsListByGalleryApplicationNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        nextLink,
        options: operationOptions
      },
      listByGalleryApplicationNextOperationSpec
    ) as Promise<
      GalleryApplicationVersionsListByGalleryApplicationNextResponse
    >;
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

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    201: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    202: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    204: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryApplicationVersion,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    201: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    202: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    204: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryApplicationVersion1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryApplicationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryApplicationNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
