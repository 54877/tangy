import { useCallback, useMemo, useReducer, type ReactNode } from "react";
import { DeviceDialog } from "../../profile/individual/dialog/device/device";
import { EditDialog } from "../../profile/individual/dialog/edit/editDialog";
import {
  FormDialogContext,
  type DialogData,
  type DialogDataSec,
  type DialogLayer,
} from "./dialogContext";

//context參數
interface Props {
  readonly children: ReactNode;
  // readonly setLoading: (flag: boolean) => Promise<void>;
}

//Reducer分層
interface DialogState {
  first: DialogData | null;
  second: DialogDataSec | null;
  third: DialogDataSec | null;
}

//Reduce Action
type DialogAction =
  | { type: "OPEN_FIRST"; payload: DialogData }
  | { type: "CLOSE_FIRST" }
  | { type: "OPEN_SECOND"; payload: DialogDataSec }
  | { type: "CLOSE_SECOND" }
  | { type: "OPEN_THIRD"; payload: DialogDataSec }
  | { type: "CLOSE_THIRD" };

// Dialog Provider元件
export function FormDialogProvider({ children }: Props) {
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

  const [dialogState, dispatch] = useReducer(dialogReducer, {
    first: null,
    second: null,
    third: null,
  });

  const dialogLayerSet = new Set([1, 2, 3]);

  function isDialogLayer(value: number): value is DialogLayer {
    return dialogLayerSet.has(value);
  }
  const openDialog = useCallback(
    (props: DialogData | DialogDataSec, layer: DialogLayer) => {
      if (!isDialogLayer(layer)) {
        console.error(`Unknown dialog layer: ${layer}`);
        return;
      }

      if (layer === 1) {
        dispatch({ type: "OPEN_FIRST", payload: props as DialogData });
      } else if (layer === 2) {
        dispatch({ type: "OPEN_SECOND", payload: props as DialogDataSec });
      } else {
        dispatch({ type: "OPEN_THIRD", payload: props as DialogDataSec });
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
