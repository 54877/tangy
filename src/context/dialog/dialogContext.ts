import { createContext } from "react";
import type { UseUserProps } from "../../types/authType";

//dialog類型
export type DialogType = "EditDialog" | "DeviceDialog";

//共用props類型
export interface BaseDialogData {
  type: DialogType;
  title?: string;
  user?: UseUserProps;
}

//層數props類型
export type DialogLayer = 1 | 2 | 3;

// Context型別定義
export interface FromDialogContextType {
  // setLoading: (flag: boolean) => Promise<void>;
  firstDialog: BaseDialogData | null;
  secondDialog: BaseDialogData | null;
  thirdDialog: BaseDialogData | null;
  closeDialog: (layer: DialogLayer) => void;
  openDialog: (props: BaseDialogData, layer: DialogLayer) => void;
}

// 建立Context
export const FormDialogContext = createContext<FromDialogContextType | null>(
  null,
);
