import { z } from "zod";

export const signInValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerValidationSchema = z
  .object({
    fullName: z.string().nonempty({ message: "Full Name is required" }),
    email: z
      .string()
      .email({ message: "Must be a valid email" })
      .nonempty({ message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .nonempty({ message: "Password is required" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .nonempty({ message: "Password confirmation is required" }),
    phoneNumber: z.string().nonempty({ message: "Phone Number is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
