import { SpanType } from "../../styles/components/span";
import { Flex } from "../Input/Input.styled";

export const NoDataComponent = () => (
  <Flex
    style={{
      padding: "8px 0",
      backgroundColor: "#f1f1f4",
    }}
  >
    <SpanType>📋 目前沒有資料</SpanType>
  </Flex>
);
