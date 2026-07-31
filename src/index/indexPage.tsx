import course_1 from "../assets/icon_tangy/course_1.png";
import tangyNew from "../assets/icon_tangy/tangyNew.png";
import tangyMap_2 from "../assets/icon_tangy/tangyMap-2.png";
import tangyMap_3 from "../assets/icon_tangy/tangyMap-3.png";
import card_1 from "../assets/icon_tangy/card_1.png";
import card_2 from "../assets/icon_tangy/card_2.png";
import card_3 from "../assets/icon_tangy/card_3.png";
import tangyIcon from "../assets/icon_tangy/tangy_Icon.png";
import tangyIcon_2 from "../assets/icon_tangy/tangy_icon_2.png";
import banner_768 from "../assets/icon_tangy/banner_768.png";
import banner from "../assets/icon_tangy/banner.png";
import endBanner from "../assets/icon_tangy/endBanner.png";
import map from "../assets/icon_tangy/map.png";
import user from "../assets/icon_tangy/user.png";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import {
  BannerBox,
  BannerImg,
  CardFlex,
  Container,
  FlexTypeBanner,
  HeadingBanner,
  HeadingEndBanner,
  ImgContainer,
  IndexBox,
  SpanTypeBanner,
} from "./index.styled";
import SearchIcon from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";
import { media } from "../styles/helper/media";
import { FlexType } from "../styles/components/flex";
import { CourseMap } from "../components/CourseMap/CourseMap";
import { CardSm } from "../components/CardSm/CardSm";
import { CourseSection } from "../components/CourseSection/CourseSection";
import { CardSection } from "../components/CardSection/CardSection";
import { Button } from "../components/Button/Button";
import { useRef } from "react";
import { ButtonType } from "../components/Button/Button.styled";
import { useNavigate } from "react-router-dom";

