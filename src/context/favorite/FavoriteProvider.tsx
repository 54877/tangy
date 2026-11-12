import {
  useCallback,
  useEffect,
  useMemo,
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

export function FavoriteProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const { openDialog } = useDialog();
  const [favorites, setFavorites] = useState<FavoriteCourseType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 收藏清單 API
  const loadFavoriteList = useCallback(async () => {
    try {
      const res = await myFavoriteCourse();
      return { data: res.data.dataSet ?? [] };
    } catch (error) {
      DialogApiError(error, openDialog, 1);
      return { data: [] };
    }
  }, [openDialog]);

  // 更新收藏清單 state
  const refreshFavorites = useCallback(async () => {
    setIsLoading(true);
    const result = await loadFavoriteList();
    setFavorites(result.data);
    setIsLoading(false);
  }, [loadFavoriteList]);

  // 登出時清除目前使用者的收藏，並讓下次登入先顯示載入狀態
  const clearFavorites = useCallback(() => {
    setFavorites([]);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    let active = true;

    void loadFavoriteList().then((result) => {
      if (!active) return;
      setFavorites(result.data);
      setIsLoading(false);
    });

    return () => {
      active = false;
    };
  }, [isAuthenticated, loadFavoriteList]);

  const addFavorite = useCallback(async (courseId: string) => {
    await favoriteCourse(courseId);
    const res = await myFavoriteCourse();
    setFavorites(res.data.dataSet ?? []);
  }, []);

  const removeFavorite = useCallback(async (courseId: string) => {
    await deleteFavoriteCourse(courseId);
    setFavorites((current) => current.filter((item) => item.id !== courseId));
  }, []);

  const value = useMemo<FavoriteContextValue>(
    () => ({
      favorites: isAuthenticated ? favorites : [],
      isLoading: isAuthenticated && isLoading,
      isFavorite: (courseId) =>
        isAuthenticated && favorites.some((item) => item.id === courseId),
      addFavorite,
      removeFavorite,
      refreshFavorites,
      clearFavorites,
    }),
    [
      favorites,
      isAuthenticated,
      isLoading,
      addFavorite,
      removeFavorite,
      refreshFavorites,
      clearFavorites,
    ],
  );

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
