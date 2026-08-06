import type { ProfileDetailProps, UpdatePasswordProps } from "../types/profile";
import { createTokenApi } from "./utils/createApi";

const _personal = createTokenApi("personal");
const _updatePassword = createTokenApi("updatePassword");
const _updatePersonal = createTokenApi("updatePersonal");

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
