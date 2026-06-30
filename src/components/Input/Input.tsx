import { LinkAuth } from "../../MainLayout/MainLayout.styled";
import { SpanType } from "../../styles/components/span";
import { Flex, Input, Required } from "./Input.styled";

type Props<T> = {
  readonly title: string;
  readonly to?: string;
  readonly disabled?: boolean;
  readonly titleSec?: string;
  readonly required?: boolean;
  readonly content?: string;
  readonly fieldKey: keyof T;
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
  disabled,
  titleSec,
  required = false,
  content,
  fieldKey,
  information,
  extra,
  onChange,
}: Props<T>) {
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
        fullWidth
        size="small"
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
