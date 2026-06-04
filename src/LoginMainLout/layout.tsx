import { Container, Img, LoginImg } from "./layout.styled";
import bgi from "../assets/icon_tangy/login.jpg";
import { FlexType } from "../styles/components/flex";
import tangyMap from "../assets/icon_tangy/tangyMap-2.png";
import { Outlet } from "react-router-dom";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";

export function LoginLayout() {
  return (
    <>
      <Img src={bgi} alt="" />
      <Container>
        <FlexType style={{ height: "100vh" }} $gap={"lg"}>
          <LoginImg src={tangyMap} alt="" />
          <FlexType style={{ width: "352px" }} $direction={"column"}>
            <FlexType style={{ width: "100%" }}>
              <LogoTangy />
            </FlexType>
            <Outlet />
          </FlexType>
        </FlexType>
      </Container>
    </>
  );
}
