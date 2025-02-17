/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class Analytics extends ClientSDK {
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
     * Retrieve analytics for a link, a domain, or the authenticated workspace.
     *
     * @remarks
     * Retrieve analytics for a link, a domain, or the authenticated workspace. The response type depends on the `event` and `type` query parameters.
     */
    async retrieve(
        request?: operations.RetrieveAnalyticsRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.RetrieveAnalyticsResponseBody> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RetrieveAnalyticsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/analytics")();

        const query$ = encodeFormQuery$({
            browser: payload$.browser,
            city: payload$.city,
            country: payload$.country,
            device: payload$.device,
            domain: payload$.domain,
            end: payload$.end,
            event: payload$.event,
            externalId: payload$.externalId,
            groupBy: payload$.groupBy,
            interval: payload$.interval,
            key: payload$.key,
            linkId: payload$.linkId,
            os: payload$.os,
            qr: payload$.qr,
            referer: payload$.referer,
            root: payload$.root,
            start: payload$.start,
            tagId: payload$.tagId,
            timezone: payload$.timezone,
            url: payload$.url,
            workspaceId: this.options$.workspaceId,
        });

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
            operationID: "retrieveAnalytics",
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

        const [result$] = await this.matcher<operations.RetrieveAnalyticsResponseBody>()
            .json(200, operations.RetrieveAnalyticsResponseBody$inboundSchema)
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
