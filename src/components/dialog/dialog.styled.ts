import styled from "styled-components";
import { FlexType } from "../../styles/components/flex";

export const Container = styled(FlexType)`
  border-radius: 10px;
  max-height: 90%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  padding: 16px;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  padding: 16px;
`;
