import { useContext } from "react";
import { LoadingContext } from "./loadingContext";

// 自定義hook
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLogin must be used within an AuthProvider");
  }
  return context;
}
