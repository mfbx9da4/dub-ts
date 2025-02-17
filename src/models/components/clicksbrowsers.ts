/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ClicksBrowsers = {
    /**
     * The name of the browser
     */
    browser: string;
    /**
     * The number of clicks from this browser
     */
    clicks: number;
};

/** @internal */
export const ClicksBrowsers$inboundSchema: z.ZodType<ClicksBrowsers, z.ZodTypeDef, unknown> =
    z.object({
        browser: z.string(),
        clicks: z.number(),
    });

/** @internal */
export type ClicksBrowsers$Outbound = {
    browser: string;
    clicks: number;
};

/** @internal */
export const ClicksBrowsers$outboundSchema: z.ZodType<
    ClicksBrowsers$Outbound,
    z.ZodTypeDef,
    ClicksBrowsers
> = z.object({
    browser: z.string(),
    clicks: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClicksBrowsers$ {
    /** @deprecated use `ClicksBrowsers$inboundSchema` instead. */
    export const inboundSchema = ClicksBrowsers$inboundSchema;
    /** @deprecated use `ClicksBrowsers$outboundSchema` instead. */
    export const outboundSchema = ClicksBrowsers$outboundSchema;
    /** @deprecated use `ClicksBrowsers$Outbound` instead. */
    export type Outbound = ClicksBrowsers$Outbound;
}
