import type { ReactNode } from "react";
import { NavLinkType } from "./Link.styled";

interface linkType {
  text?: string;
  icon_right?: ReactNode;
  icon_left?: ReactNode;
  to: string;
}

//TODO 等建立好ROUTE 新增to 參數且為必填
export function LinkPrimary({ to, text, icon_right, icon_left }: linkType) {
  return (
    <>
      <NavLinkType to={to}>
        {icon_left}
        {text}
        {icon_right}
      </NavLinkType>
    </>
  );
}
