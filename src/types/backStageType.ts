import type { UseUserProps } from "./userType";

export type TagsListType = {
  key: string;
  label: string;
  createdAt: string;
  createTime?: string;
  useCount: string;
  num?: string;
};

export interface BackStageContext {
  userList: UseUserProps[] | undefined;
  setUserList: React.Dispatch<React.SetStateAction<UseUserProps[] | undefined>>;
  refreshUserList: () => Promise<void>;
}
