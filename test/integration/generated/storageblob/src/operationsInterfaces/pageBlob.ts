import * as coreHttp from "@azure/core-http";
import {
  PageBlobUploadPagesOptionalParams,
  PageBlobUploadPagesResponse
} from "../models";

/** Interface representing a PageBlob. */
export interface PageBlob {
  /**
   * The Upload Pages operation writes a range of pages to a page blob
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The options parameters.
   */
  uploadPages(
    contentLength: number,
    body: coreHttp.HttpRequestBody,
    options?: PageBlobUploadPagesOptionalParams
  ): Promise<PageBlobUploadPagesResponse>;
}
