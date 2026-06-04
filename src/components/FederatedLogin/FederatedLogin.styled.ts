import styled from "styled-components";
import { Button } from "../Button/Button";

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

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
