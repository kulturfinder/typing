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


/**
 * 
 * @export
 */
export const DataportKulturfinderApiModelEnumsMediaType = {
} as const;
export type DataportKulturfinderApiModelEnumsMediaType = typeof DataportKulturfinderApiModelEnumsMediaType[keyof typeof DataportKulturfinderApiModelEnumsMediaType];


export function instanceOfDataportKulturfinderApiModelEnumsMediaType(value: any): boolean {
    for (const key in DataportKulturfinderApiModelEnumsMediaType) {
        if (Object.prototype.hasOwnProperty.call(DataportKulturfinderApiModelEnumsMediaType, key)) {
            if (DataportKulturfinderApiModelEnumsMediaType[key as keyof typeof DataportKulturfinderApiModelEnumsMediaType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DataportKulturfinderApiModelEnumsMediaTypeFromJSON(json: any): DataportKulturfinderApiModelEnumsMediaType {
    return DataportKulturfinderApiModelEnumsMediaTypeFromJSONTyped(json, false);
}

export function DataportKulturfinderApiModelEnumsMediaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataportKulturfinderApiModelEnumsMediaType {
    return json as DataportKulturfinderApiModelEnumsMediaType;
}

export function DataportKulturfinderApiModelEnumsMediaTypeToJSON(value?: DataportKulturfinderApiModelEnumsMediaType | null): any {
    return value as any;
}

export function DataportKulturfinderApiModelEnumsMediaTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): DataportKulturfinderApiModelEnumsMediaType {
    return value as DataportKulturfinderApiModelEnumsMediaType;
}

