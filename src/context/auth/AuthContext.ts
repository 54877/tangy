import { createContext } from "react";

interface AuthContextProps {
  token: string;
  isAuthenticated: boolean;
  setAuthToken: (token: string) => void;
  clearAuthToken: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
