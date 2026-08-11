import { SpanType } from "../../styles/components/span";
import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const wave = keyframes`
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }

  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;

  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;

  animation: ${spin} 0.7s linear infinite;
`;

export const LoadingText = styled(SpanType)`
  display: inline-flex;
  align-items: center;
`;

export const LoadingDot = styled.span<{ $delay: number }>`
  display: inline-block;

  animation: ${wave} 1.8s ease-in-out infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`;
