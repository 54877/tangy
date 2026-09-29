// src/context/AuthContext.tsx
import { useEffect, useMemo, useState } from "react";
import type { UseUserProps } from "../../types/authType";
import { useUserInit } from "../../constants/user";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UseUserProps>(useUserInit);
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
      selectedProfileImage,
      setSelectedProfileImage,
      profileImageUrl,
    }),
    [user, profileImageUrl, selectedProfileImage],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
