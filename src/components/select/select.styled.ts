import { Select } from "@mui/material";
import styled from "styled-components";
interface StyledSelectProps {
  $isError?: boolean;
}

export const StyledSelect = styled(Select<string>)<StyledSelectProps>(
  ({ $isError }) => ({
    backgroundColor: "white",
    width: "100%",
    minWidth: 0,
    "& .MuiInputBase-root": {
      width: "100%",
      minWidth: 0,
      borderRadius: "16px",
    },
    "& .MuiSelect-select": {
      width: "100%",
      padding: "8.5px 14px",
      minWidth: 0,
      borderRadius: "16px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: $isError ? "#FF2D2D" : "#b9b9bc",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: $isError ? "#FF2D2D" : "#b9b9bc",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: $isError ? "#FF2D2D" : "#b9b9bc",
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: $isError ? "#FF2D2D" : "#b9b9bc",
    },
  }),
);
