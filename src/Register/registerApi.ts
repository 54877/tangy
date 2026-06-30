import { register } from "../api/auth";
import type { UserProps } from "../login/login";

export const registerApi = async (information: UserProps) => {
  try {
    const res = await register(information);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
