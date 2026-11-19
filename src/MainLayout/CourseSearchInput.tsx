import styled from "styled-components";

type CourseSearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  variant: "nav" | "dialog";
};

const Input = styled.input<{ $variant: CourseSearchInputProps["variant"] }>`
  box-sizing: border-box;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  ${({ theme }) => theme.typography.paragraph.md};
  color: ${({ theme }) => theme.colors.gray[700]};

  ${({ $variant }) =>
    $variant === "nav"
      ? `
        display: none;
        @media (min-width: 869px) {
          display: block;
          width: 100%;
          height: 40px;
          flex: 1;
          padding: 0 12px 0 44px;
          border-radius: 1000px;
        }
      `
      : `
        display: block;
        width: 100%;
        height: 48px;
        padding: 0 16px;
        border-radius: 8px;
      `}
`;

export function CourseSearchInput({
  value,
  onChange,
  variant,
}: CourseSearchInputProps) {
  return (
    <Input
      $variant={variant}
      type="search"
      value={value}
      placeholder="搜尋課程"
      aria-label="搜尋課程"
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
