import { createApi } from "./utils/createApi";

const _getHomepageCourse = createApi("homepage");

// 首頁推薦課程（依課程分類每類最多兩門）
export const getHomepageCourse = async () => {
  return await _getHomepageCourse.get("/");
};
