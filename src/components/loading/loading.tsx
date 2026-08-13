import type { CSSProperties } from "styled-components";
import { Flex } from "../Input/Input.styled";
import { LoadingDot, LoadingText, Spinner } from "./loading.styled";

interface Loading {
  type: "button" | "spinner" | "all";
  style?: CSSProperties;
}

export const LoadingUi = ({ type, style }: Loading) => {
  if (type === "button") {
    return (
      <Flex style={{ ...style }}>
        <LoadingText>
          <LoadingDot $delay={0}>L</LoadingDot>
          <LoadingDot $delay={0.1}>o</LoadingDot>
          <LoadingDot $delay={0.2}>a</LoadingDot>
          <LoadingDot $delay={0.3}>d</LoadingDot>
          <LoadingDot $delay={0.4}>i</LoadingDot>
          <LoadingDot $delay={0.5}>n</LoadingDot>
          <LoadingDot $delay={0.6}>g</LoadingDot>
          <LoadingDot $delay={0.7}>.</LoadingDot>
          <LoadingDot $delay={0.8}>.</LoadingDot>
          <LoadingDot $delay={0.9}>.</LoadingDot>
        </LoadingText>
      </Flex>
    );
  }

  if (type === "spinner") {
    return (
      <Flex style={{ ...style }}>
        <Spinner />
      </Flex>
    );
  }

  return null;
};
