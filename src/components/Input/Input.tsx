import { SpanType } from "../../styles/components/span";
import { Flex, Input, Link, Required } from "./Input.styled";

type Props = {
  title: string;
  to?: string;
  titleSec?: string;
  required?: boolean;
  content?: string;
};

export function FromInput({
  title,
  to = "",
  titleSec,
  required = false,
  content,
}: Props) {
  return (
    <>
      <Flex $direction={"column"} $gap={"sm"} $align={"flex-start"}>
        <Flex $justify={"space-between"}>
          <SpanType $type={"label"}>
            {title}
            <Required $required={required}> *</Required>
          </SpanType>
          <Link to={to} text={titleSec} />
        </Flex>
        <Input variant="outlined" fullWidth size="small" />
        {content && content != "" && (
          <SpanType $size={"xs"} $shade={900}>
            {content}
          </SpanType>
        )}
      </Flex>
    </>
  );
}
