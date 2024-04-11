/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetWorkspaceRequest = {
    /**
     * The ID or slug of the workspace.
     */
    idOrSlug: string;
};

/** @internal */
export namespace GetWorkspaceRequest$ {
    export type Inbound = {
        idOrSlug: string;
    };

    export const inboundSchema: z.ZodType<GetWorkspaceRequest, z.ZodTypeDef, Inbound> = z
        .object({
            idOrSlug: z.string(),
        })
        .transform((v) => {
            return {
                idOrSlug: v.idOrSlug,
            };
        });

    export type Outbound = {
        idOrSlug: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWorkspaceRequest> = z
        .object({
            idOrSlug: z.string(),
        })
        .transform((v) => {
            return {
                idOrSlug: v.idOrSlug,
            };
        });
}
