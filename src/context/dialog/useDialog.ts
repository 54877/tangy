import { useContext } from "react";
import { FormDialogContext } from "./dialogContext";

// 自定義hook
export function useDialog() {
  const context = useContext(FormDialogContext);
  if (!context) {
    throw new Error("useMUIDialog must be used within a FormDialogProvider");
  }
  return context;
}
