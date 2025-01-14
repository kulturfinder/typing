export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './authenticationApiInterface'
export * from './categoryApi';
import { CategoryApi } from './categoryApi';
export * from './categoryApiInterface'
export * from './instituteApi';
import { InstituteApi } from './instituteApi';
export * from './instituteApiInterface'
export * from './mediaApi';
import { MediaApi } from './mediaApi';
export * from './mediaApiInterface'
export * from './tagApi';
import { TagApi } from './tagApi';
export * from './tagApiInterface'
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthenticationApi, CategoryApi, InstituteApi, MediaApi, TagApi];
