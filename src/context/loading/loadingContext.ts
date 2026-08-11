import { createContext, type Dispatch, type SetStateAction } from "react";

interface LoadingProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingProps | null>(null);
