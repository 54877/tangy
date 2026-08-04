import { Flex } from "../../../../components/Input/Input.styled";
import { SpanType } from "../../../../styles/components/span";

interface Props {
  title: string;
  value: string;
}

export const DeviceItem = ({ title, value }: Props) => {
  return (
    <Flex $justify={"space-between"}>
      <SpanType>{title} :</SpanType>
      <SpanType style={{ flex: 1 }}>{value}</SpanType>
    </Flex>
  );
};
