import type { ForgotProps } from "../forgot/forgot";
import type { UserProps } from "../login/login";
import { createApi } from "./util";

const _register = createApi(`register`);
const _login = createApi(`login`);
const _forgotPassword = createApi(`forgotPassword`);
const _resetPassword = createApi(`resetPassword`);
//註冊
export const register = async (information: UserProps) => {
  return await _register.post("/", {
    email: information.email,
    password: information.password,
    userName: information.userName,
  });
};

//登入
export const login = async (information: UserProps) => {
  return await _login.post("/", {
    email: information.email,
    password: information.password,
  });
};

//忘記密碼-寄信
export const forgotPassword = async (email: string) => {
  return await _forgotPassword.post("/", {
    email: email,
  });
};

//重置密碼
export const resetPassword = async (information: ForgotProps) => {
  return await _resetPassword.put("/", {
    email: information.email,
    code: information.code,
    password: information.newPassword,
  });
};
