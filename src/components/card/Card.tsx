import { FlexType } from "../../styles/components/flex";
import { Heading, SpanType } from "../../styles/components/span";
import {
  Img,
  Start,
  Icon,
  FlexEnd,
  FavoriteContainer,
  FlexCard,
} from "./Card.styled";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

export interface CardProps {
  imgSrc: string;
  title: string;
  name: string;
  stars: string;
  people: string;
  time: string;
  price: string;
  originalPrice: string;
}

//TODO 待補上新增置收藏api 與切換收藏狀態的功能

export function Card({
  imgSrc,
  title,
  name,
  stars,
  people,
  time,
  price,
  originalPrice,
}: CardProps) {
  return (
    <FlexType $direction={{ xs: "column", md: "row" }} $gap={"spc"}>
      <div style={{ position: "relative" }}>
        <Img src={imgSrc} alt="img" />
        <FavoriteContainer>
          <FavoriteBorderOutlinedIcon />
        </FavoriteContainer>
      </div>
      <FlexCard $direction={"column"} $align={"flex-start"} $gap={"spc"}>
        <Heading>{title}</Heading>
        <FlexType $justify={"flex-start"} $gap={"xs"}>
          <SpanType $size={"sm"}>by {name}</SpanType>
        </FlexType>
        <FlexType $justify={"flex-start"} $gap={"spc"}>
          <FlexType $align={"center"} $gap={"none"}>
            <Start />
            <SpanType $size={"sm"}>{stars}</SpanType>
          </FlexType>
          <FlexType $align={"center"} $gap={"none"}>
            <Icon />
            <SpanType $size={"sm"}>{people}人學習</SpanType>
          </FlexType>
          <FlexType $align={"center"} $gap={"none"}>
            <Icon as={AccessTimeOutlinedIcon} />
            <SpanType $size={"sm"}>{time}</SpanType>
          </FlexType>
        </FlexType>

        <FlexEnd
          style={{ marginTop: "auto" }}
          $justify={"flex-start"}
          $align={"flex-end"}
          $gap={"spc"}
        >
          <Heading $size={"sm"} $color={"primary"} $shade={600}>
            NT${price}
          </Heading>
          <SpanType $size={"sm"} style={{ textDecoration: "line-through" }}>
            NT${originalPrice}
          </SpanType>
        </FlexEnd>
      </FlexCard>
    </FlexType>
  );
}
