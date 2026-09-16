import styled from "styled-components";

export const EditorContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
  background: ${({ theme }) => theme.colors.gray[50]};

  button,
  select,
  input {
    height: 32px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.gray[800]};
    background: white;
  }

  button {
    min-width: 32px;
    padding: 0 8px;
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[700]};
      background: ${({ theme }) => theme.colors.primary[50]};
    }
  }

  select {
    padding: 0 8px;
  }

  input[type="color"] {
    width: 42px;
    padding: 3px;
  }

`;

export const Editor = styled.div<{ $isError?: boolean; $minHeight: number }>`
  min-height: ${({ $minHeight }) => `${$minHeight}px`};
  padding: 12px;
  border: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.danger[600] : theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[950]};
  background: white;
  line-height: 1.6;
  overflow-wrap: anywhere;
  word-break: break-word;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[600]};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:empty::before {
    content: attr(data-placeholder);
    color: ${({ theme }) => theme.colors.gray[400]};
    pointer-events: none;
  }

  h2,
  h3,
  p {
    margin: 0 0 8px;
  }

  ul,
  ol {
    margin: 0 0 8px 24px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 12px 0;
  }

  * {
    overflow-wrap: anywhere;
    word-break: break-word;
  }
`;

export const HelperText = styled.p`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.danger[600]};
  font-size: 12px;
`;

export const ResizeHandle = styled.button`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 2px solid ${({ theme }) => theme.colors.primary[600]};
  border-radius: 2px;
  background: white;
  cursor: nwse-resize;
`;
