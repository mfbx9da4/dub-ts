/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteDomainRequest = {
    /**
     * The domain name.
     */
    slug: string;
};

/**
 * The domain was deleted.
 */
export type DeleteDomainResponseBody = {
    /**
     * The domain name.
     */
    slug: string;
};

export type DeleteDomainResponse =
    | DeleteDomainResponseBody
    | components.BadRequest
    | components.Unauthorized
    | components.Forbidden
    | components.NotFound
    | components.Conflict
    | components.InviteExpired
    | components.UnprocessableEntity
    | components.RateLimitExceeded
    | components.InternalServerError;

/** @internal */
export namespace DeleteDomainRequest$ {
    export type Inbound = {
        slug: string;
    };

    export const inboundSchema: z.ZodType<DeleteDomainRequest, z.ZodTypeDef, Inbound> = z
        .object({
            slug: z.string(),
        })
        .transform((v) => {
            return {
                slug: v.slug,
            };
        });

    export type Outbound = {
        slug: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDomainRequest> = z
        .object({
            slug: z.string(),
        })
        .transform((v) => {
            return {
                slug: v.slug,
            };
        });
}

/** @internal */
export namespace DeleteDomainResponseBody$ {
    export type Inbound = {
        slug: string;
    };

    export const inboundSchema: z.ZodType<DeleteDomainResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            slug: z.string(),
        })
        .transform((v) => {
            return {
                slug: v.slug,
            };
        });

    export type Outbound = {
        slug: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDomainResponseBody> = z
        .object({
            slug: z.string(),
        })
        .transform((v) => {
            return {
                slug: v.slug,
            };
        });
}

/** @internal */
export namespace DeleteDomainResponse$ {
    export type Inbound =
        | DeleteDomainResponseBody$.Inbound
        | components.BadRequest$.Inbound
        | components.Unauthorized$.Inbound
        | components.Forbidden$.Inbound
        | components.NotFound$.Inbound
        | components.Conflict$.Inbound
        | components.InviteExpired$.Inbound
        | components.UnprocessableEntity$.Inbound
        | components.RateLimitExceeded$.Inbound
        | components.InternalServerError$.Inbound;

    export type Outbound =
        | DeleteDomainResponseBody$.Outbound
        | components.BadRequest$.Outbound
        | components.Unauthorized$.Outbound
        | components.Forbidden$.Outbound
        | components.NotFound$.Outbound
        | components.Conflict$.Outbound
        | components.InviteExpired$.Outbound
        | components.UnprocessableEntity$.Outbound
        | components.RateLimitExceeded$.Outbound
        | components.InternalServerError$.Outbound;
    export const inboundSchema: z.ZodType<DeleteDomainResponse, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => DeleteDomainResponseBody$.inboundSchema),
        components.BadRequest$.inboundSchema,
        components.Unauthorized$.inboundSchema,
        components.Forbidden$.inboundSchema,
        components.NotFound$.inboundSchema,
        components.Conflict$.inboundSchema,
        components.InviteExpired$.inboundSchema,
        components.UnprocessableEntity$.inboundSchema,
        components.RateLimitExceeded$.inboundSchema,
        components.InternalServerError$.inboundSchema,
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDomainResponse> = z.union([
        z.lazy(() => DeleteDomainResponseBody$.outboundSchema),
        components.BadRequest$.outboundSchema,
        components.Unauthorized$.outboundSchema,
        components.Forbidden$.outboundSchema,
        components.NotFound$.outboundSchema,
        components.Conflict$.outboundSchema,
        components.InviteExpired$.outboundSchema,
        components.UnprocessableEntity$.outboundSchema,
        components.RateLimitExceeded$.outboundSchema,
        components.InternalServerError$.outboundSchema,
    ]);
}
