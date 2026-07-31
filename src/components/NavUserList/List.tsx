import { FlexType } from "../../styles/components/flex";
import { SpanType } from "../../styles/components/span";
import type { ReactNode } from "react";
import { ListButton, UserLi } from "./List.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Type = {
  icon?: ReactNode;
  text: ReactNode;
  as?: string;
  onClick?: () => void;
  paddingType?: boolean;
  disabled?: boolean;
};

export const UserListButton = ({ disabled, icon, text, as, onClick }: Type) => {
  return (
    <UserLi as={as}>
      <ListButton
        disabled={disabled}
        onClick={onClick}
        text={
          <FlexType style={{ width: "100%" }} $justify={"flex-start"}>
            {icon}
            <SpanType>{text}</SpanType>
          </FlexType>
        }
      />
    </UserLi>
  );
};

export const ListButtonDefault = ({ text, as, paddingType, onClick }: Type) => {
  return (
    <UserLi as={as}>
      <ListButton
        onClick={onClick}
        style={{ padding: paddingType ? 0 : "12px" }}
        text={
          <FlexType style={{ width: "100%" }} $justify={"space-between"}>
            <SpanType>{text}</SpanType>
            <ArrowForwardIosIcon />
          </FlexType>
        }
      />
    </UserLi>
  );
};
