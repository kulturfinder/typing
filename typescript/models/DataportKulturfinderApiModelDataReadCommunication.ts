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
 * @interface DataportKulturfinderApiModelDataReadCommunication
 */
export interface DataportKulturfinderApiModelDataReadCommunication {
    /**
     * 
     * @type {number}
     * @memberof DataportKulturfinderApiModelDataReadCommunication
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataReadCommunication
     */
    value?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataReadCommunication
     */
    label?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataportKulturfinderApiModelDataReadCommunication
     */
    communicationType?: string | null;
}

/**
 * Check if a given object implements the DataportKulturfinderApiModelDataReadCommunication interface.
 */
export function instanceOfDataportKulturfinderApiModelDataReadCommunication(value: object): value is DataportKulturfinderApiModelDataReadCommunication {
    return true;
}

export function DataportKulturfinderApiModelDataReadCommunicationFromJSON(json: any): DataportKulturfinderApiModelDataReadCommunication {
    return DataportKulturfinderApiModelDataReadCommunicationFromJSONTyped(json, false);
}

export function DataportKulturfinderApiModelDataReadCommunicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataportKulturfinderApiModelDataReadCommunication {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'value': json['value'] == null ? undefined : json['value'],
        'label': json['label'] == null ? undefined : json['label'],
        'communicationType': json['communicationType'] == null ? undefined : json['communicationType'],
    };
}

export function DataportKulturfinderApiModelDataReadCommunicationToJSON(json: any): DataportKulturfinderApiModelDataReadCommunication {
    return DataportKulturfinderApiModelDataReadCommunicationToJSONTyped(json, false);
}

export function DataportKulturfinderApiModelDataReadCommunicationToJSONTyped(value?: DataportKulturfinderApiModelDataReadCommunication | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'value': value['value'],
        'label': value['label'],
        'communicationType': value['communicationType'],
    };
}

