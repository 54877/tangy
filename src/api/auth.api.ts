import type { ForgotProps, UserProps } from "../types/authType";
import { createApi } from "./utils/createApi";

const _register = createApi(`register`);
const _login = createApi(`login`);
const _sendEmail = createApi(`sendEmail`);
const _resetPassword = createApi(`resetPassword`);
const _logout = createApi(`logout`);
const _refresh = createApi(`refresh`);
const _loginSV = createApi(`loginSV`);

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

//登入-二次驗證
export const loginSV = async (information: UserProps) => {
  return await _loginSV.post("/", {
    email: information.email,
    password: information.password,
    code: information.code,
  });
};

//忘記密碼-寄信
export const sendEmail = async (email: string) => {
  return await _sendEmail.post("/", {
    email: email,
  });
};

//重置密碼
export const resetPassword = async (information: ForgotProps) => {
  return await _resetPassword.put("/", {
    email: information.email,
    code: information.code,
    newPassword: information.newPassword,
  });
};

//登出
export const logout = async () => {
  return await _logout.post("/");
};

//401 刷新token
export const refresh = async () => {
  return await _refresh.post("/");
};
