import type { UseUserProps } from "../types/userType";

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
  image: null,
  imageUrl: "",
  birthday: "",
  introduction: "",
  gender: "",
  createdAt: "",
  role: "user",
} as UseUserProps;
