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
 * A source that is capable of discovering items
 * @export
 * @interface Source
 */
export interface Source {
    /**
     * The descriptive name of the source
     * @type {string}
     * @memberof Source
     */
    descriptiveName: string;
    /**
     * Unique ID of the source
     * @type {string}
     * @memberof Source
     */
    sourceId: string;
    /**
     * The name of the nats JWT that has been generated for this source
     * @type {string}
     * @memberof Source
     */
    tokenName: string;
    /**
     * When the NATS JWT expires (unix time)
     * @type {number}
     * @memberof Source
     */
    tokenExpiry: number;
    /**
     * The public NKey associated with the NATS JWT
     * @type {string}
     * @memberof Source
     */
    publicNkey: string;
    /**
     * What source to configure. Currently either "stdlib" or "aws"
     * @type {string}
     * @memberof Source
     */
    type: string;
    /**
     * Config for this source. See the source documentation for what source-specific config is available/required. This will be supplied directly to viper via a config file at `/etc/srcman/config/source.yaml`
     * @type {object}
     * @memberof Source
     */
    config?: object;
    /**
     * Additional config options that should be passed to the source. The keys of this object should be file names, and the values should be their content. These files will be made available to the source at runtime. Check the source's documentation for what to configure here if required
     * @type {{ [key: string]: string; }}
     * @memberof Source
     */
    additionalConfig?: { [key: string]: string; };
    /**
     * Status of the source
     * @type {string}
     * @memberof Source
     */
    status?: SourceStatusEnum;
    /**
     * The error message if the source is unhealthy
     * @type {string}
     * @memberof Source
     */
    error?: string;
}


/**
 * @export
 */
export const SourceStatusEnum = {
    Progressing: 'progressing',
    Healthy: 'healthy',
    Unhealthy: 'unhealthy'
} as const;
export type SourceStatusEnum = typeof SourceStatusEnum[keyof typeof SourceStatusEnum];


/**
 * Check if a given object implements the Source interface.
 */
export function instanceOfSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "descriptiveName" in value;
    isInstance = isInstance && "sourceId" in value;
    isInstance = isInstance && "tokenName" in value;
    isInstance = isInstance && "tokenExpiry" in value;
    isInstance = isInstance && "publicNkey" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SourceFromJSON(json: any): Source {
    return SourceFromJSONTyped(json, false);
}

export function SourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Source {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'descriptiveName': json['descriptive_name'],
        'sourceId': json['source_id'],
        'tokenName': json['token_name'],
        'tokenExpiry': json['token_expiry'],
        'publicNkey': json['public_nkey'],
        'type': json['type'],
        'config': !exists(json, 'config') ? undefined : json['config'],
        'additionalConfig': !exists(json, 'additional_config') ? undefined : json['additional_config'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function SourceToJSON(value?: Source | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'descriptive_name': value.descriptiveName,
        'source_id': value.sourceId,
        'token_name': value.tokenName,
        'token_expiry': value.tokenExpiry,
        'public_nkey': value.publicNkey,
        'type': value.type,
        'config': value.config,
        'additional_config': value.additionalConfig,
        'status': value.status,
        'error': value.error,
    };
}

