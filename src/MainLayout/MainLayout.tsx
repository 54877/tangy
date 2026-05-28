import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Outlet } from "react-router-dom";
import Fb from "../assets/icon_tangy/facebook.png";
import ig from "../assets/icon_tangy/IG.png";
import line from "../assets/icon_tangy/line.png";
import x from "../assets/icon_tangy/x.png";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";
import { FlexType } from "../styles/components/flex";
import { Heading, SpanType } from "../styles/components/span";
import {
  ContainerHeader,
  ContainerLayout,
  FlexTypeHeader,
  FooterContainer,
  FooterIcon,
  FooterSpan,
  HeaderSearch,
  Search,
  SearchFlex,
} from "./MainLayout.styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function MainLayout() {
  return (
    <>
      {/*     TOP NAV   */}
      <ContainerHeader>
        <FlexType $justify="space-between">
          <LogoTangy />
          <FlexType $display={{ xs: "none", sm: "flex" }}>
            <SpanType>課程分類</SpanType>
            <KeyboardArrowDownIcon />
          </FlexType>
          <FlexTypeHeader>
            <SearchFlex>
              <HeaderSearch type="text" />
              <Search />
            </SearchFlex>
            <ShoppingCartOutlinedIcon sx={{ margin: "12px" }} />
            <MenuOutlinedIcon sx={{ margin: "12px" }} />
          </FlexTypeHeader>
        </FlexType>
      </ContainerHeader>
      <Outlet />
      {/* Footer */}
      <FooterContainer>
        <ContainerLayout>
          <FlexType
            style={{
              paddingBottom: "24px",
              borderBottom: "1px  solid #CCD1D5",
              marginBottom: "24px",
            }}
            $direction={{ xs: "column", sm: "row" }}
            $gap={{ xs: "lg", sm: "none" }}
            $justify={{ sm: "space-between" }}
            $align={{ xs: "flex-start" }}
          >
            <FlexType
              $gap={{ xs: "lg", sm: "xl" }}
              $direction="column"
              $align="flex-start"
            >
              {/* logo */}
              <FlexType $gap="sm" $align="flex-start" $direction="column">
                <LogoTangy />
                <SpanType>人生的每一步，都要聰明理財</SpanType>
              </FlexType>
              {/* icon */}
              <FlexType>
                <FooterIcon src={Fb} alt="FB Icon" />
                <FooterIcon src={line} alt="line Icon" />
                <FooterIcon src={ig} alt="ig Icon" />
                <FooterIcon src={x} alt="x Icon" />
              </FlexType>
            </FlexType>

            {/* 認識碳吉 */}
            <FlexType
              $gap={{ sm: "xxl", xs: "lg" }}
              $direction={{ sm: "row", xs: "column" }}
              $align="flex-start"
            >
              <FlexType $direction="column" $gap="none" $align="flex-start">
                <Heading
                  style={{ marginBottom: "12px" }}
                  $size="sm"
                  $color="primary"
                  $shade={600}
                >
                  認識碳吉學院
                </Heading>
                <FooterSpan>關於我們</FooterSpan>
                <FooterSpan>最新消息</FooterSpan>
                <FooterSpan>聯絡我們</FooterSpan>
                <FooterSpan>常見問題</FooterSpan>
              </FlexType>

              <FlexType $direction="column" $gap="none" $align="flex-start">
                <Heading
                  style={{ marginBottom: "12px" }}
                  $size="sm"
                  $color="primary"
                  $shade={600}
                >
                  碳吉學員
                </Heading>
                <FooterSpan>所有課程</FooterSpan>
                <FooterSpan>熱門講師</FooterSpan>
                <FooterSpan>學生好評</FooterSpan>
              </FlexType>

              <FlexType $direction="column" $gap="none" $align="flex-start">
                <Heading
                  style={{ marginBottom: "12px" }}
                  $size="sm"
                  $color="primary"
                  $shade={600}
                >
                  碳吉老師
                </Heading>
                <FooterSpan>申請成為老師</FooterSpan>
                <FooterSpan>老師儀表板</FooterSpan>
              </FlexType>
            </FlexType>
          </FlexType>
          <FlexType
            $gap={{ sm: "lg", xs: "sm" }}
            $direction={{ xs: "column", sm: "row" }}
            $justify="flex-start"
          >
            <FooterSpan>© 2024 碳吉學院 All Rights Reserved</FooterSpan>
            <FlexType $gap={{ xs: "sm", sm: "lg" }}>
              <FooterSpan>隱私權政策</FooterSpan>
              <FooterSpan>使用者條款</FooterSpan>
            </FlexType>
          </FlexType>
        </ContainerLayout>
      </FooterContainer>
    </>
  );
}