export function Index() {
  const isMobile = useMediaQuery(`${media.sm}`);
  const isLgMobile = useMediaQuery(`${media.xsLg}`);
  const swiperRef = useRef<SwiperType | null>(null);
  const navigate = useNavigate();
  //假資料
  const cardData = [
    {
      userName: "Vivian",
      userWork: "家庭主婦",
      time: "2024.08.12",
      userImg: user,
      content:
        "這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間",
    },
    {
      userName: "Vivian",
      userWork: "家庭主婦",
      time: "2024.08.12",
      userImg: user,
      content:
        "這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間",
    },
    {
      userName: "Vivian",
      userWork: "家庭主婦",
      time: "2024.08.12",
      userImg: user,
      content:
        "這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間",
    },
    {
      userName: "Vivian",
      userWork: "家庭主婦",
      time: "2024.08.12",
      userImg: user,
      content:
        "這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間",
    },
    {
      userName: "Vivian",
      userWork: "家庭主婦",
      time: "2024.08.12",
      userImg: user,
      content:
        "這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間",
    },
    {
      userName: "Vivian",
      userWork: "家庭主婦",
      time: "2024.08.12",
      userImg: user,
      content:
        "這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間",
    },
  ];

  return (
    <>
      {/* Banner */}
      <ImgContainer
        style={{
          minHeight: isMobile ? "480px" : "375px",
        }}
      >
        <BannerImg
          $isLgMobile={isLgMobile}
          src={isLgMobile ? banner : banner_768}
          alt="手機板banner"
        />
        <BannerBox>
          <FlexTypeBanner
            $direction={"column"}
            $align={{ xs: "center", xsLg: "flex-start" }}
            $gap={{ xs: "spc", xsLg: "lg" }}
          >
            <HeadingBanner $size={{ xs: "lg", xsLg: "xxxl" }}>
              碳吉人生
              <br /> 從學習理財開始
            </HeadingBanner>
            {/* 搜尋 */}
            <SpanTypeBanner
              style={{
                width: "100%",
                padding: "12px 12px",
                maxWidth: isLgMobile ? "430px" : "unset",
              }}
              $size={"sm"}
            >
              <SearchIcon style={{ marginRight: "8px" }} />
              熱門推薦
            </SpanTypeBanner>
            <FlexType $gap={"spc"}>
              <SpanTypeBanner $size={"sm"}>#新手入門</SpanTypeBanner>
              <SpanTypeBanner $size={"sm"}>#2024推薦</SpanTypeBanner>
              <SpanTypeBanner $size={"sm"}>#投資規劃</SpanTypeBanner>
            </FlexType>
          </FlexTypeBanner>
        </BannerBox>
      </ImgContainer>
      {/*TODO  data 字數需限制 */}
      {/* 學習地圖 */}
      <IndexBox>
        <CourseSection img={map} title={"碳吉學院學習地圖"} />
        {/* 新手推薦 */}
        <CourseMap
          imgSrc={tangyNew}
          title="新手推薦"
          secTitle="打好基礎，啟航財富之旅"
          ImgWidth={"50%"}
          cardData={[
            {
              imgSrc: course_1,
              title: "理財新手財務啟蒙之旅入門指南",
              name: "碳吉老師",
              stars: "4.5",
              tag: [],
              people: "8,932",
              time: "4.6小時",
              price: "3,600",
              originalPrice: "5,800",
            },
            {
              imgSrc: course_1,
              title: "理財新手財務啟蒙之旅入門指南2",
              name: "碳吉老師2",
              stars: "4.52",
              tag: [],
              people: "8,9322",
              time: "4.62小時",
              price: "3,6002",
              originalPrice: "5,8002",
            },
          ]}
        />
        <CourseMap
          imgSrc={tangyMap_2}
          title="投資推薦"
          reverse={true}
          secTitle="建立家庭儲蓄，提升投資能力"
          ImgWidth={"50%"}
          cardData={[
            {
              imgSrc: course_1,
              title: "理財新手財務啟蒙之旅入門指南",
              name: "碳吉老師",
              stars: "4.5",
              people: "8,932",
              time: "4.6小時",
              tag: [],
              price: "3,600",
              originalPrice: "5,800",
            },
            {
              imgSrc: course_1,
              title:
                "之旅入門指南 之旅入門指南 之旅入門指南 之旅入門指南 之旅入門指南 之旅入門指南 之旅入門指南 之旅入門指南 之旅入門指南之旅入門指南 之旅入門指南 之旅入門指南 之旅入門指南",
              name: "碳吉老師2",
              stars: "4.52",
              people: "8,9322",
              tag: [],
              time: "4.62小時",
              price: "3,6002",
              originalPrice: "5,8002",
            },
          ]}
        />
        <CourseMap
          imgSrc={tangyMap_3}
          title="退休推薦"
          secTitle="財富自由，掌握未來！"
          ImgWidth={"50%"}
          cardData={[
            {
              imgSrc: course_1,
              title: "理財新手財務啟蒙之旅入門指南",
              name: "碳吉老師",
              tag: [],
              stars: "4.5",
              people: "8,932",
              time: "4.6小時",
              price: "3,600",
              originalPrice: "5,800",
            },
            {
              imgSrc: course_1,
              title: "理財新手財務啟蒙之旅入門指南2",
              name: "碳吉老師2",
              stars: "4.52",
              tag: [],
              people: "8,9322",
              time: "4.62小時",
              price: "3,6002",
              originalPrice: "5,8002",
            },
          ]}
        />
      </IndexBox>
      {/* 碳吉好學院 */}
      <Container>
        <IndexBox>
          <FlexType
            $direction={"column"}
            style={{ width: "100%" }}
            $gap={"none"}
          >
            <CourseSection img={tangyIcon} title={"碳吉學院好在哪 !?"} />
            <CardFlex
              $direction={{ xs: "column", sm: "row" }}
              $align={"flex-start"}
              $gap={"lg"}
            >
              <CardSm
                img={card_1}
                title={"全方位財務知識"}
                content={
                  "涵蓋上班族、創業家、退休族各個人生階段、各行業財務知識"
                }
              />
              <CardSm
                img={card_2}
                title={"實力派碳吉講師"}
                content={
                  "每位講師都具備實戰績效、授課經驗，真的可以帶你碳大吉的講師！"
                }
              />
              <CardSm
                img={card_3}
                title={"豐富的學習資源"}
                content={
                  "除了課程內容以外，碳吉學院還提供額外的學習資源下載，龍吼你碳！"
                }
              />
            </CardFlex>
          </FlexType>
        </IndexBox>
      </Container>
      {/* 學員評價 */}
      <IndexBox>
        <FlexType
          $direction={"column"}
          style={{ width: "100%", padding: "48px 0" }}
          $gap={"none"}
        >
          <CourseSection
            img={tangyIcon_2}
            title={"超過 1 萬位碳吉學員 5 ⭐ 好評"}
          />
          <FlexType
            style={{
              width: "100%",
              minWidth: 0,
              flex: 1,
            }}
            $direction={{ xs: "column", sm: "row" }}
            $gap={{ xs: "none", sm: "lg" }}
          >
            {/* button */}
            <Button
              style={{ display: isMobile ? "block" : "none", padding: "8px" }}
              onClick={() => swiperRef.current?.slidePrev()}
              icon={<ArrowBackIosOutlinedIcon />}
            />
            {/* swiper */}
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              style={{
                width: "100%",
                minWidth: 0,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                955: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {cardData.map((item, index) => (
                <SwiperSlide key={`${item.userName}-${index}`}>
                  <CardSection {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* button */}
            <FlexType $gap={"spc"}>
              <Button
                style={{ display: isMobile ? "none" : "block", padding: "8px" }}
                onClick={() => swiperRef.current?.slidePrev()}
                icon={<ArrowBackIosOutlinedIcon />}
              />
              <Button
                style={{ padding: "8px" }}
                onClick={() => swiperRef.current?.slideNext()}
                icon={<ArrowForwardIosOutlinedIcon />}
              />
            </FlexType>
          </FlexType>
        </FlexType>
      </IndexBox>
      {/* end banner */}
      <ImgContainer
        style={{
          minHeight: isMobile ? "480px" : "375px",
        }}
      >
        <BannerImg src={endBanner} alt="手機板banner" />
        <BannerBox>
          <FlexTypeBanner
            $direction={"column"}
            $align={"flex-start"}
            $gap={"lg"}
          >
            <HeadingEndBanner $size={{ xs: "lg", xsLg: "xxxl" }}>
              別再讓錢為你帶來困擾，
              <br /> 讓我們一起碳大吉！
            </HeadingEndBanner>
            {/*TODO 要連接到探索課程 */}
            <ButtonType
              onClick={() => {
                navigate("/course");
              }}
              style={{
                padding: "15px 24px",
                backgroundColor: "white",
                color: "#171717",
              }}
            >
              探索課程
            </ButtonType>
          </FlexTypeBanner>
        </BannerBox>
      </ImgContainer>
    </>
  );
}
