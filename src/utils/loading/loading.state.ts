import { useSyncExternalStore } from "react";
import { useLoading } from "../../context/loading/useLoading";

//讓react知道外部資料修改，他要render
export const useLoadingState = (index: number) => {
  const { loading } = useLoading();

  const instance = loading(index);

  return useSyncExternalStore(
    (listener) => instance.subscribe(listener),
    () => instance.isLoading(),
    () => false,
  );
};
