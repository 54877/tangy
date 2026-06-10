import styled from "styled-components";
import { media } from "../styles/helper/media";
import { FlexType } from "../styles/components/flex";

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
  max-width: 400px;
  width: 100%;
  display: none;
  object-fit: cover;
  ${media.sm} {
    display: block;
  }
`;

export const LoginContainer = styled(FlexType)`
  width: 100%;
  ${media.sm} {
    width: 50%;
  }
`;
