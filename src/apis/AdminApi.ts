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


import * as runtime from '../runtime';
import type {
  Account,
  AdminCreateAccountRequest,
  AdminCreateSourceRequest,
  Source,
  TokenRequestData,
} from '../models';
import {
    AccountFromJSON,
    AccountToJSON,
    AdminCreateAccountRequestFromJSON,
    AdminCreateAccountRequestToJSON,
    AdminCreateSourceRequestFromJSON,
    AdminCreateSourceRequestToJSON,
    SourceFromJSON,
    SourceToJSON,
    TokenRequestDataFromJSON,
    TokenRequestDataToJSON,
} from '../models';

export interface AdminCreateAccountOperationRequest {
    adminCreateAccountRequest: AdminCreateAccountRequest;
}

export interface AdminCreateSourceOperationRequest {
    accountName: string;
    adminCreateSourceRequest: AdminCreateSourceRequest;
}

export interface AdminCreateTokenRequest {
    accountName: string;
    tokenRequestData: TokenRequestData;
}

export interface AdminDeleteAccountRequest {
    accountName: string;
}

export interface AdminDeleteSourceRequest {
    accountName: string;
    sourceId: string;
}

export interface AdminGetAccountRequest {
    accountName: string;
}

export interface AdminGetSourceRequest {
    accountName: string;
    sourceId: string;
}

export interface AdminKeepaliveSourcesRequest {
    accountName: string;
}

export interface AdminListSourcesRequest {
    accountName: string;
}

export interface AdminUpdateSourceRequest {
    accountName: string;
    sourceId: string;
    adminCreateSourceRequest: AdminCreateSourceRequest;
}

/**
 * 
 */
export class AdminApi extends runtime.BaseAPI {

