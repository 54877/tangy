import styled from "styled-components";
import { textStyles } from "./global.styled";

export const ButtonType = styled.button`
  ${textStyles.labelMd};
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.primary[600]};

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[700]};
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px #0aa2c03d;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const ButtonOutlinedType = styled.button`
  ${textStyles.labelMd};
  display: flex;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray[950]};
  background-color: ${({ theme }) => theme.colors.text.white};
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.gray[950]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
