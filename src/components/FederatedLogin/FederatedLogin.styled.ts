import styled from "styled-components";
import { Button } from "../Button/Button";

export const ButtonSec = styled(Button)`
  && {
    background: white;
    color: Black;
    width: 100%;
    transition: 0.2s ease;
    &:hover {
      transform: translateY(-1px);
      background: #e3f2fd;
    }
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
