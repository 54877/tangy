import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const NavLinkType = styled(NavLink)`
  ${({ theme }) => theme.typography.paragraph.sm}
  display: flex;
  align-items: center;
  opacity: 1;
  border-radius: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  justify-content: center;
  cursor: pointer;
  gap: ${({ theme }) => theme.spaces.sm};
  color: ${({ theme }) => theme.colors.primary[600]};

  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    border: 2px solid #0aa2c0;
    box-shadow: 0px 7px 29px 0px #64646f33;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
