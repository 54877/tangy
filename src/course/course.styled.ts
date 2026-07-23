import styled from "styled-components";
import { media } from "../styles/helper/media";

export const HotBox = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  padding: 8px 16px;
  ${media.lg} {
    padding: 32px 0;
  }
`;
