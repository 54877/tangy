import styled from "styled-components";
import { responsiveStyle, type Responsive } from "../helper/media";
import type { spaces } from "../tokens/spaces";
type SpaceKey = keyof typeof spaces;

export const FlexType = styled.div<{
  $display?: Responsive<"block" | "flex" | "none">;

  $direction?: Responsive<
    "row" | "column" | "none" | "row-reverse" | "column-reverse"
  >;

  $align?: Responsive<
    "flex-start" | "center" | "flex-end" | "stretch" | "none"
  >;

  $justify?: Responsive<
    "flex-start" | "center" | "space-between" | "flex-end" | "none"
  >;

  $gap?: Responsive<SpaceKey>;
}>`
  display: flex;

  ${({ theme, $display = "flex" }) =>
    responsiveStyle("display", $display, theme.breakpoints)}

  ${({ theme, $direction = "row" }) =>
    responsiveStyle("flex-direction", $direction, theme.breakpoints)}

  ${({ theme, $align = "center" }) =>
    responsiveStyle("align-items", $align, theme.breakpoints)}

  ${({ theme, $justify = "center" }) =>
    responsiveStyle("justify-content", $justify, theme.breakpoints)}

  ${({ theme, $gap = "sm" }) =>
    responsiveStyle(
      "gap",
      $gap,
      theme.breakpoints,
      (value) => theme.spaces[value],
    )}
`;
