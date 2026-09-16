import { LinkAuth } from "../../MainLayout/MainLayout.styled";
import { SpanType } from "../../styles/components/span";
import type { FormError, StringKeys } from "../../types/errorType";
import { Flex, Input } from "./Input.styled";
import { Eye, EyeOff } from "lucide-react";
import { InputAdornment } from "@mui/material";
import { DescriptionTitle } from "../dateTime/dateTime.style";
import { useState, type InputHTMLAttributes, type ReactNode } from "react";
type Props<T> = {
  readonly title: ReactNode;
  readonly fieldKey: StringKeys<T>;
  readonly direction?: "row" | "column";
  readonly information: T;
  readonly onChange: (
    value: string,
    fieldKey: keyof T,
    extra?: Partial<T>,
  ) => void;
  readonly err?: FormError<T>;
  readonly to?: string;
  readonly disabled?: boolean;
  readonly titleSec?: string;
  readonly required?: boolean;
  readonly content?: ReactNode;
  readonly type?: string;
  readonly placeholder?: string;
  readonly inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  readonly extra?: Partial<T>;
};

export function FromInput<T>({
  title,
  to = "",
  direction = "column",
  type,
  placeholder,
  inputMode,
  disabled,
  titleSec,
  required = false,
  content,
  fieldKey,
  information,
  extra,
  err,
  onChange,
}: Props<T>) {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const renderPasswordToggle = () => {
    if (type !== "password") return undefined;

    return (
      <InputAdornment position="end">
        <button
          type="button"
          onClick={() => setPasswordVisible((prev) => !prev)}
        >
          {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </InputAdornment>
    );
  };

  return (
    <Flex
      $direction={direction}
      $gap={"sm"}
      $justify={"center"}
      $align={direction === "row" ? "center" : "flex-start"}
    >
      <Flex
        style={{
          width: direction === "row" ? "190px" : "100%",
        }}
        $justify={"space-between"}
      >
        {/* 標題 */}
        <DescriptionTitle required={required}>{title}</DescriptionTitle>
        {/* 標題右側連結 */}
        {titleSec && <LinkAuth to={to} text={titleSec} />}
      </Flex>
      {/* input表單 */}
      <Input
        style={{
          width: "100%",
        }}
        value={information[fieldKey] ?? ""}
        onChange={(e) => onChange(e.target.value, fieldKey, extra)}
        disabled={disabled}
        variant="outlined"
        type={passwordVisible ? "text" : (type ?? "text")}
        placeholder={placeholder}
        fullWidth
        size="small"
        helperText={err?.[fieldKey] ?? ""}
        $isError={!!err?.[fieldKey]}
        slotProps={{
          htmlInput: {
            inputMode,
          },
          input: {
            endAdornment: renderPasswordToggle(),
          },
        }}
      />
      {/* 底下備註 */}
      {content && content != "" && (
        <SpanType $size={"xs"} $shade={900}>
          {content}
        </SpanType>
      )}
    </Flex>
  );
}
