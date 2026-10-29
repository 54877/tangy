import { createApi } from "./utils/createApi";

export interface CourseType {
  id: string;
  imageUrl: string;
  originalPrice: string;
  price: string;
  rating: string;
  studentCount: string;
  teacher: string;
  title: string;
  duration: string;
  tags: string[];
  category: string;
}

export interface GetCourseResponse {
  dataSet: CourseType[];
}

export const _getCourse = createApi("getCourse");

//所有線上課程
export const getCourse = async () => {
  return await _getCourse.get<GetCourseResponse>("/");
};
