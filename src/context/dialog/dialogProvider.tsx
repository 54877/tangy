import { useCallback, useMemo, useReducer, type ReactNode } from "react";
import { DeviceDialog } from "../../profile/individual/dialog/device/device";
import { EditDialog } from "../../profile/individual/dialog/edit/editDialog";
import {
  FormDialogContext,
  type BaseDialogData,
  type DialogLayer,
} from "./dialogContext";

//context參數
interface Props {
  readonly children: ReactNode;
  // readonly setLoading: (flag: boolean) => Promise<void>;
}

//Reducer分層
interface DialogState {
  first: BaseDialogData | null;
  second: BaseDialogData | null;
  third: BaseDialogData | null;
}

//Reduce Action
type DialogAction =
  | { type: "OPEN_FIRST"; payload: BaseDialogData }
  | { type: "CLOSE_FIRST" }
  | { type: "OPEN_SECOND"; payload: BaseDialogData }
  | { type: "CLOSE_SECOND" }
  | { type: "OPEN_THIRD"; payload: BaseDialogData }
  | { type: "CLOSE_THIRD" };

const dialogReducer = (
  state: DialogState,
  action: DialogAction,
): DialogState => {
  switch (action.type) {
    case "OPEN_FIRST":
      return { ...state, first: action.payload };
    case "CLOSE_FIRST":
      return { ...state, first: null };
    case "OPEN_SECOND":
      return { ...state, second: action.payload };
    case "CLOSE_SECOND":
      return { ...state, second: null };
    case "OPEN_THIRD":
      return { ...state, third: action.payload };
    case "CLOSE_THIRD":
      return { ...state, third: null };
    default:
      return state;
  }
};

// Dialog Provider元件
export function FormDialogProvider({ children }: Props) {
  const [dialogState, dispatch] = useReducer(dialogReducer, {
    first: null,
    second: null,
    third: null,
  });

  const openDialog = useCallback(
    (props: BaseDialogData, layer: DialogLayer) => {
      if (layer === 1) {
        dispatch({ type: "OPEN_FIRST", payload: props });
      } else if (layer === 2) {
        dispatch({ type: "OPEN_SECOND", payload: props });
      } else {
        dispatch({ type: "OPEN_THIRD", payload: props });
      }
    },
    [],
  );
  const closeDialog = useCallback((layer: DialogLayer = 1) => {
    if (layer === 1) {
      dispatch({ type: "CLOSE_FIRST" });
    } else if (layer === 2) {
      dispatch({ type: "CLOSE_SECOND" });
    } else {
      dispatch({ type: "CLOSE_THIRD" });
    }
  }, []);

  const value = useMemo(
    () => ({
      openDialog,
      closeDialog,
      // setLoading,
      firstDialog: dialogState.first,
      secondDialog: dialogState.second,
      thirdDialog: dialogState.third,
    }),
    [
      openDialog,
      closeDialog,
      // setLoading,
      dialogState.first,
      dialogState.second,
      dialogState.third,
    ],
  );

  return (
    <FormDialogContext.Provider value={value}>
      {children}
      {/* --- 第一層 Dialogs --- */}
      {dialogState.first?.type === "EditDialog" && <EditDialog />}
      {dialogState.first?.type === "DeviceDialog" && <DeviceDialog />}
      {/* --- 第二層 Dialogs --- */}

      {/* --- 第三層 Dialogs --- */}
    </FormDialogContext.Provider>
  );
}
