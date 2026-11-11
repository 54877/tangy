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

export type MyCourseType = {
  id: string;
  title: string;
  teacher: string;
  price: number | string;
  originalPrice: number | string;
  courseTags: string[];
  category: string | null;
  reviewStatus: CourseReviewStatus;
  reviewContext: string | null;
  reviewCount: number;
  studentCount: number;
  rating: number | string;
};

export type MyCourseDetailType = {
  id: string;
  title: string;
  teacher: string;
  rating: string;
  studentCount: string;
  duration: string;
  content: string;
  price: string;
  originalPrice: string;
  categoryKey: string;
  reviewStatus: CourseReviewStatus;
  reviewContext: string | null;
  reviewCount: number;
  imageUrl: string;
  videoUrl: string;
  tags: string[];
  tagsKey: string[];
  image: File | null;
  video: File | null;
  videoKey: string;
  videoTicket: string;
};

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
  reviewContext: string;
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