    /**
     * Creates a new account, public_nkey will be autogenerated
     * Accounts - Create
     */
    async adminCreateAccountRaw(requestParameters: AdminCreateAccountOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.adminCreateAccountRequest === null || requestParameters.adminCreateAccountRequest === undefined) {
            throw new runtime.RequiredError('adminCreateAccountRequest','Required parameter requestParameters.adminCreateAccountRequest was null or undefined when calling adminCreateAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["account:create"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["account:create"]);
        }

        const response = await this.request({
            path: `/admin/accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AdminCreateAccountRequestToJSON(requestParameters.adminCreateAccountRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Creates a new account, public_nkey will be autogenerated
     * Accounts - Create
     */
    async adminCreateAccount(requestParameters: AdminCreateAccountOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.adminCreateAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new source within a given account
     * Sources - Create
     */
    async adminCreateSourceRaw(requestParameters: AdminCreateSourceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminCreateSource.');
        }

        if (requestParameters.adminCreateSourceRequest === null || requestParameters.adminCreateSourceRequest === undefined) {
            throw new runtime.RequiredError('adminCreateSourceRequest','Required parameter requestParameters.adminCreateSourceRequest was null or undefined when calling adminCreateSource.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}/sources`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AdminCreateSourceRequestToJSON(requestParameters.adminCreateSourceRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * Creates a new source within a given account
     * Sources - Create
     */
    async adminCreateSource(requestParameters: AdminCreateSourceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.adminCreateSourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new NATS token for a given public NKey. The user requesting must control the associated private key also in order to connect to NATS as the token is not enough on its own
     * Generate a NATS token
     */
    async adminCreateTokenRaw(requestParameters: AdminCreateTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminCreateToken.');
        }

        if (requestParameters.tokenRequestData === null || requestParameters.tokenRequestData === undefined) {
            throw new runtime.RequiredError('tokenRequestData','Required parameter requestParameters.tokenRequestData was null or undefined when calling adminCreateToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write", "request:receive", "request:send", "reverselink:ingest", "reverselink:request", "reverselink:respond", "gateway:stream"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write", "request:receive", "request:send", "reverselink:ingest", "reverselink:request", "reverselink:respond", "gateway:stream"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}/tokens`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenRequestDataToJSON(requestParameters.tokenRequestData),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Create a new NATS token for a given public NKey. The user requesting must control the associated private key also in order to connect to NATS as the token is not enough on its own
     * Generate a NATS token
     */
    async adminCreateToken(requestParameters: AdminCreateTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.adminCreateTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an account
     * Accounts - Delete
     */
    async adminDeleteAccountRaw(requestParameters: AdminDeleteAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminDeleteAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an account
     * Accounts - Delete
     */
    async adminDeleteAccount(requestParameters: AdminDeleteAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.adminDeleteAccountRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a source from an account
     * Sources - Delete
     */
    async adminDeleteSourceRaw(requestParameters: AdminDeleteSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminDeleteSource.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling adminDeleteSource.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}/sources/{source_id}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))).replace(`{${"source_id"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a source from an account
     * Sources - Delete
     */
    async adminDeleteSource(requestParameters: AdminDeleteSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.adminDeleteSourceRaw(requestParameters, initOverrides);
    }

    /**
     * Get the details of a given account
     * Accounts - Get details
     */
    async adminGetAccountRaw(requestParameters: AdminGetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminGetAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Get the details of a given account
     * Accounts - Get details
     */
    async adminGetAccount(requestParameters: AdminGetAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.adminGetAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the details of a source within a given account
     * Sources - Get details
     */
    async adminGetSourceRaw(requestParameters: AdminGetSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminGetSource.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling adminGetSource.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}/sources/{source_id}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))).replace(`{${"source_id"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * Gets the details of a source within a given account
     * Sources - Get details
     */
    async adminGetSource(requestParameters: AdminGetSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.adminGetSourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates sources to keep them running in the background. This can be used to add explicit action, when the built-in keepalives are not sufficient.
     * Sources - Keepalive
     */
    async adminKeepaliveSourcesRaw(requestParameters: AdminKeepaliveSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminKeepaliveSources.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}/sources/keepalive`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates sources to keep them running in the background. This can be used to add explicit action, when the built-in keepalives are not sufficient.
     * Sources - Keepalive
     */
    async adminKeepaliveSources(requestParameters: AdminKeepaliveSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.adminKeepaliveSourcesRaw(requestParameters, initOverrides);
    }

    /**
     * Lists the details of all NATS Accounts
     * Accounts - List
     */
    async adminListAccountsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Account>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        const response = await this.request({
            path: `/admin/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AccountFromJSON));
    }

    /**
     * Lists the details of all NATS Accounts
     * Accounts - List
     */
    async adminListAccounts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Account>> {
        const response = await this.adminListAccountsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Lists all sources within a particular account
     * Sources - List
     */
    async adminListSourcesRaw(requestParameters: AdminListSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Source>>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminListSources.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:read"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}/sources`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SourceFromJSON));
    }

    /**
     * Lists all sources within a particular account
     * Sources - List
     */
    async adminListSources(requestParameters: AdminListSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Source>> {
        const response = await this.adminListSourcesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the details of a source within a given account
     * Sources - Update
     */
    async adminUpdateSourceRaw(requestParameters: AdminUpdateSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
            throw new runtime.RequiredError('accountName','Required parameter requestParameters.accountName was null or undefined when calling adminUpdateSource.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling adminUpdateSource.');
        }

        if (requestParameters.adminCreateSourceRequest === null || requestParameters.adminCreateSourceRequest === undefined) {
            throw new runtime.RequiredError('adminCreateSourceRequest','Required parameter requestParameters.adminCreateSourceRequest was null or undefined when calling adminUpdateSource.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["admin:write"]);
        }

        const response = await this.request({
            path: `/admin/accounts/{account_name}/sources/{source_id}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))).replace(`{${"source_id"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AdminCreateSourceRequestToJSON(requestParameters.adminCreateSourceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the details of a source within a given account
     * Sources - Update
     */
    async adminUpdateSource(requestParameters: AdminUpdateSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.adminUpdateSourceRaw(requestParameters, initOverrides);
    }

}
