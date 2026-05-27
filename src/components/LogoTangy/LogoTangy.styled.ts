import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const TangyIcon = styled.img(() => ({
  width: "40px",
  height: "40px",
}));

export const TangyTitle = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: 400;
    color: #232529;
  }
`;

export const TangyLogoBox = styled(Box)(() => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
}));
