import styled from "styled-components";
import { media } from "../../styles/helper/media";

export const Container = styled.div`
  width: 100%;
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
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

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
