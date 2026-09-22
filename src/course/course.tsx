import { IndexBox } from "../index/index.styled";
import { FlexTypeMap } from "../components/CourseMap/CourseMap.styled";
import { Card } from "../components/card/Card";
import { HotBox } from "./course.styled";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { Heading, SpanType } from "../styles/components/span";
import { FlexType } from "../styles/components/flex";
import { Box, useMediaQuery } from "@mui/material";
import { media } from "../styles/helper/media";
import { useLoading } from "../context/loading/useLoading";
import { getCourse } from "../api/course.api";
import { useLoadingState } from "../utils/loading/loading.state";
import { LoadingUi } from "../components/loading/loading";
import type { CourseType } from "../types/courseType";

export const Course = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const { loading } = useLoading();
  const isTablet = useMediaQuery(`${media.md}`);
  const [cardData, setCardData] = useState<CourseType[]>([]);
  const tag = ["新手入門", "2024推薦", "新手入門"];
  const item = [
    "所有領域",
    "個人理財",
    "家族財富",
    "投資規劃",
    "財務分析",
    "風險管理",
  ];
  const sortArray = ["依時間", "依人數", "依評分", "依價格"];

  //所有線上課程api
  const getCourseApi = async () => {
    loading(1).start();
    try {
      const res = await getCourse();
      const data = res.data.dataSet;
      setCardData(data);
    } catch (err) {
      console.error(err);
    } finally {
      loading(1).stop();
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getCourseApi();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#F4F5F7" }}>
        <HotBox>
          {/* <CourseMap
            macColumn={true}
            title="近期熱門課程"
            ImgWidth={"50%"}
            cardData={[
              {
                imgSrc: course_1,
                title: "理財新手財務啟蒙之旅入門指南",
                name: "白老師",
                stars: "4.5",
                people: "8,932",
                tag: ["新手入門", "2024推薦", "新手入門"],
                time: "4.6小時",
                price: "3,600",
                originalPrice: "5,800",
              },
              {
                imgSrc: course_1,
                title: "理財新手財務啟蒙之旅入門指南2",
                name: "碳吉老師2",
                stars: "4.52",
                people: "8,9322",
                tag: ["新手入門", "2024推薦", "新手入門"],
                time: "4.62小時",
                price: "3,6002",
                originalPrice: "5,8002",
              },
            ]}
          /> */}
        </HotBox>
      </div>

      <IndexBox>
        {/* 目錄 swiper */}
        {!isTablet ? (
          <Swiper
            style={{
              width: "100%",
              minWidth: 0,
              margin: "24px 0 16px 0",
              borderBottom: "1px solid #CCD1D5",
            }}
            slidesPerView={4}
            spaceBetween={8}
            breakpoints={{
              0: {
                slidesPerView: 4,
              },
              480: {
                slidesPerView: 6,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {item.map((item, index) => (
              <SwiperSlide key={`${item}-${index}`}>
                <FlexType
                  $direction="column"
                  onClick={() => setActiveIndex(index)}
                >
                  <SpanType
                    $shade={activeIndex === index ? 950 : 500}
                    $type="label"
                    $size="md"
                  >
                    {item}
                  </SpanType>

                  {activeIndex === index && (
                    <Box
                      sx={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "#0AA2C0",
                      }}
                    />
                  )}
                </FlexType>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <FlexType
            style={{
              borderBottom: "1px solid #CCD1D5",
              margin: "48px 0 24px 0",
            }}
            $justify={"flex-start"}
            $align={"flex-start"}
            $gap={"lg"}
          >
            {item.map((item, index) => (
              <FlexType
                key={`${item}-${index}`}
                $direction="column"
                onClick={() => setActiveIndex(index)}
              >
                <Heading $shade={activeIndex === index ? 950 : 500}>
                  {item}
                </Heading>

                {activeIndex === index && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#0AA2C0",
                    }}
                  />
                )}
              </FlexType>
            ))}
          </FlexType>
        )}

        {/* 排序 */}
        <FlexType style={{ marginBottom: "24px" }} $justify={"flex-start"}>
          {sortArray.map((e, index) => (
            <SpanType
              onClick={() => setSortIndex(index)}
              style={{
                color: sortIndex === index ? "white" : "#232529",
                backgroundColor: sortIndex === index ? "#0F778F" : "#E9ECEF",
                padding: "8px 12px",
                borderRadius: "100px",
              }}
              $size={{
                xsLg: "sm",
                lg: "lg",
              }}
              key={e}
            >
              {e}
            </SpanType>
          ))}
        </FlexType>

        {/* course內容 */}
        <FlexTypeMap
          style={{ flexWrap: "wrap", marginBottom: isTablet ? "96px" : "48px" }}
          $direction={"row"}
          $justify={{ xsLg: "space-between", lg: "flex-start" }}
          $align={"flex-start"}
          $gap="lg"
        >
          {useLoadingState(1) ? (
            <LoadingUi type="spinner" />
          ) : (
            cardData.map((item, index) => (
              <Card
                key={`${item.title}-${index}`}
                tag={tag}
                {...item}
                macType={true}
                lgWidth={"32.12%"}
                xslgWidth={"47%"}
              />
            ))
          )}
        </FlexTypeMap>
      </IndexBox>
    </>
  );
};
