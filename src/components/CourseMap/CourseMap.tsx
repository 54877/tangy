import { useMediaQuery } from "@mui/material";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { media } from "../../styles/helper/media";
import { Img, MapContainer, Location, FlexTypeMap } from "./CourseMap.styled";
import { FlexType } from "../../styles/components/flex";
import { Heading, SpanType } from "../../styles/components/span";
import { ButtonOutlined } from "../Button/Button";
import { Card, type CardProps } from "../card/Card";

interface CourseMapProps {
  readonly imgSrc: string;
  readonly title: string;
  readonly secTitle: string;
  readonly reverse?: boolean;
  readonly cardData: CardProps[];
}

export function CourseMap({
  imgSrc,
  title,
  reverse,
  secTitle,
  cardData,
}: CourseMapProps) {
  const isTablet = useMediaQuery(`${media.md}`);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <MapContainer>
      <FlexTypeMap
        $direction={{ xs: "column", sm: reverse ? "row-reverse" : "row" }}
        $align={"center"}
        $gap={"lg"}
      >
        {/* img */}
        <FlexTypeMap>
          <Img src={imgSrc} alt="img" />
        </FlexTypeMap>
        <FlexTypeMap $direction={"column"} $gap={"lg"}>
          <FlexTypeMap $align={"flex-end"} $justify={"space-between"}>
            <FlexType
              $direction={{ xs: "column", md: "row" }}
              $align={{ xs: "flex-start", md: "flex-end" }}
              $gap={{ sm: "spc", xs: "sm" }}
            >
              <FlexType $justify={"flex-start"} $align={"center"}>
                <Location />
                <Heading
                  style={{ whiteSpace: "nowrap" }}
                  $size={{ xs: "md", sm: "xl" }}
                >
                  {title}
                </Heading>
              </FlexType>
              <SpanType>{secTitle}</SpanType>
            </FlexType>

            <FlexType $display={{ xs: "flex", md: "none" }}>
              <ButtonOutlined
                style={{ padding: "8px" }}
                onClick={() => swiperRef.current?.slidePrev()}
                icon={<ArrowBackIcon />}
              />
              <ButtonOutlined
                style={{ padding: "8px" }}
                onClick={() => swiperRef.current?.slideNext()}
                icon={<ArrowForwardIcon />}
              />
            </FlexType>
          </FlexTypeMap>

          {/* Cards/ swiper */}
          {isTablet ? (
            <FlexTypeMap $direction="column" $gap="lg">
              {cardData.map((item, index) => (
                <Card key={`${item.title}-${index}`} {...item} />
              ))}
            </FlexTypeMap>
          ) : (
            <Swiper
              style={{ width: "100%", minWidth: 0 }}
              spaceBetween={24}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {cardData.map((item, index) => (
                <SwiperSlide key={`${item.title}-${index}`}>
                  <Card {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </FlexTypeMap>
      </FlexTypeMap>
    </MapContainer>
  );
}
