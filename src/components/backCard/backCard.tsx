import type { ReactNode } from "react";
import { SpanType } from "../../styles/components/span";
import { Flex } from "../Input/Input.styled";
import { CardContainer } from "./backCaed.styled";

type BackCardType = {
  title: string;
  num: string;
  img: ReactNode;
  onClick: () => void;
  isActive: boolean;
};

export const BackCard = ({
  title,
  num,
  onClick,
  img,
  isActive,
}: BackCardType) => {
  return (
    <CardContainer onClick={onClick} $active={isActive}>
      <Flex>{img}</Flex>
      <Flex $direction={"column"}>
        <SpanType
          style={{ fontWeight: "600", fontSize: "20px", width: "100%" }}
        >
          {title}
        </SpanType>
        <SpanType
          style={{ fontWeight: "900", fontSize: "36px", width: "100%" }}
        >
          {num}
        </SpanType>
      </Flex>
    </CardContainer>
  );
};
