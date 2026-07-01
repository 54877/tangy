import { handleAxiosError } from "../api/utils/handleError";

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
