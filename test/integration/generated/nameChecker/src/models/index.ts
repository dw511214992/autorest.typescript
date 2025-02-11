import * as coreClient from "@azure/core-client";

/** Describes an error condition for the Azure Cognitive Search API. */
export interface SearchError {
  /**
   * One of a server-defined set of error codes.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * A human-readable representation of the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message: string;
  /**
   * An array of details about specific errors that led to this reported error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: SearchError[];
}

/** Response containing search results from an index. */
export interface SearchDocumentsResult {
  /**
   * The total count of results found by the search operation, or null if the count was not requested. If present, the count may be greater than the number of results in this response. This can happen if you use the $top or $skip parameters, or if Azure Cognitive Search can't return all the requested documents in a single Search response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly count?: number;
  /**
   * A value indicating the percentage of the index that was included in the query, or null if minimumCoverage was not specified in the request.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly coverage?: number;
  /**
   * The facet query results for the search operation, organized as a collection of buckets for each faceted field; null if the query did not include any facet expressions.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly facets?: { [propertyName: string]: FacetResult[] };
  /**
   * Continuation JSON payload returned when Azure Cognitive Search can't return all the requested results in a single Search response. You can use this JSON along with @odata.nextLink to formulate another POST Search request to get the next part of the search response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextPageParameters?: SearchRequest;
  /**
   * The sequence of results returned by the query.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly results: SearchResult[];
  /**
   * Continuation URL returned when Azure Cognitive Search can't return all the requested results in a single Search response. You can use this URL to formulate another GET or POST Search request to get the next part of the search response. Make sure to use the same verb (GET or POST) as the request that produced this response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** A single bucket of a facet query result. Reports the number of documents with a field value falling within a particular range or having a particular value or interval. */
export interface FacetResult {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The approximate count of documents falling within the bucket described by this facet.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly count?: number;
}

/** Parameters for filtering, sorting, faceting, paging, and other search query behaviors. */
export interface SearchRequest {
  /** A value that specifies whether to fetch the total count of results. Default is false. Setting this value to true may have a performance impact. Note that the count returned is an approximation. */
  includeTotalResultCount?: boolean;
  /** The list of facet expressions to apply to the search query. Each facet expression contains a field name, optionally followed by a comma-separated list of name:value pairs. */
  facets?: string[];
  /** The OData $filter expression to apply to the search query. */
  filter?: string;
  /** The comma-separated list of field names to use for hit highlights. Only searchable fields can be used for hit highlighting. */
  highlightFields?: string;
  /** A string tag that is appended to hit highlights. Must be set with highlightPreTag. Default is &lt;/em&gt;. */
  highlightPostTag?: string;
  /** A string tag that is prepended to hit highlights. Must be set with highlightPostTag. Default is &lt;em&gt;. */
  highlightPreTag?: string;
  /** A number between 0 and 100 indicating the percentage of the index that must be covered by a search query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 100. */
  minimumCoverage?: number;
  /** The comma-separated list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to either the geo.distance() or the search.score() functions. Each expression can be followed by asc to indicate ascending, or desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no $orderby is specified, the default sort order is descending by document match score. There can be at most 32 $orderby clauses. */
  orderBy?: string;
  /** A value that specifies the syntax of the search query. The default is 'simple'. Use 'full' if your query uses the Lucene query syntax. */
  queryType?: QueryType;
  /** A value that specifies whether we want to calculate scoring statistics (such as document frequency) globally for more consistent scoring, or locally, for lower latency. The default is 'local'. Use 'global' to aggregate scoring statistics globally before scoring. Using global scoring statistics can increase latency of search queries. */
  scoringStatistics?: ScoringStatistics;
  /** A value to be used to create a sticky session, which can help getting more consistent results. As long as the same sessionId is used, a best-effort attempt will be made to target the same replica set. Be wary that reusing the same sessionID values repeatedly can interfere with the load balancing of the requests across replicas and adversely affect the performance of the search service. The value used as sessionId cannot start with a '_' character. */
  sessionId?: string;
  /** The list of parameter values to be used in scoring functions (for example, referencePointParameter) using the format name-values. For example, if the scoring profile defines a function with a parameter called 'mylocation' the parameter string would be "mylocation--122.2,44.8" (without the quotes). */
  scoringParameters?: string[];
  /** The name of a scoring profile to evaluate match scores for matching documents in order to sort the results. */
  scoringProfile?: string;
  /** A full-text search query expression; Use "*" or omit this parameter to match all documents. */
  searchText?: string;
  /** The comma-separated list of field names to which to scope the full-text search. When using fielded search (fieldName:searchExpression) in a full Lucene query, the field names of each fielded search expression take precedence over any field names listed in this parameter. */
  searchFields?: string;
  /** A value that specifies whether any or all of the search terms must be matched in order to count the document as a match. */
  searchMode?: SearchMode;
  /** The comma-separated list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included. */
  select?: string;
  /** The number of search results to skip. This value cannot be greater than 100,000. If you need to scan documents in sequence, but cannot use skip due to this limitation, consider using orderby on a totally-ordered key and filter with a range query instead. */
  skip?: number;
  /** The number of search results to retrieve. This can be used in conjunction with $skip to implement client-side paging of search results. If results are truncated due to server-side paging, the response will include a continuation token that can be used to issue another Search request for the next page of results. */
  top?: number;
}

/** Contains a document found by a search query, plus associated metadata. */
export interface SearchResult {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The relevance score of the document compared to other documents returned by the query.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly _score: number;
  /**
   * Text fragments from the document that indicate the matching search terms, organized by each applicable field; null if hit highlighting was not enabled for the query.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly _highlights?: { [propertyName: string]: string[] };
}

/** Response containing suggestion query results from an index. */
export interface SuggestDocumentsResult {
  /**
   * The sequence of results returned by the query.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly results: SuggestResult[];
  /**
   * A value indicating the percentage of the index that was included in the query, or null if minimumCoverage was not set in the request.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly coverage?: number;
}

/** A result containing a document found by a suggestion query, plus associated metadata. */
export interface SuggestResult {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The text of the suggestion result.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly _text: string;
}

/** Parameters for filtering, sorting, fuzzy matching, and other suggestions query behaviors. */
export interface SuggestRequest {
  /** An OData expression that filters the documents considered for suggestions. */
  filter?: string;
  /** A value indicating whether to use fuzzy matching for the suggestion query. Default is false. When set to true, the query will find suggestions even if there's a substituted or missing character in the search text. While this provides a better experience in some scenarios, it comes at a performance cost as fuzzy suggestion searches are slower and consume more resources. */
  useFuzzyMatching?: boolean;
  /** A string tag that is appended to hit highlights. Must be set with highlightPreTag. If omitted, hit highlighting of suggestions is disabled. */
  highlightPostTag?: string;
  /** A string tag that is prepended to hit highlights. Must be set with highlightPostTag. If omitted, hit highlighting of suggestions is disabled. */
  highlightPreTag?: string;
  /** A number between 0 and 100 indicating the percentage of the index that must be covered by a suggestion query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 80. */
  minimumCoverage?: number;
  /** The comma-separated list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to either the geo.distance() or the search.score() functions. Each expression can be followed by asc to indicate ascending, or desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no $orderby is specified, the default sort order is descending by document match score. There can be at most 32 $orderby clauses. */
  orderBy?: string;
  /** The search text to use to suggest documents. Must be at least 1 character, and no more than 100 characters. */
  searchText: string;
  /** The comma-separated list of field names to search for the specified search text. Target fields must be included in the specified suggester. */
  searchFields?: string;
  /** The comma-separated list of fields to retrieve. If unspecified, only the key field will be included in the results. */
  select?: string;
  /** The name of the suggester as specified in the suggesters collection that's part of the index definition. */
  suggesterName: string;
  /** The number of suggestions to retrieve. This must be a value between 1 and 100. The default is 5. */
  top?: number;
}

/** Contains a batch of document write actions to send to the index. */
export interface IndexBatch {
  /** The actions in the batch. */
  actions: IndexAction[];
}

/** Represents an index action that operates on a document. */
export interface IndexAction {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The operation to perform on a document in an indexing batch. */
  __actionType: IndexActionType;
}

/** Response containing the status of operations for all documents in the indexing request. */
export interface IndexDocumentsResult {
  /**
   * The list of status information for each document in the indexing request.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly results: IndexingResult[];
}

/** Status of an indexing operation for a single document. */
export interface IndexingResult {
  /**
   * The key of a document that was in the indexing request.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly key: string;
  /**
   * The error message explaining why the indexing operation failed for the document identified by the key; null if indexing succeeded.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly errorMessage?: string;
  /**
   * A value indicating whether the indexing operation succeeded for the document identified by the key.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly succeeded: boolean;
  /**
   * The status code of the indexing operation. Possible values include: 200 for a successful update or delete, 201 for successful document creation, 400 for a malformed input document, 404 for document not found, 409 for a version conflict, 422 when the index is temporarily unavailable, or 503 for when the service is too busy.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusCode: number;
}

/** The result of Autocomplete query. */
export interface AutocompleteResult {
  /**
   * A value indicating the percentage of the index that was considered by the autocomplete request, or null if minimumCoverage was not specified in the request.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly coverage?: number;
  /**
   * The list of returned Autocompleted items.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly results: AutocompleteItem[];
}

/** The result of Autocomplete requests. */
export interface AutocompleteItem {
  /**
   * The completed term.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly text: string;
  /**
   * The query along with the completed term.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly queryPlusText: string;
}

/** Parameters for fuzzy matching, and other autocomplete query behaviors. */
export interface AutocompleteRequest {
  /** The search text on which to base autocomplete results. */
  searchText: string;
  /** Specifies the mode for Autocomplete. The default is 'oneTerm'. Use 'twoTerms' to get shingles and 'oneTermWithContext' to use the current context while producing auto-completed terms. */
  autocompleteMode?: AutocompleteMode;
  /** An OData expression that filters the documents used to produce completed terms for the Autocomplete result. */
  filter?: string;
  /** A value indicating whether to use fuzzy matching for the autocomplete query. Default is false. When set to true, the query will autocomplete terms even if there's a substituted or missing character in the search text. While this provides a better experience in some scenarios, it comes at a performance cost as fuzzy autocomplete queries are slower and consume more resources. */
  useFuzzyMatching?: boolean;
  /** A string tag that is appended to hit highlights. Must be set with highlightPreTag. If omitted, hit highlighting is disabled. */
  highlightPostTag?: string;
  /** A string tag that is prepended to hit highlights. Must be set with highlightPostTag. If omitted, hit highlighting is disabled. */
  highlightPreTag?: string;
  /** A number between 0 and 100 indicating the percentage of the index that must be covered by an autocomplete query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 80. */
  minimumCoverage?: number;
  /** The comma-separated list of field names to consider when querying for auto-completed terms. Target fields must be included in the specified suggester. */
  searchFields?: string;
  /** The name of the suggester as specified in the suggesters collection that's part of the index definition. */
  suggesterName: string;
  /** The number of auto-completed terms to retrieve. This must be a value between 1 and 100. The default is 5. */
  top?: number;
}

/** Parameter group */
export interface RequestOptions {
  /** The tracking ID sent with the request to help with debugging. */
  xMsClientRequestId?: string;
}

/** Parameter group */
export interface SearchOptions {
  /** A value that specifies whether to fetch the total count of results. Default is false. Setting this value to true may have a performance impact. Note that the count returned is an approximation. */
  includeTotalResultCount?: boolean;
  /** The list of facet expressions to apply to the search query. Each facet expression contains a field name, optionally followed by a comma-separated list of name:value pairs. */
  facets?: string[];
  /** The OData $filter expression to apply to the search query. */
  filter?: string;
  /** The list of field names to use for hit highlights. Only searchable fields can be used for hit highlighting. */
  highlightFields?: string[];
  /** A string tag that is appended to hit highlights. Must be set with highlightPreTag. Default is &lt;/em&gt;. */
  highlightPostTag?: string;
  /** A string tag that is prepended to hit highlights. Must be set with highlightPostTag. Default is &lt;em&gt;. */
  highlightPreTag?: string;
  /** A number between 0 and 100 indicating the percentage of the index that must be covered by a search query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 100. */
  minimumCoverage?: number;
  /** The list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to either the geo.distance() or the search.score() functions. Each expression can be followed by asc to indicate ascending, and desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no OrderBy is specified, the default sort order is descending by document match score. There can be at most 32 $orderby clauses. */
  orderBy?: string[];
  /** A value that specifies the syntax of the search query. The default is 'simple'. Use 'full' if your query uses the Lucene query syntax. */
  queryType?: QueryType;
  /** The list of parameter values to be used in scoring functions (for example, referencePointParameter) using the format name-values. For example, if the scoring profile defines a function with a parameter called 'mylocation' the parameter string would be "mylocation--122.2,44.8" (without the quotes). */
  scoringParameters?: string[];
  /** The name of a scoring profile to evaluate match scores for matching documents in order to sort the results. */
  scoringProfile?: string;
  /** The list of field names to which to scope the full-text search. When using fielded search (fieldName:searchExpression) in a full Lucene query, the field names of each fielded search expression take precedence over any field names listed in this parameter. */
  searchFields?: string[];
  /** A value that specifies whether any or all of the search terms must be matched in order to count the document as a match. */
  searchMode?: SearchMode;
  /** A value that specifies whether we want to calculate scoring statistics (such as document frequency) globally for more consistent scoring, or locally, for lower latency. */
  scoringStatistics?: ScoringStatistics;
  /** A value to be used to create a sticky session, which can help to get more consistent results. As long as the same sessionId is used, a best-effort attempt will be made to target the same replica set. Be wary that reusing the same sessionID values repeatedly can interfere with the load balancing of the requests across replicas and adversely affect the performance of the search service. The value used as sessionId cannot start with a '_' character. */
  sessionId?: string;
  /** The list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included. */
  select?: string[];
  /** The number of search results to skip. This value cannot be greater than 100,000. If you need to scan documents in sequence, but cannot use $skip due to this limitation, consider using $orderby on a totally-ordered key and $filter with a range query instead. */
  skip?: number;
  /** The number of search results to retrieve. This can be used in conjunction with $skip to implement client-side paging of search results. If results are truncated due to server-side paging, the response will include a continuation token that can be used to issue another Search request for the next page of results. */
  top?: number;
}

/** Parameter group */
export interface SuggestOptions {
  /** An OData expression that filters the documents considered for suggestions. */
  filter?: string;
  /** A value indicating whether to use fuzzy matching for the suggestions query. Default is false. When set to true, the query will find terms even if there's a substituted or missing character in the search text. While this provides a better experience in some scenarios, it comes at a performance cost as fuzzy suggestions queries are slower and consume more resources. */
  useFuzzyMatching?: boolean;
  /** A string tag that is appended to hit highlights. Must be set with highlightPreTag. If omitted, hit highlighting of suggestions is disabled. */
  highlightPostTag?: string;
  /** A string tag that is prepended to hit highlights. Must be set with highlightPostTag. If omitted, hit highlighting of suggestions is disabled. */
  highlightPreTag?: string;
  /** A number between 0 and 100 indicating the percentage of the index that must be covered by a suggestions query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 80. */
  minimumCoverage?: number;
  /** The list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to either the geo.distance() or the search.score() functions. Each expression can be followed by asc to indicate ascending, or desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no $orderby is specified, the default sort order is descending by document match score. There can be at most 32 $orderby clauses. */
  orderBy?: string[];
  /** The list of field names to search for the specified search text. Target fields must be included in the specified suggester. */
  searchFields?: string[];
  /** The list of fields to retrieve. If unspecified, only the key field will be included in the results. */
  select?: string[];
  /** The number of suggestions to retrieve. The value must be a number between 1 and 100. The default is 5. */
  top?: number;
}

/** Parameter group */
export interface AutocompleteOptions {
  /** Specifies the mode for Autocomplete. The default is 'oneTerm'. Use 'twoTerms' to get shingles and 'oneTermWithContext' to use the current context while producing auto-completed terms. */
  autocompleteMode?: AutocompleteMode;
  /** An OData expression that filters the documents used to produce completed terms for the Autocomplete result. */
  filter?: string;
  /** A value indicating whether to use fuzzy matching for the autocomplete query. Default is false. When set to true, the query will find terms even if there's a substituted or missing character in the search text. While this provides a better experience in some scenarios, it comes at a performance cost as fuzzy autocomplete queries are slower and consume more resources. */
  useFuzzyMatching?: boolean;
  /** A string tag that is appended to hit highlights. Must be set with highlightPreTag. If omitted, hit highlighting is disabled. */
  highlightPostTag?: string;
  /** A string tag that is prepended to hit highlights. Must be set with highlightPostTag. If omitted, hit highlighting is disabled. */
  highlightPreTag?: string;
  /** A number between 0 and 100 indicating the percentage of the index that must be covered by an autocomplete query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 80. */
  minimumCoverage?: number;
  /** The list of field names to consider when querying for auto-completed terms. Target fields must be included in the specified suggester. */
  searchFields?: string[];
  /** The number of auto-completed terms to retrieve. This must be a value between 1 and 100. The default is 5. */
  top?: number;
}

/** Defines values for QueryType. */
export type QueryType = "simple" | "full";
/** Defines values for SearchMode. */
export type SearchMode = "any" | "all";
/** Defines values for ScoringStatistics. */
export type ScoringStatistics = "local" | "global";
/** Defines values for IndexActionType. */
export type IndexActionType = "upload" | "merge" | "mergeOrUpload" | "delete";
/** Defines values for AutocompleteMode. */
export type AutocompleteMode = "oneTerm" | "twoTerms" | "oneTermWithContext";

/** Optional parameters. */
export interface DocumentsCountOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
}

/** Contains response data for the count operation. */
export type DocumentsCountResponse = {
  /** The parsed response body. */
  body: number;
};

/** Optional parameters. */
export interface DocumentsSearchGetOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
  /** Parameter group */
  searchOptions?: SearchOptions;
  /** A full-text search query expression; Use "*" or omit this parameter to match all documents. */
  searchText?: string;
}

/** Contains response data for the searchGet operation. */
export type DocumentsSearchGetResponse = SearchDocumentsResult;

/** Optional parameters. */
export interface DocumentsSearchPostOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
}

/** Contains response data for the searchPost operation. */
export type DocumentsSearchPostResponse = SearchDocumentsResult;

/** Optional parameters. */
export interface DocumentsGetOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
  /** List of field names to retrieve for the document; Any field not retrieved will be missing from the returned document. */
  selectedFields?: string[];
}

/** Contains response data for the get operation. */
export type DocumentsGetResponse = {
  /** The parsed response body. */
  body: any;
};

/** Optional parameters. */
export interface DocumentsSuggestGetOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
  /** Parameter group */
  suggestOptions?: SuggestOptions;
}

/** Contains response data for the suggestGet operation. */
export type DocumentsSuggestGetResponse = SuggestDocumentsResult;

/** Optional parameters. */
export interface DocumentsSuggestPostOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
}

/** Contains response data for the suggestPost operation. */
export type DocumentsSuggestPostResponse = SuggestDocumentsResult;

/** Optional parameters. */
export interface DocumentsIndexOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
}

/** Contains response data for the index operation. */
export type DocumentsIndexResponse = IndexDocumentsResult;

/** Optional parameters. */
export interface DocumentsAutocompleteGetOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
  /** Parameter group */
  autocompleteOptions?: AutocompleteOptions;
}

/** Contains response data for the autocompleteGet operation. */
export type DocumentsAutocompleteGetResponse = AutocompleteResult;

/** Optional parameters. */
export interface DocumentsAutocompletePostOptionalParams
  extends coreClient.OperationOptions {
  /** Parameter group */
  requestOptionsParam?: RequestOptions;
}

/** Contains response data for the autocompletePost operation. */
export type DocumentsAutocompletePostResponse = AutocompleteResult;

/** Optional parameters. */
export interface SearchClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
