import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Fb from "../assets/icon_tangy/facebook.png";
import ig from "../assets/icon_tangy/IG.png";
import line from "../assets/icon_tangy/line.png";
import x from "../assets/icon_tangy/x.png";
import { Button } from "../components/Button/Button";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";
import { FlexType } from "../styles/components/flex";
import { Heading, SpanType } from "../styles/components/span";
import { media } from "../styles/helper/media";
import {
  ButtonIcon,
  ContainerHeader,
  ContainerLayout,
  FlexTypeHeader,
  FooterContainer,
  FooterIcon,
  FooterSpan,
  HeaderFixed,
  HeaderSearch,
  Li,
  ListMenu,
  MenuIcon,
  Search,
  SearchFlex,
} from "./MainLayout.styled";
//TODO LOGO 跳轉手頁
//TODO API 取得課程分類  後台可修改客成分類
//TODO 登入註冊跳轉 登入頁面
//TODO search 跳轉頁面

export function MainLayout() {
  const isMobile = useMediaQuery(`${media.sm}`);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const loginRouterOnclick = () => {
    navigate("/login");
  };

  return (
    <>
      {/*     TOP NAV   */}
      <HeaderFixed>
        <ContainerHeader $gap={{ sm: "lg" }} $justify="space-between">
          <LogoTangy />

          <FlexType $display={{ xs: "none", sm: "flex" }}>
            <SpanType>課程分類</SpanType>
            <KeyboardArrowDownIcon />
          </FlexType>

          <FlexTypeHeader $gap={{ xs: "none", sm: "lg" }}>
            {/* 搜尋 */}
            <SearchFlex>
              <HeaderSearch type="text" />
              <Search />
            </SearchFlex>
            <FlexType $gap={{ xs: "none", sm: "sm" }}>
              {/* cart */}
              <ShoppingCartOutlinedIcon
                sx={{ margin: "12px", cursor: "pointer" }}
              />
              {/* Menu */}
              {isMobile ? (
                <Button onClick={loginRouterOnclick} text={"登入/註冊"} />
              ) : open ? (
                <>
                  <ButtonIcon
                    onClick={() => setOpen(false)}
                    icon={<CloseIcon />}
                  />
                </>
              ) : (
                <>
                  <ButtonIcon
                    onClick={() => setOpen(true)}
                    icon={<MenuIcon />}
                  />
                </>
              )}
            </FlexType>
          </FlexTypeHeader>
        </ContainerHeader>
      </HeaderFixed>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: isMobile ? "0" : "80px",
          padding: "0",
        }}
      >
        <Outlet />
      </Box>

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
              $gap={{ xs: "lg", sm: "xxl" }}
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
              $gap={{ sm: "xxxl", xs: "lg" }}
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

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            pt: "80px",
          },
        }}
      >
        <ListMenu>
          <FlexType $direction={"column"} $gap={"sm"}>
            <Li>
              <SpanType $type="label">所有領域</SpanType>
            </Li>
            <Li>
              <SpanType>個人理財</SpanType>
              <ArrowForwardIosIcon />
            </Li>
            <Li>
              <SpanType>家族財富</SpanType>
              <ArrowForwardIosIcon />
            </Li>
            <Li>
              <SpanType>投資規劃</SpanType>
              <ArrowForwardIosIcon />
            </Li>
            <Li>
              <SpanType>財務分析</SpanType>
              <ArrowForwardIosIcon />
            </Li>
            <Li>
              <SpanType>風險管理</SpanType>
              <ArrowForwardIosIcon />
            </Li>
          </FlexType>
          <Button onClick={loginRouterOnclick} text={"登入/註冊"} />
        </ListMenu>
      </Drawer>
    </>
  );
}
