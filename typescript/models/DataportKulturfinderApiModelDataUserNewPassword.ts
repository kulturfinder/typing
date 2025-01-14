/* tslint:disable */
/* eslint-disable */
/**
 * Kulturfinder Bremen API
 * An ASP.NET Core Web API for managing the Data of Institutions
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DataportKulturfinderApiModelDataUserNewPassword
 */
export interface DataportKulturfinderApiModelDataUserNewPassword {
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataUserNewPassword
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataUserNewPassword
     */
    oldPassword?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataUserNewPassword
     */
    newPassword?: string | null;
}

/**
 * Check if a given object implements the DataportKulturfinderApiModelDataUserNewPassword interface.
 */
export function instanceOfDataportKulturfinderApiModelDataUserNewPassword(value: object): value is DataportKulturfinderApiModelDataUserNewPassword {
    return true;
}

export function DataportKulturfinderApiModelDataUserNewPasswordFromJSON(json: any): DataportKulturfinderApiModelDataUserNewPassword {
    return DataportKulturfinderApiModelDataUserNewPasswordFromJSONTyped(json, false);
}

export function DataportKulturfinderApiModelDataUserNewPasswordFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataportKulturfinderApiModelDataUserNewPassword {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'oldPassword': json['oldPassword'] == null ? undefined : json['oldPassword'],
        'newPassword': json['newPassword'] == null ? undefined : json['newPassword'],
    };
}

export function DataportKulturfinderApiModelDataUserNewPasswordToJSON(json: any): DataportKulturfinderApiModelDataUserNewPassword {
    return DataportKulturfinderApiModelDataUserNewPasswordToJSONTyped(json, false);
}

export function DataportKulturfinderApiModelDataUserNewPasswordToJSONTyped(value?: DataportKulturfinderApiModelDataUserNewPassword | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'oldPassword': value['oldPassword'],
        'newPassword': value['newPassword'],
    };
}

