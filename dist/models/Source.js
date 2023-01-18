"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Overmind API
 * API for managing your Overmind account
 *
 * The version of the OpenAPI document: 0.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceToJSON = exports.SourceFromJSONTyped = exports.SourceFromJSON = exports.instanceOfSource = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Source interface.
 */
function instanceOfSource(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSource = instanceOfSource;
function SourceFromJSON(json) {
    return SourceFromJSONTyped(json, false);
}
exports.SourceFromJSON = SourceFromJSON;
function SourceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'descriptiveName': !(0, runtime_1.exists)(json, 'descriptive_name') ? undefined : json['descriptive_name'],
        'sourceId': !(0, runtime_1.exists)(json, 'source_id') ? undefined : json['source_id'],
        'idToken': !(0, runtime_1.exists)(json, 'id_token') ? undefined : json['id_token'],
        'accessToken': !(0, runtime_1.exists)(json, 'access_token') ? undefined : json['access_token'],
        'refreshToken': !(0, runtime_1.exists)(json, 'refresh_token') ? undefined : json['refresh_token'],
        'replicas': !(0, runtime_1.exists)(json, 'replicas') ? undefined : json['replicas'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'config': !(0, runtime_1.exists)(json, 'config') ? undefined : json['config'],
    };
}
exports.SourceFromJSONTyped = SourceFromJSONTyped;
function SourceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'descriptive_name': value.descriptiveName,
        'source_id': value.sourceId,
        'id_token': value.idToken,
        'access_token': value.accessToken,
        'refresh_token': value.refreshToken,
        'replicas': value.replicas,
        'image': value.image,
        'config': value.config,
    };
}
exports.SourceToJSON = SourceToJSON;
