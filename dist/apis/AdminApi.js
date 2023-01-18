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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class AdminApi extends runtime.BaseAPI {
    /**
     * Creates a new account, public_nkey will be autogenerated
     * Accounts - Create
     */
    adminCreateAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.adminCreateAccountRequest === null || requestParameters.adminCreateAccountRequest === undefined) {
                throw new runtime.RequiredError('adminCreateAccountRequest', 'Required parameter requestParameters.adminCreateAccountRequest was null or undefined when calling adminCreateAccount.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            const response = yield this.request({
                path: `/admin/accounts`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AdminCreateAccountRequestToJSON)(requestParameters.adminCreateAccountRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a new account, public_nkey will be autogenerated
     * Accounts - Create
     */
    adminCreateAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.adminCreateAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates a new source within a given account
     * Sources - Create
     */
    adminCreateSourceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminCreateSource.');
            }
            if (requestParameters.adminCreateSourceRequest === null || requestParameters.adminCreateSourceRequest === undefined) {
                throw new runtime.RequiredError('adminCreateSourceRequest', 'Required parameter requestParameters.adminCreateSourceRequest was null or undefined when calling adminCreateSource.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}/sources`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AdminCreateSourceRequestToJSON)(requestParameters.adminCreateSourceRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SourceFromJSON)(jsonValue));
        });
    }
    /**
     * Creates a new source within a given account
     * Sources - Create
     */
    adminCreateSource(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.adminCreateSourceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create a new NATS token for a given public NKey. The user requesting must control the associated private key also in order to connect to NATS as the token is not enough on its own
     * Generate a NATS token
     */
    adminCreateTokenRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminCreateToken.');
            }
            if (requestParameters.tokenRequestData === null || requestParameters.tokenRequestData === undefined) {
                throw new runtime.RequiredError('tokenRequestData', 'Required parameter requestParameters.tokenRequestData was null or undefined when calling adminCreateToken.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write", "request:receive", "request:send", "reverselink:ingest", "reverselink:request", "reverselink:respond", "gateway:stream"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write", "request:receive", "request:send", "reverselink:ingest", "reverselink:request", "reverselink:respond", "gateway:stream"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}/tokens`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TokenRequestDataToJSON)(requestParameters.tokenRequestData),
            }, initOverrides);
            return new runtime.TextApiResponse(response);
        });
    }
    /**
     * Create a new NATS token for a given public NKey. The user requesting must control the associated private key also in order to connect to NATS as the token is not enough on its own
     * Generate a NATS token
     */
    adminCreateToken(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.adminCreateTokenRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Deletes an account
     * Accounts - Delete
     */
    adminDeleteAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminDeleteAccount.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes an account
     * Accounts - Delete
     */
    adminDeleteAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.adminDeleteAccountRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Deletes a source from an account
     * Sources - Delete
     */
    adminDeleteSourceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminDeleteSource.');
            }
            if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
                throw new runtime.RequiredError('sourceId', 'Required parameter requestParameters.sourceId was null or undefined when calling adminDeleteSource.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}/sources/{source_id}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))).replace(`{${"source_id"}}`, encodeURIComponent(String(requestParameters.sourceId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Deletes a source from an account
     * Sources - Delete
     */
    adminDeleteSource(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.adminDeleteSourceRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get the details of a given account
     * Accounts - Get details
     */
    adminGetAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminGetAccount.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountFromJSON)(jsonValue));
        });
    }
    /**
     * Get the details of a given account
     * Accounts - Get details
     */
    adminGetAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.adminGetAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets the details of a source within a given account
     * Sources - Get details
     */
    adminGetSourceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminGetSource.');
            }
            if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
                throw new runtime.RequiredError('sourceId', 'Required parameter requestParameters.sourceId was null or undefined when calling adminGetSource.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}/sources/{source_id}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))).replace(`{${"source_id"}}`, encodeURIComponent(String(requestParameters.sourceId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SourceFromJSON)(jsonValue));
        });
    }
    /**
     * Gets the details of a source within a given account
     * Sources - Get details
     */
    adminGetSource(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.adminGetSourceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists the details of all NATS Accounts
     * Accounts - List
     */
    adminListAccountsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            const response = yield this.request({
                path: `/admin/accounts`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.AccountFromJSON));
        });
    }
    /**
     * Lists the details of all NATS Accounts
     * Accounts - List
     */
    adminListAccounts(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.adminListAccountsRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Lists all sources within a particular account
     * Sources - List
     */
    adminListSourcesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminListSources.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:read"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}/sources`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.SourceFromJSON));
        });
    }
    /**
     * Lists all sources within a particular account
     * Sources - List
     */
    adminListSources(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.adminListSourcesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates the details of a source within a given account
     * Sources - Update
     */
    adminUpdateSourceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountName === null || requestParameters.accountName === undefined) {
                throw new runtime.RequiredError('accountName', 'Required parameter requestParameters.accountName was null or undefined when calling adminUpdateSource.');
            }
            if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
                throw new runtime.RequiredError('sourceId', 'Required parameter requestParameters.sourceId was null or undefined when calling adminUpdateSource.');
            }
            if (requestParameters.adminCreateSourceRequest === null || requestParameters.adminCreateSourceRequest === undefined) {
                throw new runtime.RequiredError('adminCreateSourceRequest', 'Required parameter requestParameters.adminCreateSourceRequest was null or undefined when calling adminUpdateSource.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            if (this.configuration && this.configuration.accessToken) {
                // oauth required
                headerParameters["Authorization"] = yield this.configuration.accessToken("OAuth2", ["admin:write"]);
            }
            const response = yield this.request({
                path: `/admin/accounts/{account_name}/sources/{source_id}`.replace(`{${"account_name"}}`, encodeURIComponent(String(requestParameters.accountName))).replace(`{${"source_id"}}`, encodeURIComponent(String(requestParameters.sourceId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AdminCreateSourceRequestToJSON)(requestParameters.adminCreateSourceRequest),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Updates the details of a source within a given account
     * Sources - Update
     */
    adminUpdateSource(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.adminUpdateSourceRaw(requestParameters, initOverrides);
        });
    }
}
exports.AdminApi = AdminApi;
