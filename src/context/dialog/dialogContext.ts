import { createContext, type Dispatch, type SetStateAction } from "react";
import type { UseUserProps } from "../../types/userType";
import type { OptionItem } from "../../types/selectType";
import type { DeviceProps } from "../../types/profileType";

//dialog類型
export type DialogType =
  | "EditDialog"
  | "DeviceDialog"
  | "UpdatePasswordDialog"
  | "SVDialog"
  | "MessageDialog"
  | "TextInputDialog"
  | "ImageCropDialog";

//共用props類型
export interface BaseDialogData {
  type: DialogType;
  title?: string;
  user?: UseUserProps;
  setUser?: Dispatch<SetStateAction<UseUserProps>>;
  gender?: OptionItem[];
  deviceData?: DeviceProps;
  editProfileOnclick?: () => Promise<void>;
  fileErrorMessage?: string;
  cropFile?: File;
  cropImageUrl?: string;
  onCropComplete?: (file: File) => void;
  cropAspectRatio?: number;
  cropRadius?: number | string;
  cropTitle?: string;
  inputTitle?: string;
  inputValue?: string;
  onInputSubmit?: (value: string) => Promise<void>;
  onConfirm?: () => Promise<void>;
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
