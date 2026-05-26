import { Outlet } from "react-router-dom";
import { ContainerLayout, FooterContainer } from "./MainLayout.styled";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";

export function MainLayout() {
  return (
    <>
      <h1>我是MainLayout</h1>
      <Outlet />
      <FooterContainer>
        <ContainerLayout>
          <LogoTangy />
        </ContainerLayout>
      </FooterContainer>
    </>
  );
}
