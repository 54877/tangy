import { type ReactNode } from "react";
import type { CSSProperties } from "styled-components";
import { ButtonOutlinedType, ButtonType } from "./Button.styled";

interface BtnType {
  readonly icon?: ReactNode;
  readonly text?: ReactNode;
  readonly className?: string;
  readonly icon_right?: ReactNode;
  readonly icon_left?: ReactNode;
  readonly onClick?: () => void;
  readonly textStyle?: CSSProperties;
  readonly disabled?: boolean;
  readonly style?: CSSProperties;
}

export function Button({
  icon,
  text,
  className,
  textStyle,
  icon_right,
  icon_left,
  disabled,
  onClick,
  style,
}: BtnType) {
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
        <ButtonType
          className={className}
          style={{ ...style }}
          disabled={disabled}
          onClick={onClick}
        >
          {icon_left}
          <span style={{ ...textStyle }}>{text}</span>
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
  className,
  onClick,
  style,
}: BtnType) {
  return (
    <>
      {icon ? (
        <ButtonOutlinedType
          disabled={disabled}
          className={className}
          style={{ borderRadius: "100px", padding: "12px", ...style }}
          onClick={onClick}
        >
          {icon}
        </ButtonOutlinedType>
      ) : (
        <ButtonOutlinedType
          style={{ ...style }}
          className={className}
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
