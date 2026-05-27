import { Outlet } from "react-router-dom";
import Fb from "../assets/icon_tangy/facebook.png";
import ig from "../assets/icon_tangy/IG.png";
import line from "../assets/icon_tangy/line.png";
import x from "../assets/icon_tangy/x.png";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";
import { FlexType } from "../styles/components/flex";
import { Heading, SpanType } from "../styles/components/span";
import {
  ContainerLayout,
  FooterContainer,
  FooterIcon,
  FooterSpan,
} from "./MainLayout.styled";

export function MainLayout() {
  return (
    <>
      <h1>我是MainLayout</h1>
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
            $justify="space-between"
          >
            <FlexType
              style={{ gap: "68px" }}
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
            <FlexType style={{ gap: "100px" }} $align="flex-start">
              <FlexType $direction="column" $gap="none" $align="flex-start">
                <Heading
                  style={{ marginBottom: "12px" }}
                  $size="sm"
                  $color="primary"
                  $Shade={600}
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
                  $Shade={600}
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
                  $Shade={600}
                >
                  碳吉老師
                </Heading>
                <FooterSpan>申請成為老師</FooterSpan>
                <FooterSpan>老師儀表板</FooterSpan>
              </FlexType>
            </FlexType>
          </FlexType>
          <FlexType $gap="lg" $justify="flex-start">
            <FooterSpan>© 2024 碳吉學院 All Rights Reserved</FooterSpan>
            <FooterSpan>隱私權政策</FooterSpan>
            <FooterSpan>使用者條款</FooterSpan>
          </FlexType>
        </ContainerLayout>
      </FooterContainer>
    </>
  );
}
