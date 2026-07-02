import { ListItem } from "@mui/material";
import styled from "styled-components";
import { ButtonOutlined } from "../Button/Button";

export const UserLi = styled(ListItem)`
  && {
    padding: 0;
    width: 100%;
    display: flex;
    gap: 8px;
  }
`;

export const ListButton = styled(ButtonOutlined)`
  width: 100%;
  padding: 12px 0;
  border: 0;
  background-color: white;
  &:focus {
    border: 0;
  }
`;
