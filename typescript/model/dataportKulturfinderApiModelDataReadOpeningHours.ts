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

import { RequestFile } from './models';
import { DataportKulturfinderApiModelDataReadOpenedTimes } from './dataportKulturfinderApiModelDataReadOpenedTimes';

export class DataportKulturfinderApiModelDataReadOpeningHours {
    'id'?: number;
    'activeStartDate'?: string;
    'activeEndDate'?: string;
    'priority'?: boolean;
    'visible'?: boolean;
    'isEveryYear'?: boolean;
    'openedTimes'?: Array<DataportKulturfinderApiModelDataReadOpenedTimes> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "activeStartDate",
            "baseName": "activeStartDate",
            "type": "string"
        },
        {
            "name": "activeEndDate",
            "baseName": "activeEndDate",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "boolean"
        },
        {
            "name": "visible",
            "baseName": "visible",
            "type": "boolean"
        },
        {
            "name": "isEveryYear",
            "baseName": "isEveryYear",
            "type": "boolean"
        },
        {
            "name": "openedTimes",
            "baseName": "openedTimes",
            "type": "Array<DataportKulturfinderApiModelDataReadOpenedTimes>"
        }    ];

    static getAttributeTypeMap() {
        return DataportKulturfinderApiModelDataReadOpeningHours.attributeTypeMap;
    }
}

