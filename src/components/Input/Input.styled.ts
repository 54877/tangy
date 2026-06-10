import { TextField } from "@mui/material";
import styled from "styled-components";
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

export const Flex = styled(FlexType)`
  width: 100%;
`;

export const Required = styled.span<{ $required: boolean }>`
  display: ${({ $required }) => ($required ? "inline" : "none")};
  color: ${({ theme }) => theme.colors.danger[600]};
`;
