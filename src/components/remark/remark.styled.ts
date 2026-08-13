import { TextField } from "@mui/material";
import styled from "styled-components";

interface StyledInputProps {
  $isError?: boolean;
}

export const Remark = styled(TextField)<StyledInputProps>`
  && {
    width: 100%;
    & .MuiOutlinedInput-root {
      border-radius: 8px;
      background-color: white;
      & fieldset {
        border-color: ${({ $isError }) => ($isError ? "#FF2D2D" : "#ccc")};
      }

      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${({ $isError }) => ($isError ? "#FF2D2D" : "#b9b9bc")};
      }

      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${({ $isError }) => ($isError ? "#FF2D2D" : "#b9b9bc")};
      }
    }

    & .MuiFormHelperText-root {
      color: #ff2d2d;
    }

    & .MuiInputLabel-root {
      color: ${({ $isError }) => ($isError ? "#FF2D2D" : "#b9b9bc")};
      font-size: 1rem;
    }
  }
`;
