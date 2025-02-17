/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class Workspaces extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Retrieve a workspace
     *
     * @remarks
     * Retrieve a workspace for the authenticated user.
     */
    async get(
        request: operations.GetWorkspaceRequest,
        options?: RequestOptions
    ): Promise<components.WorkspaceSchema> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetWorkspaceRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            idOrSlug: encodeSimple$("idOrSlug", payload$.idOrSlug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/workspaces/{idOrSlug}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getWorkspace",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [
                "400",
                "401",
                "403",
                "404",
                "409",
                "410",
                "422",
                "429",
                "4XX",
                "500",
                "5XX",
            ],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.WorkspaceSchema>()
            .json(200, components.WorkspaceSchema$inboundSchema)
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update a workspace
     *
     * @remarks
     * Update a workspace by ID or slug.
     */
    async update(
        idOrSlug: string,
        requestBody?: operations.UpdateWorkspaceRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.WorkspaceSchema> {
        const input$: operations.UpdateWorkspaceRequest = {
            idOrSlug: idOrSlug,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateWorkspaceRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            idOrSlug: encodeSimple$("idOrSlug", payload$.idOrSlug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/workspaces/{idOrSlug}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "updateWorkspace",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [
                "400",
                "401",
                "403",
                "404",
                "409",
                "410",
                "422",
                "429",
                "4XX",
                "500",
                "5XX",
            ],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.WorkspaceSchema>()
            .json(200, components.WorkspaceSchema$inboundSchema)
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
