import { z } from "zod";

export const signInValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerValidationSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full Name is required" }),
    email: z
      .string()
      .email({ message: "Must be a valid email" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
