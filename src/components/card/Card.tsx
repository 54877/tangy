import { Tooltip, useMediaQuery } from "@mui/material";
import { FlexType } from "../../styles/components/flex";
import { Heading, SpanType } from "../../styles/components/span";
import {
  Img,
  Start,
  Icon,
  FlexEnd,
  FavoriteContainer,
  FlexCard,
  TitleHeading,
  FlexTypeCard,
  ImageContainer,
} from "./Card.styled";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import { breakpoints } from "../../styles/tokens/breakpoints";

export interface CardProps {
  readonly image: string;
  readonly originalPrice: string;
  readonly price: string;
  readonly rating: string;
  readonly studentCount: string;
  readonly teacher: string;
  readonly title: string;
  readonly duration: string;
  readonly tag: string[];
  readonly macType?: boolean;
  readonly width?: string;
  readonly lgWidth?: string;
  readonly xslgWidth?: string;
  readonly ImgWidth?: string;
}

//TODO 待補上新增置收藏api 與切換收藏狀態的功能

export function Card({
  macType,
  lgWidth,
  xslgWidth,
  width,
  ImgWidth,
  tag,
  image,
  originalPrice,
  price,
  rating,
  studentCount,
  teacher,
  duration,
  title,
}: CardProps) {
  const isMobile = useMediaQuery(`(max-width:${breakpoints.md})`);
  const [open, setOpen] = useState(false);
  return (
    <FlexTypeCard
      style={{ width: "100%" }}
      $width={width}
      $lgWidth={lgWidth}
      $xslgWidth={xslgWidth}
      $direction={{ xs: "column", md: macType ? "column" : "row" }}
      $gap={"spc"}
      $align={"stretch"}
    >
      <ImageContainer
        style={{
          width: ImgWidth ?? "100%",
          minWidth: "0",
        }}
      >
        <Img src={image} alt="img" />
        <FavoriteContainer>
          <FavoriteBorderOutlinedIcon />
        </FavoriteContainer>
      </ImageContainer>
      <FlexCard $direction={"column"} $align={"flex-start"} $gap={"spc"}>
        <Tooltip title={title}>
          <TitleHeading
            onClick={() => {
              if (isMobile) setOpen((v) => !v);
            }}
            style={{
              WebkitLineClamp: isMobile && open ? "unset" : 2,
              cursor: isMobile ? "pointer" : "default",
            }}
          >
            {title}
          </TitleHeading>
        </Tooltip>
        <FlexType $justify={"flex-start"} $gap={"xs"}>
          <SpanType $size={"sm"}>by {teacher}</SpanType>
        </FlexType>
        {tag.length > 0 && (
          <FlexType style={{ flexWrap: "wrap" }} $justify={"flex-start"}>
            {tag.map((item, index) => (
              <SpanType
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#E9ECEF",
                  borderRadius: "1000px",
                }}
                $size={"sm"}
                key={`${index} - ${item}`}
              >
                #{item}
              </SpanType>
            ))}
          </FlexType>
        )}
        <FlexType
          style={{ flexWrap: "wrap" }}
          $justify={"flex-start"}
          $gap={"spc"}
        >
          <FlexType $align={"center"} $gap={"none"}>
            <Start />
            <SpanType $size={"sm"}>{rating}</SpanType>
          </FlexType>
          <FlexType $align={"center"} $gap={"none"}>
            <Icon />
            <SpanType $size={"sm"}>{studentCount}人學習</SpanType>
          </FlexType>
          <FlexType $align={"center"} $gap={"none"}>
            <Icon as={AccessTimeOutlinedIcon} />
            <SpanType $size={"sm"}>{duration}</SpanType>
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
    </FlexTypeCard>
  );
}
