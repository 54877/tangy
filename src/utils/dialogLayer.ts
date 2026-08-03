import { useDialog } from "../context/dialog/useDialog";

export function useActiveDialog(type: string) {
  const { firstDialog, secondDialog, thirdDialog } = useDialog();

  if (firstDialog?.type === type) {
    return {
      activeDialog: firstDialog,
      activeLayer: 1 as const,
    };
  }

  if (secondDialog?.type === type) {
    return {
      activeDialog: secondDialog,
      activeLayer: 2 as const,
    };
  }

  if (thirdDialog?.type === type) {
    return {
      activeDialog: thirdDialog,
      activeLayer: 3 as const,
    };
  }

  throw new Error(`Dialog ${type} not found`);
}
