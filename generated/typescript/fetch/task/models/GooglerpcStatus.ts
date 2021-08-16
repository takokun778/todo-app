/* tslint:disable */
/* eslint-disable */
/**
 * proto/proto/task/v1/task.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ProtobufAny,
    ProtobufAnyFromJSON,
    ProtobufAnyFromJSONTyped,
    ProtobufAnyToJSON,
} from './';

/**
 * 
 * @export
 * @interface GooglerpcStatus
 */
export interface GooglerpcStatus {
    /**
     * 
     * @type {number}
     * @memberof GooglerpcStatus
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof GooglerpcStatus
     */
    message?: string;
    /**
     * 
     * @type {Array<ProtobufAny>}
     * @memberof GooglerpcStatus
     */
    details?: Array<ProtobufAny>;
}

export function GooglerpcStatusFromJSON(json: any): GooglerpcStatus {
    return GooglerpcStatusFromJSONTyped(json, false);
}

export function GooglerpcStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): GooglerpcStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ProtobufAnyFromJSON)),
    };
}

export function GooglerpcStatusToJSON(value?: GooglerpcStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ProtobufAnyToJSON)),
    };
}

