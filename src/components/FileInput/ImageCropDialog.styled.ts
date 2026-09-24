import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.64);
`;

export const Dialog = styled.div`
  width: min(720px, 100%);
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
`;

export const CropStage = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: min(56vh, 520px);
  margin-top: 16px;
  overflow: hidden;
  background: #171717;
`;

export const Selection = styled.div<{ $radius: number | string }>`
  position: absolute;
  border: 2px solid #fff;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.58);
  touch-action: none;
  cursor: move;
  border-radius: ${({ $radius }) =>
    typeof $radius === "number" ? `${$radius}px` : $radius};
`;

export const ResizeHandle = styled.div`
  position: absolute;
  right: -7px;
  bottom: -7px;
  width: 16px;
  height: 16px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: #1976d2;
  cursor: nwse-resize;
`;

export const CropImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: none;
  user-select: none;
  pointer-events: none;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

export const RotationControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
