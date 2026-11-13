import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContainer } from "../card/Card.styled";
import { useFavorite } from "../../context/favorite/useFavorite";
import { favoriteCourse, deleteFavoriteCourse } from "../../api/profile.api";
import { useDialog } from "../../context/dialog/useDialog";
import { DialogApiError } from "../../utils/apiError";

interface FavoriteButtonProps {
  readonly courseId: string;
  readonly style?: CSSProperties;
}

export function FavoriteButton({ courseId, style }: FavoriteButtonProps) {
  const { isFavorite, refreshFavorites } = useFavorite();
  const { openDialog } = useDialog();
  const serverFavorite = isFavorite(courseId);
  const [optimisticFavorite, setOptimisticFavorite] = useState<boolean | null>(
    null,
  );
  const [isPending, setIsPending] = useState(false);
  const desiredStateRef = useRef(serverFavorite);
  const confirmedStateRef = useRef(serverFavorite);
  const isRequestRunningRef = useRef(false);
  const clickCountRef = useRef(0);
  const isMountedRef = useRef(true);
  const favorite = optimisticFavorite ?? serverFavorite;

  useEffect(() => {
    if (optimisticFavorite === null) {
      desiredStateRef.current = serverFavorite;
      confirmedStateRef.current = serverFavorite;
    }
  }, [optimisticFavorite, serverFavorite]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // 依照最後一次點擊狀態依序送出新增或刪除 API。
  const runLatestAction = async () => {
    if (isRequestRunningRef.current) return;
    isRequestRunningRef.current = true;
    setIsPending(true);

    const restoreAndRefresh = async () => {
      desiredStateRef.current = confirmedStateRef.current;
      if (isMountedRef.current) {
        setOptimisticFavorite(confirmedStateRef.current);
      }
      try {
        await refreshFavorites(false);
        if (isMountedRef.current) setOptimisticFavorite(null);
      } catch {
        // 清單重新載入失敗時，保留回復後的愛心狀態。
      }
    };

    try {
      while (desiredStateRef.current !== confirmedStateRef.current) {
        const requestedState = desiredStateRef.current;
        const requestClickCount = clickCountRef.current;
        try {
          if (requestedState) await favoriteCourse(courseId);
          else await deleteFavoriteCourse(courseId);
          confirmedStateRef.current = requestedState;

          if (requestClickCount === clickCountRef.current) {
            window.setTimeout(() => {
              if (requestClickCount === clickCountRef.current) {
                void refreshFavorites(false)
                  .then(() => {
                    if (
                      isMountedRef.current &&
                      requestClickCount === clickCountRef.current
                    ) {
                      setOptimisticFavorite(null);
                    }
                  })
                  .catch(() => undefined);
              }
            }, 3000);
          }
        } catch (error) {
          DialogApiError(error, openDialog, 1);
          if (desiredStateRef.current !== confirmedStateRef.current) continue;
          await restoreAndRefresh();
          break;
        }
      }
    } finally {
      isRequestRunningRef.current = false;
      if (isMountedRef.current) {
        setIsPending(false);
      }
    }
  };

  // 點擊時先切換愛心，再讓請求流程處理最新狀態。
  const toggleFavorite = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    clickCountRef.current += 1;
    desiredStateRef.current = !desiredStateRef.current;
    setOptimisticFavorite(desiredStateRef.current);
    void runLatestAction();
  };

  return (
    <FavoriteContainer
      type="button"
      style={{ ...style, color: favorite ? "#e53935" : "inherit" }}
      onClick={toggleFavorite}
      aria-label={favorite ? "移除收藏" : "加入收藏"}
      aria-pressed={favorite}
      aria-busy={isPending}
    >
      {favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
    </FavoriteContainer>
  );
}
