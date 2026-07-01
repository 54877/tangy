import { useState, type ReactNode } from "react";
import { LinkAuth } from "../../MainLayout/MainLayout.styled";
import { SpanType } from "../../styles/components/span";
import type { FormError, StringKeys } from "../../types/errorType";
import { Flex, Input, Required } from "./Input.styled";
import { Eye, EyeOff } from "lucide-react";
import { InputAdornment } from "@mui/material";
type Props<T> = {
  readonly err?: FormError<T>;
  readonly title: string;
  readonly to?: string;
  readonly disabled?: boolean;
  readonly titleSec?: string;
  readonly required?: boolean;
  readonly content?: ReactNode | string;
  readonly type?: string;
  readonly fieldKey: StringKeys<T>;
  readonly information: T;
  readonly extra?: Partial<T>;
  readonly onChange: (
    value: string,
    fieldKey: keyof T,
    extra?: Partial<T>,
  ) => void;
};

export function FromInput<T>({
  title,
  to = "",
  type,
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
    <Flex $direction={"column"} $gap={"sm"} $align={"flex-start"}>
      <Flex $justify={"space-between"}>
        {/* 標題 */}
        <SpanType $type={"label"}>
          {title}
          <Required $required={required}> *</Required>
        </SpanType>
        {/* 標題右側連結 */}
        {titleSec && <LinkAuth to={to} text={titleSec} />}
      </Flex>
      {/* input表單 */}
      <Input
        value={information[fieldKey] ?? ""}
        onChange={(e) => onChange(e.target.value, fieldKey, extra)}
        disabled={disabled}
        variant="outlined"
        type={passwordVisible ? "text" : (type ?? "text")}
        fullWidth
        size="small"
        helperText={err?.[fieldKey] ?? ""}
        $isError={!!err?.[fieldKey]}
        slotProps={{
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
