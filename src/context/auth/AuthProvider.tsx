// src/context/AuthContext.tsx
import { useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { TOKEN_KEY } from "../../api/utils/token";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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
      token,
      isAuthenticated: !!token,
      setAuthToken,
      clearAuthToken,
    }),
    [token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
