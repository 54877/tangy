import { createContext, type Dispatch, type SetStateAction } from "react";
import type { UseUserProps } from "../../types/userType";
import type { CourseCategoryType } from "../../types/backStageType";

interface UserContextProps {
  user: UseUserProps;
  setUser: Dispatch<SetStateAction<UseUserProps>>;
  selectedProfileImage: File | null;
  setSelectedProfileImage: Dispatch<SetStateAction<File | null>>;
  profileImageUrl: string;
  categoryList: CourseCategoryType[];
  setCategoryList: Dispatch<SetStateAction<CourseCategoryType[]>>;
}

export const UserContext = createContext<UserContextProps | null>(null);
