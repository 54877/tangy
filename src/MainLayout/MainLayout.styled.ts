import { Container } from "@mui/material";
import styled from "styled-components";

export const ContainerLayout = styled(Container)(() => ({
  maxWidth: "1320px",
}));

export const FooterContainer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.gray[50],
}));
