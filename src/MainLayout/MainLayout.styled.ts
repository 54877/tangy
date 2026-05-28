import styled from "styled-components";
import { SpanType } from "../styles/components/span";
import { media } from "../styles/helper/media";
import { FlexType } from "../styles/components/flex";
import SearchIcon from "@mui/icons-material/Search";

export const ContainerLayout = styled.div(() => ({
  padding: "0 24px",
  margin: "0 auto",
  maxWidth: "1320px",
  width: "100%",
  [media.lg]: {
    padding: 0,
  },
}));

export const FooterContainer = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.gray[50],
  padding: "24px 0",
  [media.sm]: {
    padding: "48px 0",
  },
}));

export const FooterIcon = styled.img(() => ({
  width: "24px",
  height: "24px",
}));

export const FooterSpan = styled(SpanType)`
  padding: 4px 0;
`;

export const ContainerHeader = styled.header`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  padding: 16px;
`;

export const FlexTypeHeader = styled(FlexType)`
  ${media.sm} {
    flex: 1;
  }
`;

export const HeaderSearch = styled.input`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  min-width: 240px;
  min-height: 40px;
  flex: 1;
  max-height: 48px;
  border-radius: 1000px;
  padding-right: 12px;
  padding-left: 12px;
  position: absolute;
  display: none;
  ${media.sm} {
    display: flex;
  }
`;

export const Search = styled(SearchIcon)`
  ${media.sm} {
    position: absolute;
    left: 12px;
    margin: 12px;
  }
`;

export const SearchFlex = styled(FlexType)`
  ${media.sm} {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
`;
