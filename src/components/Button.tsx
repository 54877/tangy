import { type ReactNode } from "react";
import { ButtonOutlinedType, ButtonType } from "../styled/Button.styled";
import type { CSSProperties } from "styled-components";

interface btnType {
  icon?: ReactNode;
  text?: string;
  icon_right?: ReactNode;
  icon_left?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}

export function Button({
  icon,
  text,
  icon_right,
  icon_left,
  disabled,
  onClick,
  style,
}: btnType) {
  return (
    <>
      {icon ? (
        <ButtonType
          disabled={disabled}
          style={{ borderRadius: "100px", padding: "12px", ...style }}
          onClick={onClick}
        >
          {icon}
        </ButtonType>
      ) : (
        <ButtonType style={{ ...style }} disabled={disabled} onClick={onClick}>
          {icon_left}
          {text}
          {icon_right}
        </ButtonType>
      )}
    </>
  );
}

export function ButtonOutlined({
  icon,
  text,
  icon_right,
  icon_left,
  disabled,
  onClick,
  style,
}: btnType) {
  return (
    <>
      {icon ? (
        <ButtonOutlinedType
          disabled={disabled}
          style={{ borderRadius: "100px", padding: "12px", ...style }}
          onClick={onClick}
        >
          {icon}
        </ButtonOutlinedType>
      ) : (
        <ButtonOutlinedType
          style={{ ...style }}
          disabled={disabled}
          onClick={onClick}
        >
          {icon_left}
          {text}
          {icon_right}
        </ButtonOutlinedType>
      )}
    </>
  );
}
