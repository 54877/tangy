import styled from "styled-components";
import { SpanType } from "../styles/components/span";
import { media } from "../styles/helper/media";

export const ContainerLayout = styled.div(() => ({
  padding: "0 24px",
  margin: "0 auto",
  maxWidth: "1320px",
  width: "100%",
  [media.sm]: {
    padding: 0,
  },
}));

export const FooterContainer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.gray[50],
  padding: "48px 0",
}));

export const FooterIcon = styled.img(() => ({
  width: "24px",
  height: "24px",
}));

export const FooterSpan = styled(SpanType)`
  padding: 4px 0;
`;
