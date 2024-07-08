/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type TrackSaleGlobals = {
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    workspaceId?: string | undefined;
};

/**
 * The payment processor via which the sale was made.
 */
export const PaymentProcessor = {
    Stripe: "stripe",
    Shopify: "shopify",
    Paddle: "paddle",
} as const;
/**
 * The payment processor via which the sale was made.
 */
export type PaymentProcessor = ClosedEnum<typeof PaymentProcessor>;

export type TrackSaleRequestBody = {
    /**
     * This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.
     */
    customerId: string;
    /**
     * The amount of the sale. Should be passed in cents.
     */
    amount: number;
    /**
     * The payment processor via which the sale was made.
     */
    paymentProcessor: PaymentProcessor;
    /**
     * The name of the sale event. It can be used to track different types of event for example 'Purchase', 'Upgrade', 'Payment', etc.
     */
    eventName?: string | undefined;
    /**
     * The invoice ID of the sale.
     */
    invoiceId?: string | null | undefined;
    /**
     * The currency of the sale. Accepts ISO 4217 currency codes.
     */
    currency?: string | undefined;
    /**
     * Additional metadata to be stored with the sale event.
     */
    metadata?: { [k: string]: any } | null | undefined;
};

/**
 * A sale was tracked.
 */
export type TrackSaleResponseBody = {
    eventName: string;
    customerId: string;
    amount: number;
    paymentProcessor: string;
    invoiceId: string | null;
    currency: string;
    metadata: { [k: string]: any } | null;
};

/** @internal */
export const TrackSaleGlobals$inboundSchema: z.ZodType<TrackSaleGlobals, z.ZodTypeDef, unknown> =
    z.object({
        workspaceId: z.string().optional(),
    });

/** @internal */
export type TrackSaleGlobals$Outbound = {
    workspaceId?: string | undefined;
};

/** @internal */
export const TrackSaleGlobals$outboundSchema: z.ZodType<
    TrackSaleGlobals$Outbound,
    z.ZodTypeDef,
    TrackSaleGlobals
> = z.object({
    workspaceId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackSaleGlobals$ {
    /** @deprecated use `TrackSaleGlobals$inboundSchema` instead. */
    export const inboundSchema = TrackSaleGlobals$inboundSchema;
    /** @deprecated use `TrackSaleGlobals$outboundSchema` instead. */
    export const outboundSchema = TrackSaleGlobals$outboundSchema;
    /** @deprecated use `TrackSaleGlobals$Outbound` instead. */
    export type Outbound = TrackSaleGlobals$Outbound;
}

/** @internal */
export const PaymentProcessor$inboundSchema: z.ZodNativeEnum<typeof PaymentProcessor> =
    z.nativeEnum(PaymentProcessor);

/** @internal */
export const PaymentProcessor$outboundSchema: z.ZodNativeEnum<typeof PaymentProcessor> =
    PaymentProcessor$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentProcessor$ {
    /** @deprecated use `PaymentProcessor$inboundSchema` instead. */
    export const inboundSchema = PaymentProcessor$inboundSchema;
    /** @deprecated use `PaymentProcessor$outboundSchema` instead. */
    export const outboundSchema = PaymentProcessor$outboundSchema;
}

/** @internal */
export const TrackSaleRequestBody$inboundSchema: z.ZodType<
    TrackSaleRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    customerId: z.string(),
    amount: z.number().int(),
    paymentProcessor: PaymentProcessor$inboundSchema,
    eventName: z.string().default("Purchase"),
    invoiceId: z.nullable(z.string()).default(null),
    currency: z.string().default("usd"),
    metadata: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type TrackSaleRequestBody$Outbound = {
    customerId: string;
    amount: number;
    paymentProcessor: string;
    eventName: string;
    invoiceId: string | null;
    currency: string;
    metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const TrackSaleRequestBody$outboundSchema: z.ZodType<
    TrackSaleRequestBody$Outbound,
    z.ZodTypeDef,
    TrackSaleRequestBody
> = z.object({
    customerId: z.string(),
    amount: z.number().int(),
    paymentProcessor: PaymentProcessor$outboundSchema,
    eventName: z.string().default("Purchase"),
    invoiceId: z.nullable(z.string()).default(null),
    currency: z.string().default("usd"),
    metadata: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackSaleRequestBody$ {
    /** @deprecated use `TrackSaleRequestBody$inboundSchema` instead. */
    export const inboundSchema = TrackSaleRequestBody$inboundSchema;
    /** @deprecated use `TrackSaleRequestBody$outboundSchema` instead. */
    export const outboundSchema = TrackSaleRequestBody$outboundSchema;
    /** @deprecated use `TrackSaleRequestBody$Outbound` instead. */
    export type Outbound = TrackSaleRequestBody$Outbound;
}

/** @internal */
export const TrackSaleResponseBody$inboundSchema: z.ZodType<
    TrackSaleResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    eventName: z.string(),
    customerId: z.string(),
    amount: z.number(),
    paymentProcessor: z.string(),
    invoiceId: z.nullable(z.string()),
    currency: z.string(),
    metadata: z.nullable(z.record(z.any())),
});

/** @internal */
export type TrackSaleResponseBody$Outbound = {
    eventName: string;
    customerId: string;
    amount: number;
    paymentProcessor: string;
    invoiceId: string | null;
    currency: string;
    metadata: { [k: string]: any } | null;
};

/** @internal */
export const TrackSaleResponseBody$outboundSchema: z.ZodType<
    TrackSaleResponseBody$Outbound,
    z.ZodTypeDef,
    TrackSaleResponseBody
> = z.object({
    eventName: z.string(),
    customerId: z.string(),
    amount: z.number(),
    paymentProcessor: z.string(),
    invoiceId: z.nullable(z.string()),
    currency: z.string(),
    metadata: z.nullable(z.record(z.any())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackSaleResponseBody$ {
    /** @deprecated use `TrackSaleResponseBody$inboundSchema` instead. */
    export const inboundSchema = TrackSaleResponseBody$inboundSchema;
    /** @deprecated use `TrackSaleResponseBody$outboundSchema` instead. */
    export const outboundSchema = TrackSaleResponseBody$outboundSchema;
    /** @deprecated use `TrackSaleResponseBody$Outbound` instead. */
    export type Outbound = TrackSaleResponseBody$Outbound;
}
