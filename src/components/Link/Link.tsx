import type { ReactNode } from "react";
import { NavLinkType } from "./Link.styled";
import type { CSSProperties } from "styled-components";

interface linkType {
  text?: string;
  icon_right?: ReactNode;
  icon_left?: ReactNode;
  to: string;
  className?: string;
  style?: CSSProperties;
}

export function LinkPrimary({
  className,
  style,
  to,
  text,
  icon_right,
  icon_left,
}: linkType) {
  return (
    <>
      <NavLinkType className={className} style={{ ...style }} to={to}>
        {icon_left}
        {text}
        {icon_right}
      </NavLinkType>
    </>
  );
}
