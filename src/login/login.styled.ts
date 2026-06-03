import styled from "styled-components";
import { media } from "../styles/helper/media";
import { Button } from "../components/Button/Button";
import { LinkPrimary } from "../components/Link/Link";

export const Img = styled.img`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  object-fit: cover;

  z-index: -1;
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 16px;
  ${media.lg} {
    padding: 0;
  }
`;

export const LoginImg = styled.img`
  width: 240px;
  display: block;
  object-fit: cover;
`;

export const ButtonLogin = styled(Button)`
  && {
    background: rgb(31, 136, 61);
    width: 100%;
    transition: 0.2s ease;
    &:hover {
      transform: translateY(-1px);
      background: rgb(24, 110, 49);
    }
  }
`;

export const Link = styled(LinkPrimary)`
  color: #e3f2fd;
  &:hover {
    transform: translateY(-1px);
    color: white;
  }
`;

export const ButtonSec = styled(Button)`
  && {
    background: #e3f2fd;
    color: Black;
    width: 100%;
    transition: 0.2s ease;
    &:hover {
      transform: translateY(-1px);
      background: white;
    }
  }
`;
