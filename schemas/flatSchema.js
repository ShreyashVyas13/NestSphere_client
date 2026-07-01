import { z } from "zod";

export const flatSchema = z.object({
  block: z.string().min(1, "Block is required"),

  flatNo: z.coerce
    .number()
    .min(1, "Flat number must be at least 1")
    .max(999, "Flat number cannot exceed 999"),

  floor: z.coerce
    .number()
    .min(0, "Floor cannot be negative"),

  bhkType: z.string().min(1, "Select BHK Type"),

  area: z.coerce
    .number()
    .min(100, "Area should be at least 100 sq.ft"),

});