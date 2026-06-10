import { Typography } from "@mui/material";
import styled from "styled-components";
import { FlexType } from "../../styles/components/flex";
import { media } from "../../styles/helper/media";

export const TangyIcon = styled.img<{ $type: boolean }>`
  width: 80px;
  height: 80px;
  position: absolute;
  object-fit: cover;

  transform: ${({ $type }) =>
    $type ? "translate(-14%, -45px)" : "translate(-110%, -5px)"};

  ${media.sm} {
    transform: translate(-110%, -5px);
  }
`;

export const TangyTitle = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    color: #232529;
  }
`;

export const FlexLogo = styled(FlexType)<{ $type: boolean }>`
  margin: 0 0 0 -18px;
`;

export const LogoWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  position: "relative",
});

export const Container = styled(FlexType)<{ $type: boolean }>`
  padding-left: ${({ $type }) => ($type ? "20px" : "67px")};

  ${media.sm} {
    padding-left: 67px;
  }
`;
