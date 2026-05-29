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
        <FlexType style={{ padding: "24px 0" }} $direction={"column"}>
          <BannerMapImg src={map} />
          <H1>碳吉學院學習地圖</H1>
        </FlexType>
      </ContainerBanner>
    </>
  );
}
