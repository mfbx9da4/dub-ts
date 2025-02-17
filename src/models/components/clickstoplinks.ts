/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ClicksTopLinks = {
    /**
     * The unique ID of the short link
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    link: string;
    /**
     * The unique ID of the short link
     */
    id: string;
    /**
     * The domain of the short link
     */
    domain: string;
    /**
     * The key of the short link
     */
    key: string;
    /**
     * The short link URL
     */
    shortLink: string;
    /**
     * The destination URL of the short link
     */
    url: string;
    /**
     * The creation timestamp of the short link
     */
    createdAt: string;
    /**
     * The number of clicks from this link
     */
    clicks: number;
};

/** @internal */
export const ClicksTopLinks$inboundSchema: z.ZodType<ClicksTopLinks, z.ZodTypeDef, unknown> =
    z.object({
        link: z.string(),
        id: z.string(),
        domain: z.string(),
        key: z.string(),
        shortLink: z.string(),
        url: z.string(),
        createdAt: z.string(),
        clicks: z.number(),
    });

/** @internal */
export type ClicksTopLinks$Outbound = {
    link: string;
    id: string;
    domain: string;
    key: string;
    shortLink: string;
    url: string;
    createdAt: string;
    clicks: number;
};

/** @internal */
export const ClicksTopLinks$outboundSchema: z.ZodType<
    ClicksTopLinks$Outbound,
    z.ZodTypeDef,
    ClicksTopLinks
> = z.object({
    link: z.string(),
    id: z.string(),
    domain: z.string(),
    key: z.string(),
    shortLink: z.string(),
    url: z.string(),
    createdAt: z.string(),
    clicks: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClicksTopLinks$ {
    /** @deprecated use `ClicksTopLinks$inboundSchema` instead. */
    export const inboundSchema = ClicksTopLinks$inboundSchema;
    /** @deprecated use `ClicksTopLinks$outboundSchema` instead. */
    export const outboundSchema = ClicksTopLinks$outboundSchema;
    /** @deprecated use `ClicksTopLinks$Outbound` instead. */
    export type Outbound = ClicksTopLinks$Outbound;
}
