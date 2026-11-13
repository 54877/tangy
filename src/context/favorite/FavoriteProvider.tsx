import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { myFavoriteCourse } from "../../api/profile.api";
import { useAuth } from "../auth/useAuth";
import { FavoriteContext, type FavoriteContextValue } from "./FavoriteContext";
import type { FavoriteCourseType } from "../../types/profileType";
import { useDialog } from "../dialog/useDialog";
import { DialogApiError } from "../../utils/apiError";
import { useLoading } from "../loading/useLoading";
import { useLoadingState } from "../../utils/loading/loading.state";

export function FavoriteProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const { openDialog } = useDialog();
  const { loading } = useLoading();
  const [favorites, setFavorites] = useState<FavoriteCourseType[]>([]);
  const isLoading = useLoadingState(7);

  // 從後端讀取收藏清單。
  const loadFavoriteList = useCallback(async () => {
    const response = await myFavoriteCourse();
    return (response.data.dataSet ?? []) as FavoriteCourseType[];
  }, []);

  // 重新讀取清單；可選擇是否顯示 loading。
  const refreshFavorites = useCallback(
    async (showLoading = true) => {
      if (showLoading) loading(7).start();
      try {
        setFavorites(await loadFavoriteList());
      } finally {
        if (showLoading) await loading(7).stop();
      }
    },
    [loadFavoriteList, loading, openDialog],
  );

  // 登出時清除目前帳號的收藏資料。
  const clearFavorites = useCallback(() => setFavorites([]), []);

  // 登入後載入收藏清單。
  useEffect(() => {
    if (!isAuthenticated) return;
    let active = true;
    loading(7).start();
    void loadFavoriteList()
      .then((list) => {
        if (active) setFavorites(list);
      })
      .catch((error) => DialogApiError(error, openDialog, 1))
      .finally(() => void loading(7).stop());
    return () => {
      active = false;
    };
  }, [isAuthenticated, loadFavoriteList, loading, openDialog]);

  const value = useMemo<FavoriteContextValue>(
    () => ({
      favorites: isAuthenticated ? favorites : [],
      isLoading: isAuthenticated && isLoading,
      isFavorite: (courseId) =>
        isAuthenticated && favorites.some((item) => item.id === courseId),
      refreshFavorites,
      clearFavorites,
    }),
    [favorites, isAuthenticated, isLoading, refreshFavorites, clearFavorites],
  );

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  );
}
