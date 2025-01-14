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

export class DataportKulturfinderApiModelDataReadMedia {
    'id'?: number;
    'mediaType'?: string | null;
    'alternateText'?: string | null;
    'filename'?: string | null;
    'copyright'?: string | null;
    'artist'?: string | null;
    'url'?: string | null;
    'order'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "mediaType",
            "baseName": "mediaType",
            "type": "string"
        },
        {
            "name": "alternateText",
            "baseName": "alternateText",
            "type": "string"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "copyright",
            "baseName": "copyright",
            "type": "string"
        },
        {
            "name": "artist",
            "baseName": "artist",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DataportKulturfinderApiModelDataReadMedia.attributeTypeMap;
    }
}

