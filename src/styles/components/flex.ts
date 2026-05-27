import styled from "styled-components";
import type { spaces } from "../tokens/spaces";

export const FlexType = styled.div<{
  $direction?: "row" | "column";
  $align?: "flex-start" | "center" | "flex-end" | "stretch";
  $justify?: "flex-start" | "center" | "space-between";
  $gap?: keyof typeof spaces;
}>`
  display: flex;
  flex-direction: ${({ $direction = "row" }) => $direction};
  align-items: ${({ $align = "center" }) => $align};
  justify-content: ${({ $justify = "center" }) => $justify};
  gap: ${({ theme, $gap = "sm" }) => theme.spaces[$gap]};
`;
