import axios from "axios";

export function handleAxiosError(err: unknown) {
  if (!axios.isAxiosError(err)) {
    return {
      status: undefined,
      data: null,
      message: "Unknown error",
    };
  }

  return {
    status: err.response?.status,
    data: err.response?.data,
    message: err.message,
  };
}
