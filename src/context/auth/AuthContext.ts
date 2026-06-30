import { createContext } from "react";

interface AuthContextProps {
  token: string;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
