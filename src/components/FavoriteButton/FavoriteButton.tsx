import { type CSSProperties, type MouseEvent } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContainer } from "../card/Card.styled";
import { useFavorite } from "../../context/favorite/useFavorite";

interface FavoriteButtonProps {
  readonly courseId: string;
  readonly style?: CSSProperties;
}
export function FavoriteButton({ courseId, style }: FavoriteButtonProps) {
  const { isFavorite, toggleFavoriteCourse } = useFavorite();
  const favorite = isFavorite(courseId);

  const toggleFavorite = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    await toggleFavoriteCourse(courseId);
  };

  return (
    <FavoriteContainer
      type="button"
      style={{ ...style, color: favorite ? "#e53935" : "inherit" }}
      onClick={(event) => void toggleFavorite(event)}
      aria-label={favorite ? "移除收藏" : "加入收藏"}
      aria-pressed={favorite}
    >
      {favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
    </FavoriteContainer>
  );
}
