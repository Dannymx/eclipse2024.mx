import { z } from "zod";

export const citySchema = z.object({
  name: z.string(),
  type: z.string(),
  duration: z.string().optional(),
  partial_start: z.string(),
  totality_start: z.string().optional(),
  maximum: z.string(),
  totality_end: z.string().optional(),
  partial_end: z.string(),
  timezone: z.string(),
  dst: z.boolean(),
});

export const statesSchema = z.array(
  z.object({
    name: z.string(),
    cities: z.array(citySchema),
  }),
);
