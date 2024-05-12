import { z } from "zod";

export const signInValidationSchema = z.object({
  email: z.string().email({ message: "Повинен бути валідний e-mail" }),
  password: z
    .string()
    .min(8, { message: "Пароль повинен містити мінімум 8 символів" }),
});

export const registerValidationSchema = z
  .object({
    username: z.string().min(3, { message: "Поле ПІБ обов'язкове" }),
    email: z
      .string()
      .email({ message: "Повинен бути валідний e-mail" })
      .min(1, { message: "e-mail обов'язковий" }),
    password: z
      .string()
      .min(8, { message: "Пароль повинен містити мінімум 8 символів" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Пароль повинен містити мінімум 8 символів" }),
    phoneNumber: z.string().min(1, { message: "Номер телефону обов'язковий" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });
