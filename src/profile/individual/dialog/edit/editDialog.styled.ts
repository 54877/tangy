import styled from "styled-components";
import { ButtonOutlined } from "../../../../components/Button/Button";

export const ProfileButton = styled(ButtonOutlined)`
  color: ${({ theme }) => theme.colors.primary[950]};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[50]};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary[950]};
  }
`;
