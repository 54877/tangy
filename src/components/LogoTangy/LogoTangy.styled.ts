import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const TangyIcon = styled.img(() => ({
  width: "50px",
  height: "50px",
  objectFit: "cover",
}));

export const TangyTitle = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    color: #232529;
  }
`;

export const TangyLogoBox = styled(Box)(() => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
}));
