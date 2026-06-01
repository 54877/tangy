import { useMediaQuery } from "@mui/material";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { media } from "../../styles/helper/media";
import { Img, MapContainer, Location } from "./CourseMap.styled";
import { FlexType } from "../../styles/components/flex";
import { Heading, SpanType } from "../../styles/components/span";
import { ButtonOutlined } from "../Button/Button";
import { Card, type CardProps } from "../card/Card";

interface CourseMapProps {
  imgSrc: string;
  title: string;
  secTitle: string;
  cardData: CardProps[];
}

export function CourseMap({
  imgSrc,
  title,
  secTitle,
  cardData,
}: CourseMapProps) {
  const isTablet = useMediaQuery(`${media.md}`);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <MapContainer>
      <FlexType
        $direction={{ xs: "column", sm: "row" }}
        $align={"center"}
        $gap={"lg"}
      >
        {/* img */}
        <Img src={imgSrc} alt="img" />
        <FlexType
          style={{
            width: "100%",
            minWidth: 0,
          }}
          $direction={"column"}
          $gap={"lg"}
        >
          <FlexType
            style={{ width: "100%" }}
            $align={"flex-end"}
            $justify={"space-between"}
          >
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
          </FlexType>
          {/* Cards/ swiper */}
          {isTablet ? (
            <FlexType $direction="column" $gap="lg">
              {cardData.map((item, index) => (
                <Card key={`${item.title}-${index}`} {...item} />
              ))}
            </FlexType>
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
        </FlexType>
      </FlexType>
    </MapContainer>
  );
}
