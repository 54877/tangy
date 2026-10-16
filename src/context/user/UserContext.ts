import { createContext, type Dispatch, type SetStateAction } from "react";
import type { UseUserProps } from "../../types/userType";

interface UserContextProps {
  user: UseUserProps;
  setUser: Dispatch<SetStateAction<UseUserProps>>;
  selectedProfileImage: File | null;
  setSelectedProfileImage: Dispatch<SetStateAction<File | null>>;
  profileImageUrl: string;
}

export const UserContext = createContext<UserContextProps | null>(null);
