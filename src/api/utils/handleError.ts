import axios from "axios";

export function handleAxiosError(err: unknown) {
  console.log("err", err);
  console.log("axiosErr", !axios.isAxiosError(err));
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
