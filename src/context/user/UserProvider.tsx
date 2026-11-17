// src/context/AuthContext.tsx
import { useEffect, useMemo, useState } from "react";
import type { UseUserProps } from "../../types/userType";
import { useUserInit } from "../../constants/user";
import { UserContext } from "./UserContext";
import type { CourseCategoryType } from "../../types/backStageType";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UseUserProps>(useUserInit);
  const [categoryList, setCategoryList] = useState<CourseCategoryType[]>([]);
  const [selectedProfileImage, setSelectedProfileImage] = useState<File | null>(
    null,
  );

  const profileImageUrl = useMemo(
    () =>
      selectedProfileImage ? URL.createObjectURL(selectedProfileImage) : "",
    [selectedProfileImage],
  );

  useEffect(() => {
    return () => {
      if (profileImageUrl) URL.revokeObjectURL(profileImageUrl);
    };
  }, [profileImageUrl]);

  const value = useMemo(
    () => ({
      user,
      setUser,
      categoryList,
      setCategoryList,
      selectedProfileImage,
      setSelectedProfileImage,
      profileImageUrl,
    }),
    [user, categoryList, profileImageUrl, selectedProfileImage],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
