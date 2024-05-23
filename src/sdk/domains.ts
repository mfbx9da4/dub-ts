/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import * as z from "zod";

export class Domains extends ClientSDK {
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
     * Retrieve a list of domains
     *
     * @remarks
     * Retrieve a list of domains associated with the authenticated workspace.
     */
    async list(
        request?: operations.ListDomainsRequest | undefined,
        options?: RequestOptions
    ): Promise<Array<components.DomainSchema>> {
        const input$ = typeof request === "undefined" ? {} : request;
        void input$; // request input is unused
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/domains")();

        const query$ = [
            enc$.encodeForm("projectSlug", this.options$.projectSlug, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("workspaceId", this.options$.workspaceId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listDomains",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
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
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.DomainSchema>>()
            .json(200, z.array(components.DomainSchema$.inboundSchema))
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Add a domain
     *
     * @remarks
     * Add a domain to the authenticated workspace.
     */
    async add(
        request?: operations.AddDomainRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.DomainSchema> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AddDomainRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/domains")();

        const query$ = [
            enc$.encodeForm("projectSlug", this.options$.projectSlug, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("workspaceId", this.options$.workspaceId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "addDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
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
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DomainSchema>()
            .json(201, components.DomainSchema$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete a domain
     *
     * @remarks
     * Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.
     */
    async delete(
        slug: string,
        options?: RequestOptions
    ): Promise<operations.DeleteDomainResponseBody> {
        const input$: operations.DeleteDomainRequest = {
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteDomainRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            slug: enc$.encodeSimple("slug", payload$.slug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/domains/{slug}")(pathParams$);

        const query$ = [
            enc$.encodeForm("projectSlug", this.options$.projectSlug, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("workspaceId", this.options$.workspaceId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "deleteDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
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
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.DeleteDomainResponseBody>()
            .json(200, operations.DeleteDomainResponseBody$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update a domain
     *
     * @remarks
     * Update a domain for the authenticated workspace.
     */
    async update(
        slug: string,
        requestBody?: operations.UpdateDomainRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.DomainSchema> {
        const input$: operations.UpdateDomainRequest = {
            slug: slug,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateDomainRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            slug: enc$.encodeSimple("slug", payload$.slug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/domains/{slug}")(pathParams$);

        const query$ = [
            enc$.encodeForm("projectSlug", this.options$.projectSlug, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("workspaceId", this.options$.workspaceId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "updateDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
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
        };
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DomainSchema>()
            .json(200, components.DomainSchema$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Set a domain as primary
     *
     * @remarks
     * Set a domain as primary for the authenticated workspace.
     */
    async setPrimary(slug: string, options?: RequestOptions): Promise<components.DomainSchema> {
        const input$: operations.SetPrimaryDomainRequest = {
            slug: slug,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.SetPrimaryDomainRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            slug: enc$.encodeSimple("slug", payload$.slug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/domains/{slug}/primary")(pathParams$);

        const query$ = [
            enc$.encodeForm("projectSlug", this.options$.projectSlug, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("workspaceId", this.options$.workspaceId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "setPrimaryDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
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
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DomainSchema>()
            .json(200, components.DomainSchema$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Transfer a domain
     *
     * @remarks
     * Transfer a domain to another workspace within the authenticated account.
     */
    async transfer(
        slug: string,
        requestBody?: operations.TransferDomainRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.DomainSchema> {
        const input$: operations.TransferDomainRequest = {
            slug: slug,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TransferDomainRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            slug: enc$.encodeSimple("slug", payload$.slug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/domains/{slug}/transfer")(pathParams$);

        const query$ = [
            enc$.encodeForm("projectSlug", this.options$.projectSlug, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("workspaceId", this.options$.workspaceId, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "transferDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
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
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DomainSchema>()
            .json(200, components.DomainSchema$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
