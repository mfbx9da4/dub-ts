/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteLinkRequest = {
    /**
     * The id of the link to delete. You can get this via the `getLinkInfo` endpoint.
     */
    linkId: string;
};

/**
 * The deleted link
 */
export type DeleteLinkResponseBody = {
    /**
     * The ID of the link.
     */
    id: string;
};

export type DeleteLinkResponse =
    | DeleteLinkResponseBody
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
export namespace DeleteLinkRequest$ {
    export type Inbound = {
        linkId: string;
    };

    export const inboundSchema: z.ZodType<DeleteLinkRequest, z.ZodTypeDef, Inbound> = z
        .object({
            linkId: z.string(),
        })
        .transform((v) => {
            return {
                linkId: v.linkId,
            };
        });

    export type Outbound = {
        linkId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkRequest> = z
        .object({
            linkId: z.string(),
        })
        .transform((v) => {
            return {
                linkId: v.linkId,
            };
        });
}

/** @internal */
export namespace DeleteLinkResponseBody$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<DeleteLinkResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkResponseBody> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeleteLinkResponse$ {
    export type Inbound =
        | DeleteLinkResponseBody$.Inbound
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
        | DeleteLinkResponseBody$.Outbound
        | components.BadRequest$.Outbound
        | components.Unauthorized$.Outbound
        | components.Forbidden$.Outbound
        | components.NotFound$.Outbound
        | components.Conflict$.Outbound
        | components.InviteExpired$.Outbound
        | components.UnprocessableEntity$.Outbound
        | components.RateLimitExceeded$.Outbound
        | components.InternalServerError$.Outbound;
    export const inboundSchema: z.ZodType<DeleteLinkResponse, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => DeleteLinkResponseBody$.inboundSchema),
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
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkResponse> = z.union([
        z.lazy(() => DeleteLinkResponseBody$.outboundSchema),
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
