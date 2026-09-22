import { createApi } from "./utils/createApi";

export const _getCourse = createApi("getCourse");

//所有線上課程
export const getCourse = async () => {
  return await _getCourse.get("/");
};
