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
import { WebSiteManagementClient } from "../webSiteManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  NameIdentifier,
  DomainsCheckAvailabilityResponse,
  DomainsListResponse,
  DomainsGetControlCenterSsoRequestResponse,
  DomainRecommendationSearchParameters,
  DomainsListRecommendationsResponse,
  DomainsListByResourceGroupResponse,
  DomainsGetResponse,
  Domain,
  DomainsCreateOrUpdateResponse,
  DomainsDeleteOptionalParams,
  DomainPatchResource,
  DomainsUpdateResponse,
  DomainsListOwnershipIdentifiersResponse,
  DomainsGetOwnershipIdentifierResponse,
  DomainOwnershipIdentifier,
  DomainsCreateOrUpdateOwnershipIdentifierResponse,
  DomainsUpdateOwnershipIdentifierResponse,
  DomainsListNextResponse,
  DomainsListRecommendationsNextResponse,
  DomainsListByResourceGroupNextResponse,
  DomainsListOwnershipIdentifiersNextResponse
} from "../models";

/**
 * Class representing a Domains.
 */
export class Domains {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class Domains class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for Check if a domain is available for registration.
   * @param identifier Name of the domain.
   * @param options The options parameters.
   */
  checkAvailability(
    identifier: NameIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsCheckAvailabilityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { identifier, options: operationOptions },
      checkAvailabilityOperationSpec
    ) as Promise<DomainsCheckAvailabilityResponse>;
  }

  /**
   * Description for Get all domains in a subscription.
   * @param options The options parameters.
   */
  list(options?: coreHttp.OperationOptions): Promise<DomainsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<DomainsListResponse>;
  }

  /**
   * Description for Generate a single sign-on request for the domain management portal.
   * @param options The options parameters.
   */
  getControlCenterSsoRequest(
    options?: coreHttp.OperationOptions
  ): Promise<DomainsGetControlCenterSsoRequestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getControlCenterSsoRequestOperationSpec
    ) as Promise<DomainsGetControlCenterSsoRequestResponse>;
  }

  /**
   * Description for Get domain name recommendations based on keywords.
   * @param parameters Search parameters for domain name recommendations.
   * @param options The options parameters.
   */
  listRecommendations(
    parameters: DomainRecommendationSearchParameters,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListRecommendationsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { parameters, options: operationOptions },
      listRecommendationsOperationSpec
    ) as Promise<DomainsListRecommendationsResponse>;
  }

  /**
   * Description for Get all domains in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<DomainsListByResourceGroupResponse>;
  }

  /**
   * Description for Get a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options: operationOptions },
      getOperationSpec
    ) as Promise<DomainsGetResponse>;
  }

  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    domainName: string,
    domain: Domain,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<DomainsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      domainName,
      domain,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        DomainsCreateOrUpdateResponse
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
   * Description for Delete a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    domainName: string,
    options?: DomainsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Creates or updates a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param domain Domain registration information.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    domainName: string,
    domain: DomainPatchResource,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, domain, options: operationOptions },
      updateOperationSpec
    ) as Promise<DomainsUpdateResponse>;
  }

  /**
   * Description for Lists domain ownership identifiers.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param options The options parameters.
   */
  listOwnershipIdentifiers(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListOwnershipIdentifiersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options: operationOptions },
      listOwnershipIdentifiersOperationSpec
    ) as Promise<DomainsListOwnershipIdentifiersResponse>;
  }

  /**
   * Description for Get ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  getOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsGetOwnershipIdentifierResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, name, options: operationOptions },
      getOwnershipIdentifierOperationSpec
    ) as Promise<DomainsGetOwnershipIdentifierResponse>;
  }

  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  createOrUpdateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainName,
        name,
        domainOwnershipIdentifier,
        options: operationOptions
      },
      createOrUpdateOwnershipIdentifierOperationSpec
    ) as Promise<DomainsCreateOrUpdateOwnershipIdentifierResponse>;
  }

  /**
   * Description for Delete ownership identifier for domain
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param options The options parameters.
   */
  deleteOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, name, options: operationOptions },
      deleteOwnershipIdentifierOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Creates an ownership identifier for a domain or updates identifier details for an
   * existing identifer
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param name Name of identifier.
   * @param domainOwnershipIdentifier A JSON representation of the domain ownership properties.
   * @param options The options parameters.
   */
  updateOwnershipIdentifier(
    resourceGroupName: string,
    domainName: string,
    name: string,
    domainOwnershipIdentifier: DomainOwnershipIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsUpdateOwnershipIdentifierResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        domainName,
        name,
        domainOwnershipIdentifier,
        options: operationOptions
      },
      updateOwnershipIdentifierOperationSpec
    ) as Promise<DomainsUpdateOwnershipIdentifierResponse>;
  }

  /**
   * Description for Renew a domain.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of the domain.
   * @param options The options parameters.
   */
  renew(
    resourceGroupName: string,
    domainName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, options: operationOptions },
      renewOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<DomainsListNextResponse>;
  }

  /**
   * ListRecommendationsNext
   * @param parameters Search parameters for domain name recommendations.
   * @param nextLink The nextLink from the previous successful call to the ListRecommendations method.
   * @param options The options parameters.
   */
  listRecommendationsNext(
    parameters: DomainRecommendationSearchParameters,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListRecommendationsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { parameters, nextLink, options: operationOptions },
      listRecommendationsNextOperationSpec
    ) as Promise<DomainsListRecommendationsNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<DomainsListByResourceGroupNextResponse>;
  }

  /**
   * ListOwnershipIdentifiersNext
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param domainName Name of domain.
   * @param nextLink The nextLink from the previous successful call to the ListOwnershipIdentifiers
   *                 method.
   * @param options The options parameters.
   */
  listOwnershipIdentifiersNext(
    resourceGroupName: string,
    domainName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DomainsListOwnershipIdentifiersNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, domainName, nextLink, options: operationOptions },
      listOwnershipIdentifiersNextOperationSpec
    ) as Promise<DomainsListOwnershipIdentifiersNextResponse>;
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

const checkAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/checkDomainAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DomainAvailabilityCheckResult
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.identifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getControlCenterSsoRequestOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/generateSsoRequest",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DomainControlCenterSsoRequest
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendationsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/listDomainRecommendations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    201: {
      bodyMapper: Mappers.Domain
    },
    202: {
      bodyMapper: Mappers.Domain
    },
    204: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domain,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.forceHardDeleteDomain],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Domain
    },
    202: {
      bodyMapper: Mappers.Domain
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domain1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOwnershipIdentifiersOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domainOwnershipIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOwnershipIdentifierOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifier
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.domainOwnershipIdentifier,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const renewOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/renew",
  httpMethod: "POST",
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendationsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NameIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOwnershipIdentifiersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainOwnershipIdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.domainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
