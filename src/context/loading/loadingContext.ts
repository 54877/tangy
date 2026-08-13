import { createContext } from "react";
import type { LoadingManager, LoadingScope } from "../../types/loadingType";

interface LoadingContextValue {
  manager: LoadingManager;
  loading: LoadingScope;
}

export const LoadingContext = createContext<LoadingContextValue | null>(null);
