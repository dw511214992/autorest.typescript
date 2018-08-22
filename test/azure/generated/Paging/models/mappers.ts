/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ProductProperties: msRest.CompositeMapper = {
  serializedName: "Product_properties",
  type: {
    name: "Composite",
    className: "ProductProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Product: msRest.CompositeMapper = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ProductProperties"
        }
      }
    }
  }
};

export const OperationResult: msRest.CompositeMapper = {
  serializedName: "OperationResult",
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetOdataMultiplePagesOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PagingGetOdataMultiplePagesOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      offset: {
        required: true,
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CustomParameterGroup: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomParameterGroup",
    modelProperties: {
      apiVersion: {
        required: true,
        type: {
          name: "String"
        }
      },
      tenant: {
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesLROOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesLROOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetNextOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetNextOptions",
    modelProperties: {
      maxresults: {
        type: {
          name: "Number"
        }
      },
      timeout: {
        defaultValue: 30,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetMultiplePagesOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetOdataMultiplePagesOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetOdataMultiplePagesOptions",
  type: {
    name: "Composite",
    className: "PagingGetOdataMultiplePagesOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetOdataMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetOdataMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetMultiplePagesWithOffsetOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesLROOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetMultiplePagesLROOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesLROOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const PagingBeginGetMultiplePagesLROOptionalParams: msRest.CompositeMapper = {
  serializedName: "BeginGetMultiplePagesLROOptions",
  type: {
    name: "Composite",
    className: "PagingBeginGetMultiplePagesLROOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesNextOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetMultiplePagesNextOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesNextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetOdataMultiplePagesNextOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetOdataMultiplePagesNextOptions",
  type: {
    name: "Composite",
    className: "PagingGetOdataMultiplePagesNextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetOdataMultiplePagesOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetOdataMultiplePagesOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesWithOffsetNextOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetMultiplePagesWithOffsetNextOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesWithOffsetNextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesWithOffsetNextOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesWithOffsetNextOptions"
        }
      }
    }
  }
};

export const PagingGetMultiplePagesLRONextOptionalParams: msRest.CompositeMapper = {
  serializedName: "GetMultiplePagesLRONextOptions",
  type: {
    name: "Composite",
    className: "PagingGetMultiplePagesLRONextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const PagingBeginGetMultiplePagesLRONextOptionalParams: msRest.CompositeMapper = {
  serializedName: "BeginGetMultiplePagesLRONextOptions",
  type: {
    name: "Composite",
    className: "PagingBeginGetMultiplePagesLRONextOptionalParams",
    modelProperties: {
      clientRequestId: {
        serializedName: "client-request-id",
        type: {
          name: "String"
        }
      },
      pagingGetMultiplePagesLROOptions: {
        serializedName: "",
        type: {
          name: "Composite",
          className: "PagingGetMultiplePagesLROOptions"
        }
      }
    }
  }
};

export const ProductResult: msRest.CompositeMapper = {
  serializedName: "ProductResult",
  type: {
    name: "Composite",
    className: "ProductResult",
    modelProperties: {
      values: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OdataProductResult: msRest.CompositeMapper = {
  serializedName: "OdataProductResult",
  type: {
    name: "Composite",
    className: "OdataProductResult",
    modelProperties: {
      values: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Product"
            }
          }
        }
      },
      odatanextLink: {
        serializedName: "odata\\.nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
