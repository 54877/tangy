import styled from "styled-components";
import { SpanType } from "../styles/components/span";
import { media } from "../styles/helper/media";
import { FlexType } from "../styles/components/flex";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { List } from "@mui/material";
import { Button, ButtonOutlined } from "../components/Button/Button";
import { LinkPrimary } from "../components/Link/Link";

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

export const FlexTypeHeader = styled(FlexType)`
  ${media.sm} {
    flex: 1;
  }
`;

export const HeaderSearch = styled.input`
  display: none;

  ${media.sm} {
    display: block;
    width: 100%;
    height: 40px;
    flex: 1;
    padding-left: 44px;
    padding-right: 12px;
    border: none;
    border-radius: 1000px;
    background-color: ${({ theme }) => theme.colors.gray[50]};
    ${({ theme }) => theme.typography.paragraph.md};
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
export const Search = styled(SearchIcon)`
  margin: 12px;
  ${media.sm} {
    position: absolute;
    left: 0;
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

export const MenuIcon = styled(MenuOutlinedIcon)`
  && {
    cursor: pointer;
    flex-shrink: 0;
  }
`;

export const HeaderFixed = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1301;
  background-color: white;
  border-bottom: 1px solid #ccd1d5;
  ${media.sm} {
    position: unset;
  }
`;

export const ContainerHeader = styled(FlexType)`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  padding: 16px;
`;

export const ButtonIcon = styled(Button)`
  border-radius: 0;
  background-color: white;
  color: ${({ theme }) => theme.colors.gray[950]};
  &:hover {
    background-color: white;
  }

  &:focus {
    box-shadow: 0px 0px 0px 0px white;
  }
`;

export const ListMenu = styled(List)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  && {
    padding: 8px 16px 16px 16px;
  }
`;

export const ButtonAuth = styled(Button)`
  && {
    background: #658245;
    width: 100%;
    transition: 0.2s ease;
    &:hover {
      transform: translateY(-1px);
      background: rgb(24, 110, 49);
    }
  }
`;

export const LinkAuth = styled(LinkPrimary)`
  color: #87996b;
  &:hover {
    transform: translateY(-1px);
    color: white;
  }
`;

export const Border = styled.div<{ $borderState: boolean }>`
  width: 100%;
  border: ${({ $borderState }) =>
    $borderState ? "solid 2px #E5E5E5" : "solid 2px #0AA2C0"};
`;

export const BorderReverse = styled.div<{ $borderState: boolean }>`
  width: 100%;
  border: ${({ $borderState }) =>
    $borderState ? "solid 2px #0AA2C0" : "solid 2px #E5E5E5"};
`;

export const NavButton = styled(ButtonOutlined)`
  width: 100%;
  padding: 20px 0 8px 0;
  border: 0;
  background-color: white;
  &:focus {
    border: 0;
  }
`;

export const NavFlex = styled(FlexType)`
  max-width: 50%;
  width: 100%;
`;

export const UserListMenu = styled(List)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-top: solid 1px #e4e8e9;
  border-bottom: solid 1px #e4e8e9;
`;

export const UserContainer = styled(FlexType)`
  padding: 8px 16px;
`;
