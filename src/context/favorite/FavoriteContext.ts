import { createContext } from "react";
import type { FavoriteCourseType } from "../../types/profileType";

export interface FavoriteContextValue {
  readonly favorites: FavoriteCourseType[];
  readonly isLoading: boolean;
  readonly isFavorite: (courseId: string) => boolean;
  readonly addFavorite: (courseId: string) => Promise<void>;
  readonly removeFavorite: (
    courseId: string,
    options?: { optimistic?: boolean; delayRefresh?: boolean },
  ) => Promise<void>;
  readonly toggleFavoriteCourse: (courseId: string) => Promise<void>;
  readonly refreshFavorites: (showLoading?: boolean) => Promise<void>;
  readonly clearFavorites: () => void;
}

export const FavoriteContext = createContext<FavoriteContextValue | null>(null);
