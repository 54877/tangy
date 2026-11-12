import { useState, type CSSProperties, type MouseEvent } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContainer } from "../card/Card.styled";
import { useFavorite } from "../../context/favorite/useFavorite";
import { useDialog } from "../../context/dialog/useDialog";
import { DialogApiError } from "../../utils/apiError";

interface FavoriteButtonProps {
  readonly courseId: string;
  readonly style?: CSSProperties;
}
//TODO 改成樂觀顯示
export function FavoriteButton({ courseId, style }: FavoriteButtonProps) {
  const { isFavorite, addFavorite, removeFavorite, isLoading } = useFavorite();
  const { openDialog } = useDialog();
  const [isSaving, setIsSaving] = useState(false);
  const favorite = isFavorite(courseId);

  const toggleFavorite = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isSaving) return;

    setIsSaving(true);
    try {
      if (favorite) await removeFavorite(courseId);
      else await addFavorite(courseId);
    } catch (error) {
      DialogApiError(error, openDialog, 1);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <FavoriteContainer
      type="button"
      style={style}
      onClick={(event) => void toggleFavorite(event)}
      disabled={isSaving || isLoading}
      aria-label={favorite ? "移除收藏" : "加入收藏"}
      aria-pressed={favorite}
    >
      {favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
    </FavoriteContainer>
  );
}
