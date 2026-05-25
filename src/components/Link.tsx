import { NavLinkType } from "../styled/Link.styled";

interface linkType {
  text: string;
}

//TODO 等建立好ROUTE 新增to 參數且為必填
export function LinkPrimary({ text }: linkType) {
  return (
    <>
      <NavLinkType>{text}</NavLinkType>
    </>
  );
}
