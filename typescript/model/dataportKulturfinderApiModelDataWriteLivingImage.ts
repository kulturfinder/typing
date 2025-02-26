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
import { DataportKulturfinderApiModelDataLivingImageOffset } from './dataportKulturfinderApiModelDataLivingImageOffset';

export class DataportKulturfinderApiModelDataWriteLivingImage {
    'id'?: number;
    'title'?: string | null;
    'width'?: number;
    'height'?: number;
    'scale'?: number;
    'offset'?: DataportKulturfinderApiModelDataLivingImageOffset;
    'fset'?: RequestFile | null;
    'fset3'?: RequestFile | null;
    'iset'?: RequestFile | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "scale",
            "baseName": "scale",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "DataportKulturfinderApiModelDataLivingImageOffset"
        },
        {
            "name": "fset",
            "baseName": "fset",
            "type": "RequestFile"
        },
        {
            "name": "fset3",
            "baseName": "fset3",
            "type": "RequestFile"
        },
        {
            "name": "iset",
            "baseName": "iset",
            "type": "RequestFile"
        }    ];

    static getAttributeTypeMap() {
        return DataportKulturfinderApiModelDataWriteLivingImage.attributeTypeMap;
    }
}

