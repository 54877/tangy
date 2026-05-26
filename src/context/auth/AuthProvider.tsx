// src/context/AuthContext.tsx
import { useState } from "react";
import { AuthContext } from "./AuthContext";
// import Cookies from 'js-cookie';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(
    () => sessionStorage.getItem("GSIMS_Token") ?? "",
  );

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
