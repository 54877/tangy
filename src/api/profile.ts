import type {
  ProfileDetailProps,
  SVProps,
  UpdatePasswordProps,
} from "../types/profile";
import { createTokenApi } from "./utils/createApi";

const _personal = createTokenApi("personal");
const _updatePassword = createTokenApi("updatePassword");
const _updatePersonal = createTokenApi("updatePersonal");
const _SvSendEmail = createTokenApi("SvSendEmail");
const _2FA = createTokenApi("2FA");
const _2FAClose = createTokenApi("2FAClose");

export const personal = async () => {
  return await _personal.get("/");
};

export const updatePassword = async (information: UpdatePasswordProps) => {
  return await _updatePassword.put("/", {
    oldPassword: information.oldPassword,
    newPassword: information.newPassword,
  });
};

export const updatePersonal = async (information: ProfileDetailProps) => {
  return await _updatePersonal.put("/", {
    userName: information.userName,
    gender: information.gender,
    introduction: information.introduction,
    birthday: information.birthday,
  });
};

export const SvSendEmail = async (email: string) => {
  return await _SvSendEmail.post("/", {
    email: email,
  });
};

export const FA = async (information: SVProps) => {
  return await _2FA.post("/", {
    email: information.email,
    code: information.code,
  });
};

export const FAClose = async () => {
  return await _2FAClose.post("/");
};
