import styled from "styled-components";
import { responsiveStyle, type Responsive } from "../helper/media";
import type { colors } from "../tokens/colors";

type Size = "xs" | "sm" | "md" | "lg";

type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type Type = "heading" | "label" | "paragraph";

type Color = keyof typeof colors;

type Shade = keyof typeof colors.primary;

export const SpanType = styled.span<{
  $size?: Responsive<Size>;
  $type?: Type;
  $color?: Color;
  $shade?: Shade;
}>`
  ${({ theme, $size = "md", $type = "paragraph" }) =>
    responsiveStyle(
      "font-size",
      $size,
      theme.breakpoints,
      (value) => theme.typography[$type][value],
    )}

  color: ${({ theme, $color = "gray", $shade = 950 }) =>
    theme.colors[$color][$shade]};
`;

export const Heading = styled.h2<{
  $size?: Responsive<HeadingSize>;
  $color?: Color;
  $shade?: Shade;
}>`
  ${({ theme, $size = "md" }) =>
    responsiveStyle(
      "font-size",
      $size,
      theme.breakpoints,
      (value) => theme.typography.heading[value],
    )}

  color: ${({ theme, $color = "gray", $shade = 950 }) =>
    theme.colors[$color][$shade]};
`;
