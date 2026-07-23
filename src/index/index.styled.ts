import styled from "styled-components";
import { media } from "../styles/helper/media";
import { FlexType } from "../styles/components/flex";
import { Heading, SpanType } from "../styles/components/span";

export const BannerImg = styled.img<{ $isLgMobile?: boolean }>`
  width: 100%;
  height: 100%;
  height: ${({ $isLgMobile }) => ($isLgMobile ? "480px" : "375px")};
  object-fit: cover;
  display: block;
`;
export const BannerBox = styled.div(() => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  padding: "0 16px",

  margin: "0 auto",
  maxWidth: "1320px",
  [media.lg]: {
    padding: "0",
  },
}));

export const FlexTypeBanner = styled(FlexType)`
  flex: 1;
`;

export const HeadingBanner = styled(Heading)`
  color: white;
  text-align: center;
  ${media.xsLg} {
    text-align: start;
    color: ${({ theme }) => theme.colors.gray[950]};
  }
`;

export const SpanTypeBanner = styled(SpanType)`
  display: flex;
  align-items: center;
  justify-content: start;
  color: white;
  border-radius: 1000px;
  padding: 6px 12px;
  background-color: #0000008f;
`;

export const Container = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.gray[50],
  padding: "24px 0",

  [media.sm]: {
    padding: "48px 0",
  },
}));

export const IndexBox = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  padding: 0 16px;
  ${media.lg} {
    padding: 0;
  }
`;

export const CardFlex = styled(FlexType)`
  padding: 16px 0;
  ${media.sm} {
    padding: 48px 0;
  }
`;

export const HeadingEndBanner = styled(Heading)`
  text-align: start;
`;

export const ImgContainer = styled.div`
  width: 100%;
  position: relative;
`;
