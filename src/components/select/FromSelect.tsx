import { FormControl, MenuItem } from "@mui/material";
import type { FormError, StringKeys } from "../../types/errorType";
import { DescriptionTitle } from "../dateTime/dateTime.style";
import { Flex } from "../Input/Input.styled";
import { StyledSelect } from "./select.styled";
import type { OptionItem } from "../../types/select";
import type { ReactNode } from "react";

interface Props<T, L extends OptionItem> {
  labelKey: keyof L;
  valueKey: keyof L;
  direction?: "row" | "column";
  fieldKey: StringKeys<T>;
  information: T;
  list: L[];
  defaultName: string;
  title: ReactNode;
  err?: FormError<T>;
  extra?: Partial<T>;
  disable?: boolean;
  required?: boolean;
  onChange: (
    value: string,
    fieldKey: StringKeys<T>,
    extra?: Partial<T>,
  ) => void;
}
export const FormSelect = <T, L extends OptionItem>({
  err,
  onChange,
  fieldKey,
  extra,
  disable,
  labelKey,
  valueKey,
  title,
  list,
  direction = "column",
  required,
  defaultName,
  information,
}: Props<T, L>) => {
  return (
    <Flex $direction={direction} $gap={"sm"} $align={"center"}>
      <Flex
        style={{
          width: direction === "row" ? "190px" : "100%",
        }}
        $justify={"space-between"}
      >
        {/* 標題*/}
        <DescriptionTitle required={required}>{title}</DescriptionTitle>
      </Flex>
      <Flex>
        <FormControl sx={{ width: "100%" }}>
          <StyledSelect
            value={(information[fieldKey] ?? "") as string}
            onChange={(e) => onChange(e.target.value, fieldKey, extra)}
            displayEmpty
            disabled={disable}
            MenuProps={{
              slotProps: {
                paper: {
                  sx: {
                    maxHeight: "30vh",
                  },
                },
              },
            }}
            $isError={!!err?.[fieldKey]}
          >
            {/* 預設值 */}
            <MenuItem disabled value="">
              <em
                style={{
                  color: err?.[fieldKey] ? "#FF2D2D" : "rgba(0, 0, 0, 0.4)",
                }}
              >
                {defaultName}
              </em>
            </MenuItem>
            {/* 語系選項 */}
            {list?.map((e) => (
              <MenuItem
                sx={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
                key={String(e[valueKey])}
                value={String(e[valueKey])}
              >
                {String(e[labelKey])}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      </Flex>
    </Flex>
  );
};
