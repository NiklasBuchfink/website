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

/**
 *
 * @export
 * @interface ModerationAppItem
 */
export interface ModerationAppItem {
  /**
   *
   * @type {string}
   * @memberof ModerationAppItem
   */
  appid: string
  /**
   *
   * @type {boolean}
   * @memberof ModerationAppItem
   */
  is_new_submission: boolean
  /**
   *
   * @type {string}
   * @memberof ModerationAppItem
   */
  updated_at: string | null
  /**
   *
   * @type {Array<string>}
   * @memberof ModerationAppItem
   */
  request_types: Array<string>
}
