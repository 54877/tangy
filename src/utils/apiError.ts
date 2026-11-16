import { handleAxiosError } from "../api/utils/handleError";
import { useDialog } from "../context/dialog/useDialog";

export function handleApiError<T>(
  err: unknown,
  setErr: React.Dispatch<React.SetStateAction<Partial<T>>>,
) {
  const { data } = handleAxiosError(err);
  console.log(data);

  setErr(data.errors ?? {});
}

export function DialogApiError<T>(
  err: unknown,
  openDialog: ReturnType<typeof useDialog>["openDialog"],
  layer: 1 | 2 | 3,
  setErr?: React.Dispatch<React.SetStateAction<Partial<T>>>,
) {
  const { data } = handleAxiosError(err);
  const errors = data?.errors ?? {};
  console.log(data);
  if (errors.message) {
    openDialog(
      {
        type: "MessageDialog",
        title: "系統異常",
        fileErrorMessage: errors.message,
      },
      layer ?? 1,
    );
    return;
  }
  if (setErr) {
    setErr(errors);
  }
}
