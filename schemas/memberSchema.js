import { z } from "zod";

export const memberSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name is required."),

  email: z
    .string()
    .email("Invalid email address."),

  mobile: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid mobile number."
    ),

  gender: z.string().min(1, "Select Gender."),

  flat: z.string().min(1, "Select Flat."),

  memberType: z
    .string()
    .min(1, "Select Member Type."),

  occupation: z
    .string()
    .optional(),

  status: z.string(),
});