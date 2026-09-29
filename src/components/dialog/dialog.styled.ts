import styled from "styled-components";
import { FlexType } from "../../styles/components/flex";
import { Heading } from "../../styles/components/span";

export const Container = styled(FlexType)`
  border-radius: 10px;
  background-color: #fff;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 16px;
  box-sizing: border-box;

  max-height: 70vh;
  max-width: calc(100vw - 24px);
  min-width: 0;
  overflow: hidden;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  background: #fff;
  padding-bottom: 24px;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 4px;
    background: transparent;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

export const Title = styled(Heading)`
  min-width: 0;
  margin: 0;
  overflow-wrap: anywhere;
`;
