/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration"
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios"
import globalAxios from "axios"
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common"
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base"
/**
 * FeedApi - axios parameter creator
 * @export
 */
export const FeedApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Get New Apps Feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNewAppsFeedFeedNewGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/feed/new`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Get Recently Updated Apps Feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/feed/recently-updated`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * FeedApi - functional programming interface
 * @export
 */
export const FeedApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = FeedApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary Get New Apps Feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getNewAppsFeedFeedNewGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getNewAppsFeedFeedNewGet(options)
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Get Recently Updated Apps Feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet(
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
  }
}

/**
 * FeedApi - factory interface
 * @export
 */
export const FeedApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = FeedApiFp(configuration)
  return {
    /**
     *
     * @summary Get New Apps Feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getNewAppsFeedFeedNewGet(options?: any): AxiosPromise<void> {
      return localVarFp
        .getNewAppsFeedFeedNewGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Get Recently Updated Apps Feed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet(
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .getRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet(options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * FeedApi - object-oriented interface
 * @export
 * @class FeedApi
 * @extends {BaseAPI}
 */
export class FeedApi extends BaseAPI {
  /**
   *
   * @summary Get New Apps Feed
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FeedApi
   */
  public getNewAppsFeedFeedNewGet(options?: AxiosRequestConfig) {
    return FeedApiFp(this.configuration)
      .getNewAppsFeedFeedNewGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get Recently Updated Apps Feed
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof FeedApi
   */
  public getRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet(
    options?: AxiosRequestConfig,
  ) {
    return FeedApiFp(this.configuration)
      .getRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet(options)
      .then((request) => request(this.axios, this.basePath))
  }
}