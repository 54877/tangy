import { useMemo, type PropsWithChildren } from "react";
import { createLoadingManager } from "../../utils/loading/loading.manager";
import { LoadingContext } from "./loadingContext";

interface LoadingProviderProps extends PropsWithChildren {
  count: number;
  minDuration?: number;
}

export const LoadingProvider = ({
  children,
  count = 0,
  minDuration = 0, //最少顯示時間ms
}: LoadingProviderProps) => {
  const manager = useMemo(
    () =>
      createLoadingManager(count, {
        minDuration,
      }),
    [count, minDuration],
  );

  const loading = useMemo(() => manager.createScope(), [manager]);

  const value = useMemo(
    () => ({
      manager,
      loading,
    }),
    [manager, loading],
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
