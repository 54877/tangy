import { Button } from "@mui/material";
import styled from "styled-components";
import { FlexType } from "../../styles/components/flex";
import { SpanType } from "../../styles/components/span";

export const DatePickerBlock = styled(FlexType)<{
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

export const ItemContentBlock = styled(FlexType)`
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

export const DescriptionTitle = styled(SpanType)<{ required?: boolean }>(
  ({ required }) => ({
    "&::after": required
      ? {
          content: '"*"',
          color: "red",
          marginLeft: "4px",
        }
      : {},
  }),
);
