import { handleAxiosError } from "../api/utils/handleError";
import { useDialog } from "../context/dialog/useDialog";

export function handleApiError<T>(
  err: unknown,
  setErr: React.Dispatch<React.SetStateAction<Partial<T>>>,
) {
  const { status, data } = handleAxiosError(err);
  console.log(data);
  if (status === 400 || status === 429) {
    setErr(data.errors ?? {});
    return;
  }

  console.error("API Error:", err);
}

export function DialogApiError<T>(
  err: unknown,
  openDialog: ReturnType<typeof useDialog>["openDialog"],
  layer: 1 | 2 | 3,
  setErr?: React.Dispatch<React.SetStateAction<Partial<T>>>,
) {
  const { data } = handleAxiosError(err);
  const errors = data?.errors ?? {};
  console.log(errors);
  if (errors.message) {
    openDialog(
      {
        type: "MessageDialog",
        title: "系統異常",
        fileErrorMessage: errors.message,
      },
      layer,
    );
    return;
  }

  setErr?.(errors);
}
