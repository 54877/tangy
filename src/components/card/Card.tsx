import { Tooltip, useMediaQuery } from "@mui/material";
import { FlexType } from "../../styles/components/flex";
import { Heading, SpanType } from "../../styles/components/span";
import {
  Img,
  Start,
  Icon,
  FlexEnd,
  FlexCard,
  TitleHeading,
  FlexTypeCard,
  ImageContainer,
} from "./Card.styled";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useState } from "react";
import { breakpoints } from "../../styles/tokens/breakpoints";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { formatDuration } from "../../utils/Duration";

export interface CardProps {
  readonly id: string;
  readonly imageUrl: string;
  readonly originalPrice: string;
  readonly price: string;
  readonly rating: string;
  readonly studentCount: string;
  readonly teacher: string;
  readonly title: string;
  readonly duration: string;
  readonly tag: string[];
  readonly alignRows?: boolean;
  readonly ImgWidth?: string;
}

export function Card({
  id,
  alignRows = false,
  ImgWidth,
  tag,
  imageUrl,
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
      $alignRows={alignRows}
      $direction={{ xs: "column", md: alignRows ? "column" : "row" }}
      $gap={"spc"}
      $align={"stretch"}
    >
      <ImageContainer
        style={{
          width: ImgWidth ?? "100%",
          minWidth: "0",
        }}
      >
        <Img src={imageUrl} alt="img" />
        <FavoriteButton courseId={id} />
      </ImageContainer>

      <FlexCard
        $alignRows={alignRows}
        $direction={"column"}
        $align={"stretch"}
        $gap={"spc"}
      >
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
        {(alignRows || tag.length > 0) && (
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
            <SpanType $size={"sm"}>{formatDuration(duration)}</SpanType>
          </FlexType>
        </FlexType>
        <FlexEnd $justify={"flex-start"} $align={"flex-end"} $gap={"spc"}>
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
