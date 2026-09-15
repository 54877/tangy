import styled from "styled-components";
import { media } from "../styles/helper/media";

export const Page = styled.main`
  min-height: 100vh;
  padding: 32px 16px 64px;
  background: ${({ theme }) => theme.colors.gray[50]};

  ${media.lg} {
    padding: 48px 0 96px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const Intro = styled.div`
  margin-bottom: 24px;

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const Section = styled.section`
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 16px;
  background: ${({ theme }) => theme.semanticColors.text.white};
  box-shadow: 0 4px 14px rgb(35 37 41 / 4%);

  ${media.sm} {
    padding: 32px;
  }
`;

export const SectionHead = styled.div`
  margin-bottom: 24px;

  h2 {
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.gray[950]};
    font-size: 20px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 14px;
  }
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Field = styled.label<{ $full?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: ${({ $full }) => ($full ? "1 / -1" : "auto")};
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 14px;
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.danger[600]};
  }

  small {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 12px;
    font-weight: 400;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.gray[950]};
    background: white;
    font-size: 16px;
    transition: border-color 0.2s, box-shadow 0.2s;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary[600]};
      box-shadow: 0 0 0 4px rgb(10 162 192 / 15%);
    }
  }
`;

export const Preview = styled.div`
  overflow: hidden;
  margin-top: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray[100]};

  img {
    display: block;
    width: 100%;
    max-height: 280px;
    object-fit: cover;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 4px;

  ${media.sm} {
    flex-direction: row;
  }
`;

export const SecondaryButton = styled.button`
  padding: 12px 24px;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray[950]};
  background: white;
  font-size: 16px;
  font-weight: 600;
`;
