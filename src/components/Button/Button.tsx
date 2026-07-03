import { forwardRef, type ReactNode } from "react";
import type { CSSProperties } from "styled-components";
import { ButtonOutlinedType, ButtonType } from "./Button.styled";

interface BtnType {
  readonly icon?: ReactNode;
  readonly text?: ReactNode;
  readonly className?: string;
  readonly icon_right?: ReactNode;
  readonly icon_left?: ReactNode;
  readonly onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  readonly textStyle?: CSSProperties;
  readonly disabled?: boolean;
  readonly style?: CSSProperties;
}

export const Button = forwardRef<HTMLButtonElement, BtnType>(
  (
    {
      icon,
      text,
      className,
      textStyle,
      icon_right,
      icon_left,
      disabled,
      onClick,
      style,
    },
    ref,
  ) => {
    return icon ? (
      <ButtonType
        ref={ref}
        className={className}
        disabled={disabled}
        style={{ borderRadius: "100px", padding: "12px", ...style }}
        onClick={onClick}
      >
        {icon}
      </ButtonType>
    ) : (
      <ButtonType
        ref={ref}
        className={className}
        style={{ ...style }}
        disabled={disabled}
        onClick={onClick}
      >
        {icon_left}
        <span style={{ ...textStyle }}>{text}</span>
        {icon_right}
      </ButtonType>
    );
  },
);

Button.displayName = "Button";

export const ButtonOutlined = forwardRef<HTMLButtonElement, BtnType>(
  (
    { icon, text, icon_right, icon_left, disabled, className, onClick, style },
    ref,
  ) => {
    return icon ? (
      <ButtonOutlinedType
        ref={ref}
        disabled={disabled}
        className={className}
        style={{ borderRadius: "100px", padding: "12px", ...style }}
        onClick={onClick}
      >
        {icon}
      </ButtonOutlinedType>
    ) : (
      <ButtonOutlinedType
        ref={ref}
        style={{ ...style }}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {icon_left}
        {text}
        {icon_right}
      </ButtonOutlinedType>
    );
  },
);

ButtonOutlined.displayName = "ButtonOutlined";
