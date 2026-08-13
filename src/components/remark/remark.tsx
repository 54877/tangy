import type { ReactNode } from "react";
import type { FormError, StringKeys } from "../../types/errorType";
import { DescriptionTitle } from "../dateTime/dateTime.style";
import { Flex } from "../Input/Input.styled";
import { Remark } from "./remark.styled";

type Props<T> = {
  readonly err?: FormError<T>;
  readonly title: ReactNode;
  readonly disabled?: boolean;
  readonly label?: string;
  readonly direction?: "row" | "column";
  readonly required?: boolean;
  readonly fieldKey: StringKeys<T>;
  readonly information: T;
  readonly extra?: Partial<T>;
  readonly rows: number;
  readonly onChange: (
    value: string,
    fieldKey: keyof T,
    extra?: Partial<T>,
  ) => void;
};

export function FromRemark<T>({
  title,
  rows,
  label,
  direction = "column",
  disabled,
  required = false,
  fieldKey,
  information,
  extra,
  err,
  onChange,
}: Props<T>) {
  return (
    <Flex
      $direction={direction}
      $gap={"sm"}
      $align={direction === "row" ? "center" : "flex-start"}
    >
      <Flex
        style={{
          width: direction === "row" ? "190px" : "100%",
        }}
        $justify={"space-between"}
      >
        {/* 標題*/}
        <DescriptionTitle required={required}>{title}</DescriptionTitle>
      </Flex>
      {/* remark表單 */}
      <Remark
        disabled={disabled}
        label={label}
        name="management_dept"
        fullWidth
        maxRows={rows}
        multiline
        sx={{
          margin: "0",
          alignItems: "flex-start",
          height: `${rows * 35}px`,
          "& .MuiInputBase-root": {
            height: "100%",
          },
        }}
        margin="normal"
        value={information[fieldKey] ?? ""}
        onChange={(e) => onChange(e.target.value, fieldKey, extra)}
        helperText={err?.[fieldKey] ?? ""}
        $isError={!!err?.[fieldKey]}
      />
    </Flex>
  );
}
