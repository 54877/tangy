import styled from "styled-components";
import type { colors } from "../tokens/colors";

type Size = "xs" | "sm" | "md" | "lg";
type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type Type = "heading" | "label" | "paragraph";
type Color = keyof typeof colors;
type Shade = keyof typeof colors.primary;

export const SpanType = styled.span<{
  $size?: Size;
  $Type?: Type;
  $color?: Color;
  $Shade?: Shade;
}>`
  ${({ theme, $size = "md", $Type = "paragraph" }) =>
    theme.typography[$Type][$size]}

  color: ${({ theme, $color = "gray", $Shade = 950 }) =>
    theme.colors[$color][$Shade]};
`;

export const Heading = styled.h2<{
  $size?: HeadingSize;
  $color?: Color;
  $Shade?: Shade;
}>`
  ${({ theme, $size = "md" }) => theme.typography.heading[$size]}

  color: ${({ theme, $color = "gray", $Shade = 950 }) =>
    theme.colors[$color][$Shade]};
`;
