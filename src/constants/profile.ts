import type { UseUserProps } from "../types/authType";

export const profileDetailInit = {
  id: "",
  userName: "",
  email: "",
  birthday: "",
  createdAt: "",
  gender: "",
  introduction: "",
  role: "user",
} as UseUserProps;

export const updatePasswordInit = {
  oldPassword: "",
  newPassword: "",
};
export const SVInit = {
  email: "",
  code: "",
};
