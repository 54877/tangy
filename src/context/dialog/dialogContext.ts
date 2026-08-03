import { createContext } from "react";

//dialog類型
export type DialogType = "EditDialog" | "DeviceDialog" | null;

//一 二層共用props類型
export interface BaseDialogData {
  type: DialogType;
  title?: string;
}

//第一層props類型
export interface DialogData extends BaseDialogData {
  AiTitleName?: string;
}

//第二層props類型
export interface DialogDataSec extends BaseDialogData {
  AiTitleName?: string;
}

//層數props類型
export type DialogLayer = 1 | 2 | 3;

// Context型別定義
export interface FromDialogContextType {
  // setLoading: (flag: boolean) => Promise<void>;
  firstDialog: DialogData | null;
  secondDialog: DialogDataSec | null;
  thirdDialog: DialogDataSec | null;
  closeDialog: (layer: DialogLayer) => void;
  openDialog: (props: DialogData | DialogDataSec, layer: DialogLayer) => void;
}

// 建立Context
export const FormDialogContext = createContext<FromDialogContextType | null>(
  null,
);
