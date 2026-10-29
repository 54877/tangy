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

export interface BackStageContext {
  userList: UseUserProps[] | undefined;
  setUserList: React.Dispatch<React.SetStateAction<UseUserProps[] | undefined>>;
  refreshUserList: () => Promise<void>;
  tagList: TagsListType[] | undefined;
  refreshTagList: () => Promise<void>;
  categoryList: CourseCategoryType[] | undefined;
  refreshCategoryList: () => Promise<void>;
}
