import type { UseUserProps } from "../types/authType";

export const userInit = {
  email: "",
  password: "",
  userName: "",
  code: "",
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
  svType: false,
  role: "user",
} as UseUserProps;
