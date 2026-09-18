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

export const CropArea = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-top: 16px;
  touch-action: none;
  cursor: grab;
  background: #171717;

  &:active {
    cursor: grabbing;
  }
`;

export const CropImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: none;
  user-select: none;
  pointer-events: none;
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;
