import styled from "styled-components";
import { breakpoints } from "../styles/tokens/breakpoints";

export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;
  column-gap: ${({ theme }) => theme.spaces.lg};
  row-gap: ${({ theme }) => theme.spaces.spc};

  @media (min-width: ${breakpoints.xsLg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
