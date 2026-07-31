import { createContext, type Dispatch, type SetStateAction } from "react";
import type { UseUserProps } from "../../types/authType";

interface AuthContextProps {
  user: UseUserProps;
  setUser: Dispatch<SetStateAction<UseUserProps>>;
  token: string;
  isAuthenticated: boolean;
  setAuthToken: (token: string) => void;
  clearAuthToken: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
