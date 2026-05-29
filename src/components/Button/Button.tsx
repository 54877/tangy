import { type ReactNode } from "react";
import type { CSSProperties } from "styled-components";
import { ButtonOutlinedType, ButtonType } from "./Button.styled";

interface btnType {
  icon?: ReactNode;
  text?: string;
  className?: string;
  icon_right?: ReactNode;
  icon_left?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}

export function Button({
  icon,
  text,
  className,
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
          className={className}
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
