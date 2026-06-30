import type { ReactNode } from "react";
import { NavLinkType } from "./Link.styled";
import type { CSSProperties } from "styled-components";

interface LinkType {
  readonly text?: string;
  readonly icon_right?: ReactNode;
  readonly icon_left?: ReactNode;
  readonly to: string;
  readonly className?: string;
  readonly style?: CSSProperties;
}

export function LinkPrimary({
  className,
  style,
  to,
  text,
  icon_right,
  icon_left,
}: LinkType) {
  return (
    <NavLinkType className={className} style={{ ...style }} to={to}>
      {icon_left}
      {text}
      {icon_right}
    </NavLinkType>
  );
}
