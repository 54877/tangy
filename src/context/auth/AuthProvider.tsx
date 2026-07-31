// src/context/AuthContext.tsx
import { useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { TOKEN_KEY } from "../../api/utils/token";
import type { UseUserProps } from "../../types/authType";
import { useUserInit } from "../../constants/user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UseUserProps>(useUserInit);
  const [token, setToken] = useState(
    () => sessionStorage.getItem(TOKEN_KEY) ?? "",
  );

  const setAuthToken = (newToken: string) => {
    sessionStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);
  };

  const clearAuthToken = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      token,
      isAuthenticated: !!token,
      setAuthToken,
      clearAuthToken,
    }),
    [user, token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
