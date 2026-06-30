// src/context/AuthContext.tsx
import { useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(
    () => sessionStorage.getItem("GSIMS_Token") ?? "",
  );

  const value = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
