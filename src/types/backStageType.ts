import type { UseUserProps } from "./userType";

export type TagsListType = {
  key: string;
  label: string;
  createdAt: string;
  createTime?: string;
  useCount: string;
  num?: string;
};

export type CourseCategoryType = {
  categoryKey: string;
  CategoryName: string;
  createdAt: string;
  useCount: string;
};

export type CourseReviewStatus = "PENDING" | "APPROVED" | "REJECTED";

export type AdminCourseType = {
  id: string;
  title: string;
  teacher: string;
  rating: string;
  studentCount: string;
  duration: string;
  content: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
  userId: string;
  categoryKey: string;
  reviewStatus: CourseReviewStatus;
  tags: string[];
  category: string;
  userName: string;
  email: string;
  imageFileName: string;
  videoUrl: string;
};

export interface BackStageContext {
  courseList: AdminCourseType[];
  refreshCourseList: () => Promise<void>;
  userList: UseUserProps[];
  setUserList: React.Dispatch<React.SetStateAction<UseUserProps[]>>;
  refreshUserList: () => Promise<void>;
  tagList: TagsListType[];
  refreshTagList: () => Promise<void>;
  categoryList: CourseCategoryType[];
  refreshCategoryList: () => Promise<void>;
}
