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
 * @interface DataportKulturfinderApiModelDataReadOpenedTimes
 */
export interface DataportKulturfinderApiModelDataReadOpenedTimes {
    /**
     * 
     * @type {number}
     * @memberof DataportKulturfinderApiModelDataReadOpenedTimes
     */
    weekday?: number;
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataReadOpenedTimes
     */
    openTime?: string;
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataReadOpenedTimes
     */
    closeTime?: string;
}

/**
 * Check if a given object implements the DataportKulturfinderApiModelDataReadOpenedTimes interface.
 */
export function instanceOfDataportKulturfinderApiModelDataReadOpenedTimes(value: object): value is DataportKulturfinderApiModelDataReadOpenedTimes {
    return true;
}

export function DataportKulturfinderApiModelDataReadOpenedTimesFromJSON(json: any): DataportKulturfinderApiModelDataReadOpenedTimes {
    return DataportKulturfinderApiModelDataReadOpenedTimesFromJSONTyped(json, false);
}

export function DataportKulturfinderApiModelDataReadOpenedTimesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataportKulturfinderApiModelDataReadOpenedTimes {
    if (json == null) {
        return json;
    }
    return {
        
        'weekday': json['weekday'] == null ? undefined : json['weekday'],
        'openTime': json['openTime'] == null ? undefined : json['openTime'],
        'closeTime': json['closeTime'] == null ? undefined : json['closeTime'],
    };
}

export function DataportKulturfinderApiModelDataReadOpenedTimesToJSON(json: any): DataportKulturfinderApiModelDataReadOpenedTimes {
    return DataportKulturfinderApiModelDataReadOpenedTimesToJSONTyped(json, false);
}

export function DataportKulturfinderApiModelDataReadOpenedTimesToJSONTyped(value?: DataportKulturfinderApiModelDataReadOpenedTimes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'weekday': value['weekday'],
        'openTime': value['openTime'],
        'closeTime': value['closeTime'],
    };
}

