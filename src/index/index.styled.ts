import styled from "styled-components";
import { media } from "../styles/helper/media";
import { FlexType } from "../styles/components/flex";
import { Heading, SpanType } from "../styles/components/span";

export const BannerImg = styled.img<{ $isMobile?: boolean }>`
  width: 100%;
  height: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "480px" : "375px")};
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
  [media.sm]: {
    padding: "0",
  },
}));

export const FlexTypeBanner = styled(FlexType)`
  flex: 1;
`;

export const HeadingBanner = styled(Heading)`
  color: white;
  text-align: center;
  ${media.sm} {
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

export const ContainerBanner = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
`;

export const BannerMapImg = styled.img<{ $isMobile?: boolean }>`
  height: 120px;
  object-fit: cover;
  display: block;
`;

export const H1 = styled.h1`
  ${({ theme }) => theme.typography.heading.md};
`;
