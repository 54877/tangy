import { createContext } from "react";
// import Cookies from 'js-cookie';

interface AuthContextProps {
  token: string;
  setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
