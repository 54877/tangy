import styled from "styled-components";
import { SpanType } from "../styles/components/span";

export const ContainerLayout = styled.div(() => ({
  margin: "0 auto",
  maxWidth: "1320px",
  width: "100%",
}));

export const FooterContainer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.gray[50],
}));

export const FooterIcon = styled.img(() => ({
  width: "24px",
  height: "24px",
}));

export const FooterSpan = styled(SpanType)`
  padding: 4px 0;
`;
