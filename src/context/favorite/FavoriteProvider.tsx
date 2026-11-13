import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  deleteFavoriteCourse,
  favoriteCourse,
  myFavoriteCourse,
} from "../../api/profile.api";
import { useAuth } from "../auth/useAuth";
import { FavoriteContext, type FavoriteContextValue } from "./FavoriteContext";
import type { FavoriteCourseType } from "../../types/profileType";
import { useDialog } from "../dialog/useDialog";
import { DialogApiError } from "../../utils/apiError";
import { useLoading } from "../loading/useLoading";
import { useLoadingState } from "../../utils/loading/loading.state";

type FavoriteAction = {
  target: boolean;
  optimistic: boolean;
  delayRefresh: boolean;
  previous?: FavoriteCourseType;
  promise: Promise<void>;
  resolve: () => void;
};

const optimisticFavorite = (id: string): FavoriteCourseType => ({
  id,
  title: "",
  teacher: "",
  duration: "",
  price: "",
  favoriteAt: new Date().toISOString(),
  category: null,
  tags: [],
});

// 管理收藏清單、樂觀更新與新增／刪除 API。
export function FavoriteProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const { openDialog } = useDialog();
  const { loading } = useLoading();
  const [favorites, setFavorites] = useState<FavoriteCourseType[]>([]);
  const [actions, setActions] = useState<Record<string, FavoriteAction>>({});
  const apiCountRef = useRef(0);
  const favoriteClickCountRef = useRef(0);
  const isLoading = useLoadingState(7);

  // 從後端取得目前完整的收藏清單。
  const loadFavoriteList = useCallback(async () => {
    const response = await myFavoriteCourse();
    return (response.data.dataSet ?? []) as FavoriteCourseType[];
  }, []);

  // 重新載入收藏清單；可選擇是否顯示 loading。
  const refreshFavorites = useCallback(
    async (showLoading = true) => {
      if (showLoading) loading(7).start();
      try {
        setFavorites(await loadFavoriteList());
      } catch (error) {
        DialogApiError(error, openDialog, 1);
      } finally {
        if (showLoading) await loading(7).stop();
      }
    },
    [loadFavoriteList, loading, openDialog],
  );

  // 成功後延遲三秒載入清單；期間有新點擊就略過這次過期的載入。
  const scheduleFavoriteListReload = useCallback(
    (
      clickCount: number,
      courseId: string,
      target: boolean,
      delayMs: number,
      previous?: FavoriteCourseType,
    ) => {
      const reload = async () => {
        if (clickCount !== favoriteClickCountRef.current) return;

        let serverFavorites: FavoriteCourseType[];
        try {
          serverFavorites = await loadFavoriteList();
        } catch (error) {
          if (clickCount === favoriteClickCountRef.current) {
            DialogApiError(error, openDialog, 1);
          }
          return;
        }

        if (clickCount !== favoriteClickCountRef.current) return;
        const serverState = serverFavorites.some((item) => item.id === courseId);
        if (serverState !== target) {
          setFavorites((current) => [
            ...current.filter((item) => item.id !== courseId),
            ...(previous ? [previous] : []),
          ]);
          DialogApiError(
            new Error("收藏清單與目前顯示的收藏狀態不一致"),
            openDialog,
            1,
          );
          try {
            const correctedFavorites = await loadFavoriteList();
            if (clickCount === favoriteClickCountRef.current) {
              setFavorites(correctedFavorites);
            }
          } catch {
            // 重新載入失敗時保留已還原的畫面。
          }
          return;
        }

        setFavorites(serverFavorites);
      };
      if (delayMs > 0) setTimeout(() => void reload(), delayMs);
      else void reload();
    },
    [loadFavoriteList, openDialog],
  );

  // 一次只執行一個 API；請求期間的點擊會更新 state，完成後再處理最新動作。
  useEffect(() => {
    if (apiCountRef.current !== 0) return;
    const next = Object.entries(actions)[0];
    if (!next) return;

    const [courseId, action] = next;
    const originalState = Boolean(action.previous);
    if (originalState === action.target) {
      queueMicrotask(() => {
        setFavorites((current) => [
          ...current.filter((item) => item.id !== courseId),
          ...(action.previous ? [action.previous] : []),
        ]);
        setActions((current) => {
          if (current[courseId] !== action) return current;
          const updated = { ...current };
          delete updated[courseId];
          return updated;
        });
        action.resolve();
      });
      return;
    }

    apiCountRef.current += 1;
    // 執行最新收藏操作，確認後端清單並在失敗時還原畫面。
    const run = async () => {
      const requestClickCount = favoriteClickCountRef.current;
      if (action.target) loading(7).start();
      try {
        if (action.target) await favoriteCourse(courseId);
        else await deleteFavoriteCourse(courseId);

        if (requestClickCount === favoriteClickCountRef.current) {
          scheduleFavoriteListReload(
            requestClickCount,
            courseId,
            action.target,
            action.delayRefresh ? 3000 : 0,
            action.previous,
          );
        }
        setActions((current) => {
          const latestAction = current[courseId];
          if (!latestAction) return current;
          // 前一筆 API 已成功，更新待處理動作的基準狀態。
          if (latestAction !== action) {
            return {
              ...current,
              [courseId]: {
                ...latestAction,
                previous: action.target
                  ? optimisticFavorite(courseId)
                  : undefined,
              },
            };
          }
          const updated = { ...current };
          delete updated[courseId];
          return updated;
        });
        action.resolve();
      } catch (error) {
        // 先還原樂觀更新，再重新載入伺服器資料校正畫面。
        setFavorites((current) => [
          ...current.filter((item) => item.id !== courseId),
          ...(action.previous ? [action.previous] : []),
        ]);
        try {
          setFavorites(await loadFavoriteList());
        } catch {
          // 重新載入也失敗時，保留剛才還原的畫面。
        }
        DialogApiError(error, openDialog, 1);
        setActions((current) => {
          if (current[courseId] !== action) return current;
          const updated = { ...current };
          delete updated[courseId];
          return updated;
        });
        action.resolve();
      } finally {
        if (action.target) await loading(7).stop();
        apiCountRef.current = 0;
        // API 完成後觸發更新，讓 effect 接著處理最新動作。
        setActions((current) => ({ ...current }));
      }
    };
    void run();
  }, [
    actions,
    loadFavoriteList,
    loading,
    openDialog,
    scheduleFavoriteListReload,
  ]);

  // 先更新愛心與清單，再記錄這門課最後要新增或刪除的收藏狀態。
  const queueAction = useCallback(
    (
      courseId: string,
      target: boolean,
      options: { optimistic?: boolean; delayRefresh?: boolean } = {},
    ) => {
      const optimistic = options.optimistic ?? true;
      const delayRefresh = options.delayRefresh ?? true;
      const existing = actions[courseId];
      const wasFavorite = favorites.some((item) => item.id === courseId);
      const currentTarget = existing?.target ?? wasFavorite;
      if (!existing && currentTarget === target) return Promise.resolve();
      favoriteClickCountRef.current += 1;

      let action = existing;
      if (!action) {
        let resolveAction!: () => void;
        const promise = new Promise<void>((resolve) => {
          resolveAction = resolve;
        });
        action = {
          target,
          optimistic,
          delayRefresh,
          previous: favorites.find((item) => item.id === courseId),
          promise,
          resolve: resolveAction,
        };
      } else {
        action = { ...existing, target, optimistic, delayRefresh };
      }

      setActions((current) => ({ ...current, [courseId]: action! }));
      if (optimistic) {
        setFavorites((current) =>
          target
            ? current.some((item) => item.id === courseId)
              ? current
              : [...current, optimisticFavorite(courseId)]
            : current.filter((item) => item.id !== courseId),
        );
      }
      return action.promise;
    },
    [actions, favorites],
  );

  // 將指定課程設為已收藏。
  const addFavorite = useCallback(
    (courseId: string) => queueAction(courseId, true),
    [queueAction],
  );
  // 將指定課程設為未收藏。
  const removeFavorite = useCallback(
    (
      courseId: string,
      options?: { optimistic?: boolean; delayRefresh?: boolean },
    ) =>
      queueAction(courseId, false, options),
    [queueAction],
  );
  // 根據目前畫面狀態切換指定課程的收藏狀態。
  const toggleFavorite = useCallback(
    (courseId: string) => {
      const current =
        actions[courseId]?.target ??
        favorites.some((item) => item.id === courseId);
      return queueAction(courseId, !current);
    },
    [actions, favorites, queueAction],
  );

  // 登出時清除收藏資料與尚未完成的操作。
  const clearFavorites = useCallback(() => {
    setFavorites([]);
    setActions((current) => {
      Object.values(current).forEach((action) => action.resolve());
      return {};
    });
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    loading(7).start();
    void loadFavoriteList()
      .then(setFavorites)
      .catch((error) => DialogApiError(error, openDialog, 1))
      .finally(() => void loading(7).stop());
  }, [isAuthenticated, loadFavoriteList, loading, openDialog]);

  const value = useMemo<FavoriteContextValue>(
    () => ({
      favorites: isAuthenticated ? favorites : [],
      isLoading: isAuthenticated && isLoading,
      isFavorite: (id) =>
        isAuthenticated &&
        (actions[id]?.optimistic
          ? actions[id].target
          : favorites.some((item) => item.id === id)),
      addFavorite,
      removeFavorite,
      toggleFavoriteCourse: toggleFavorite,
      refreshFavorites,
      clearFavorites,
    }),
    [
      actions,
      addFavorite,
      clearFavorites,
      favorites,
      isAuthenticated,
      isLoading,
      refreshFavorites,
      removeFavorite,
      toggleFavorite,
    ],
  );

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
