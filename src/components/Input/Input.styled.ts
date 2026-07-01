import { TextField } from "@mui/material";
import styled from "styled-components";
import { FlexType } from "../../styles/components/flex";

interface StyledInputProps {
  $isError?: boolean;
}
export const Input = styled(TextField)<StyledInputProps>`
  && {
    .MuiOutlinedInput-root {
      background-color: white;
    }

    .MuiOutlinedInput-notchedOutline {
      top: 0;
      border-color: ${({ $isError }) => ($isError ? "#FF2D2D" : "#ccc")};
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    }

    .MuiOutlinedInput-notchedOutline legend {
      display: none;
    }

    .MuiFormHelperText-root {
      margin: 0;
      color: ${({ $isError }) => ($isError ? "#FF2D2D" : "#666")};
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
