import { createTokenApi } from "./utils/createApi";

const _me = createTokenApi("me");

export const me = async () => {
  return await _me.get("/");
};
