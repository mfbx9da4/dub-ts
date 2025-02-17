/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SalesTopLinks = {
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
     * The number of sales from this link
     */
    sales: number;
    /**
     * The total amount of sales from this link
     */
    amount: number;
};

/** @internal */
export const SalesTopLinks$inboundSchema: z.ZodType<SalesTopLinks, z.ZodTypeDef, unknown> =
    z.object({
        link: z.string(),
        id: z.string(),
        domain: z.string(),
        key: z.string(),
        shortLink: z.string(),
        url: z.string(),
        createdAt: z.string(),
        sales: z.number(),
        amount: z.number(),
    });

/** @internal */
export type SalesTopLinks$Outbound = {
    link: string;
    id: string;
    domain: string;
    key: string;
    shortLink: string;
    url: string;
    createdAt: string;
    sales: number;
    amount: number;
};

/** @internal */
export const SalesTopLinks$outboundSchema: z.ZodType<
    SalesTopLinks$Outbound,
    z.ZodTypeDef,
    SalesTopLinks
> = z.object({
    link: z.string(),
    id: z.string(),
    domain: z.string(),
    key: z.string(),
    shortLink: z.string(),
    url: z.string(),
    createdAt: z.string(),
    sales: z.number(),
    amount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SalesTopLinks$ {
    /** @deprecated use `SalesTopLinks$inboundSchema` instead. */
    export const inboundSchema = SalesTopLinks$inboundSchema;
    /** @deprecated use `SalesTopLinks$outboundSchema` instead. */
    export const outboundSchema = SalesTopLinks$outboundSchema;
    /** @deprecated use `SalesTopLinks$Outbound` instead. */
    export type Outbound = SalesTopLinks$Outbound;
}
