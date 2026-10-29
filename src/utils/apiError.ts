import { handleAxiosError } from "../api/utils/handleError";
import { useDialog } from "../context/dialog/useDialog";

export function handleApiError<T>(
  err: unknown,
  setErr: React.Dispatch<React.SetStateAction<Partial<T>>>,
) {
  const { status, data } = handleAxiosError(err);

  if (status === 400 || status === 429) {
    setErr(data.errors ?? {});
    return;
  }

  console.error("API Error:", err);
}

export function DialogApiError(
  err: unknown,
  openDialog: ReturnType<typeof useDialog>["openDialog"],
  layer: 1 | 2 | 3,
) {
  const { data } = handleAxiosError(err);
  console.log(err);
  console.log(data);
  openDialog(
    {
      type: "MessageDialog",
      title: "系統異常",
      fileErrorMessage: data.errors.message,
    },
    layer ?? 1,
  );
}
