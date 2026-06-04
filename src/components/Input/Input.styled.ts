import { TextField } from "@mui/material";
import styled from "styled-components";
import { LinkPrimary } from "../Link/Link";
import { FlexType } from "../../styles/components/flex";

export const Input = styled(TextField)`
  && {
    .MuiOutlinedInput-root {
      background-color: white;
    }

    .MuiOutlinedInput-notchedOutline {
      top: 0;
    }

    .MuiOutlinedInput-notchedOutline legend {
      display: none;
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

export const Flex = styled(FlexType)`
  width: 100%;
`;

export const Required = styled.span<{ $required: boolean }>`
  display: ${({ $required }) => ($required ? "inline" : "none")};
  color: ${({ theme }) => theme.colors.danger[600]};
`;
