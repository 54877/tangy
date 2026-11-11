import styled from "styled-components";

export const Preview = styled.div`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 20px;
  height: 220px;
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
