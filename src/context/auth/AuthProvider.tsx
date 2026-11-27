// src/context/AuthContext.tsx
import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { TOKEN_KEY } from "../../api/utils/token";
import { refreshAccessToken } from "../../api/utils/createApi";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(
    () => sessionStorage.getItem(TOKEN_KEY) ?? "",
  );
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    let active = true;

    void refreshAccessToken()
      .then((newToken) => {
        if (active) setToken(newToken);
      })
      .catch(() => {
        sessionStorage.removeItem(TOKEN_KEY);
        if (active) setToken("");
      })
      .finally(() => {
        if (active) setIsAuthLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

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
      isAuthLoading,
      setAuthToken,
      clearAuthToken,
    }),
    [token, isAuthLoading],
  );

  return (
    <AuthContext.Provider value={value}>
      {isAuthLoading ? null : children}
    </AuthContext.Provider>
  );
};
