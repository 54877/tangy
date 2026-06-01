import course_1 from "../assets/icon_tangy/course_1.png";
import tangyNew from "../assets/icon_tangy/tangyNew.png";
import banner_768 from "../assets/icon_tangy/banner_768.png";
import banner from "../assets/icon_tangy/banner.png";
import map from "../assets/icon_tangy/map.png";
import {
  BannerBox,
  BannerImg,
  BannerMapImg,
  ContainerBanner,
  FlexTypeBanner,
  H1,
  HeadingBanner,
  SpanTypeBanner,
} from "./index.styled";
import SearchIcon from "@mui/icons-material/Search";
import { Box, useMediaQuery } from "@mui/material";
import { media } from "../styles/helper/media";
import { FlexType } from "../styles/components/flex";
import { CourseMap } from "../components/CourseMap/CourseMap";

export function Index() {
  const isMobile = useMediaQuery(`${media.sm}`);
  return (
    <>
      {/* Banner */}
      <Box
        sx={{
          position: "relative",
          minHeight: isMobile ? "480px" : "375px",
          width: "100%",
        }}
      >
        <BannerImg
          $isMobile={isMobile}
          src={isMobile ? banner : banner_768}
          alt="手機板banner"
        />
        <BannerBox>
          <FlexTypeBanner
            $direction={"column"}
            $align={{ xs: "center", sm: "flex-start" }}
            $gap={{ xs: "spc", sm: "lg" }}
          >
            <HeadingBanner $size={{ xs: "lg", sm: "xxxl" }}>
              碳吉人生
              <br /> 從學習理財開始
            </HeadingBanner>
            {/* 搜尋 */}
            <SpanTypeBanner
              style={{
                width: "100%",
                padding: "12px 12px",
                maxWidth: isMobile ? "430px" : "unset",
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
      </Box>
      <ContainerBanner>
        {/* 學習地圖 */}
        <FlexType style={{ padding: "24px 0" }} $direction={"column"}>
          <BannerMapImg src={map} />
          <H1>碳吉學院學習地圖</H1>
        </FlexType>
        {/* 新手推薦 */}
        <CourseMap
          imgSrc={tangyNew}
          title="新手推薦"
          secTitle="打好基礎，啟航財富之旅"
          cardData={[
            {
              imgSrc: course_1,
              title: "理財新手財務啟蒙之旅入門指南",
              name: "碳吉老師",
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
              people: "8,9322",
              time: "4.62小時",
              price: "3,6002",
              originalPrice: "5,8002",
            },
          ]}
        />
      </ContainerBanner>
    </>
  );
}
