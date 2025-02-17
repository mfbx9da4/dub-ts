/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LeadsTimeseries = {
    /**
     * The starting timestamp of the interval
     */
    start: string;
    /**
     * The number of leads in the interval
     */
    leads: number;
};

/** @internal */
export const LeadsTimeseries$inboundSchema: z.ZodType<LeadsTimeseries, z.ZodTypeDef, unknown> =
    z.object({
        start: z.string(),
        leads: z.number(),
    });

/** @internal */
export type LeadsTimeseries$Outbound = {
    start: string;
    leads: number;
};

/** @internal */
export const LeadsTimeseries$outboundSchema: z.ZodType<
    LeadsTimeseries$Outbound,
    z.ZodTypeDef,
    LeadsTimeseries
> = z.object({
    start: z.string(),
    leads: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsTimeseries$ {
    /** @deprecated use `LeadsTimeseries$inboundSchema` instead. */
    export const inboundSchema = LeadsTimeseries$inboundSchema;
    /** @deprecated use `LeadsTimeseries$outboundSchema` instead. */
    export const outboundSchema = LeadsTimeseries$outboundSchema;
    /** @deprecated use `LeadsTimeseries$Outbound` instead. */
    export type Outbound = LeadsTimeseries$Outbound;
}
