/* tslint:disable */
/* eslint-disable */
/**
 * Overmind API
 * API for managing your Overmind account
 *
 * The version of the OpenAPI document: 0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Creates a new Account. The nkeys is autogenerated by the server
 * @export
 * @interface AdminCreateAccountRequest
 */
export interface AdminCreateAccountRequest {
    /**
     * Name of the account. This should only contain alphanumeric characters and dashes
     * @type {string}
     * @memberof AdminCreateAccountRequest
     */
    name: string;
}

/**
 * Check if a given object implements the AdminCreateAccountRequest interface.
 */
export function instanceOfAdminCreateAccountRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function AdminCreateAccountRequestFromJSON(json: any): AdminCreateAccountRequest {
    return AdminCreateAccountRequestFromJSONTyped(json, false);
}

export function AdminCreateAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminCreateAccountRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function AdminCreateAccountRequestToJSON(value?: AdminCreateAccountRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

