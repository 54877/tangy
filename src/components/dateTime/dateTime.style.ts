import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const DatePickerBlock = styled(Box)<{
  width?: string;
  height?: string;
}>(
  ({ width = "146px", height = "37px" }) => `
    flex: 1;
    padding: 0;
  
    .MuiBox-root {
      width: ${width};
    }
  
    .MuiPickersTextField-root {
      width: 100%;
    }
  
    > div > div {
      height: ${height};
    }
  
    && {
    .MuiPickersOutlinedInput-root {
      background-color: white;
      border-radius: 8px;
    }
  }

  
`,
);

export const ItemContentBlock = styled(Box)`
  && {
    min-width: 0;
    background-color: #d9d9d9;
    display: flex;
    gap: 16px;
    width: 100%;
  }
`;

export const Btn = styled(Button)`
  && {
    background-color: #9c27b0;
    color: white;
  }
`;

export const DescriptionTitle = styled.h2<{ required?: boolean }>(
  ({ required }) => ({
    fontSize: "16px",
    fontWeight: 600,
    "&::after": required
      ? {
          content: '"*"',
          color: "red",
          marginLeft: "4px",
        }
      : {},
  }),
);
