import type { UseUserProps } from "../types/authType";

export const userInit = {
  email: "",
  password: "",
  userName: "",
};

export const userForgotPasswordInit = {
  email: "",
  code: "",
  newPassword: "",
};

export const useUserInit = {
  id: "",
  email: "",
  userName: "",
  role: "user",
} as UseUserProps;
