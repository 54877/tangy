import styled from "styled-components";
import { Flex } from "../../components/Input/Input.styled";
import { ButtonOutlined } from "../../components/Button/Button";
import { SpanType } from "../../styles/components/span";

export const Container = styled(Flex)`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

export const TitleButton = styled(ButtonOutlined)`
  padding: 0;
  border: 0;
  flex: 1;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary[600]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }

  &:focus {
    border: 0;
    color: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export const Content = styled(SpanType)`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
