import type { ForgotProps, UserProps } from "./authType";

export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type FormError<T> = Partial<Record<StringKeys<T>, string>> & {
  message?: string;
};

export type UserErrorProps = FormError<UserProps>;
export type ForgotErrorProps = FormError<ForgotProps>;
