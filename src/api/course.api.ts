import type { SearchCourseRequest } from "../types/courseType";
import { createApi } from "./utils/createApi";

export const _searchCourse = createApi("searchCourse");

//搜尋線上課程
export const searchCourse = async (information: SearchCourseRequest) => {
  return await _searchCourse.post("/", information);
};
