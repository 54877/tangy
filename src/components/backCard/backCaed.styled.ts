import styled from "styled-components";

export const CardContainer = styled.button`
  max-width: 30%;
  width: 100%;
  box-shadow: 0px 7px 29px 0px #64646f33;
  padding: 24px 0;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: left;

  display: flex;
  align-items: flex-start;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    box-shadow: 0px 12px 32px 0px #64646f40;
    transform: translateY(-8px);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0px 4px 12px 0px #64646f30;
  }
`;
