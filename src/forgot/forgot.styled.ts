import styled from "styled-components";
import { Button } from "../components/Button/Button";
import { LinkPrimary } from "../components/Link/Link";

export const ButtonForgot = styled(Button)`
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
