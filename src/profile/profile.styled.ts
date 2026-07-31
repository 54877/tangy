import styled from "styled-components";
import { Flex } from "../components/Input/Input.styled";
import { media } from "../styles/helper/media";
import { SpanType } from "../styles/components/span";

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${media.xsLg} {
    object-position: right 85%;
  }
  ${media.sm} {
    object-position: right 65%;
  }
`;

export const ItemFlex = styled(Flex)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  padding: 24px 0;
  border-bottom: 1px solid #ccd1d5;
`;

export const MacItemFlex = styled(Flex)`
  padding-top: 24px;
`;

export const FlexRelative = styled(Flex)`
  position: relative;
`;

export const FlexAbs = styled(Flex)`
  position: absolute;
  inset: 0;
`;

export const FlexGray = styled(Flex)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`;

export const Container = styled(Flex)`
  padding: 0 16px;
`;

export const ContainerPrimary = styled(Flex)`
  padding: 16px;
`;

export const MacContainer = styled(Flex)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${media.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`;

export const SideBarContainer = styled(Flex)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;
export const ItemSpan = styled(SpanType)``;

export const ItemContainer = styled(ContainerPrimary)<{
  $activeIndex?: boolean;
}>`
  border-radius: 8px;

  background-color: ${({ theme, $activeIndex }) =>
    $activeIndex ? theme.colors.primary[500] : "transparent"};

  ${ItemSpan} {
    color: ${({ theme, $activeIndex }) =>
      $activeIndex ? "white" : theme.colors.gray[500]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    color: white;
  }
  &:hover ${ItemSpan} {
    color: white;
  }
`;
