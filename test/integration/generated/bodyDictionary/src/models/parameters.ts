/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationParameter, OperationURLParameter } from "@azure/core-http";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const arrayBody: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "String" } }
    }
  }
};

export const arrayBody1: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "Boolean" } }
    }
  }
};

export const arrayBody2: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "Number" } }
    }
  }
};

export const arrayBody3: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "Date" } }
    }
  }
};

export const arrayBody4: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "DateTime" } }
    }
  }
};

export const arrayBody5: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "DateTimeRfc1123" } }
    }
  }
};

export const arrayBody6: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "TimeSpan" } }
    }
  }
};

export const arrayBody7: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "ByteArray" } }
    }
  }
};

export const arrayBody8: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "Composite", className: "Widget" } }
    }
  }
};

export const arrayBody9: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    }
  }
};

export const arrayBody10: OperationParameter = {
  parameterPath: "arrayBody",
  mapper: {
    serializedName: "arrayBody",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};
