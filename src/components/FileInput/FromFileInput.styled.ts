import styled from "styled-components";

export const Preview = styled.div`
  overflow: hidden;
  margin-top: 20px;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gray[100]};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    background: ${({ theme }) => theme.colors.gray[950]};
  }
`;
