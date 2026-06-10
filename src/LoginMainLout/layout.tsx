import { Container, Img, LoginContainer } from "./layout.styled";
import bgi from "../assets/icon_tangy/loginBgi.png";
import bgiSm from "../assets/icon_tangy/loginBgiSm.png";
import { FlexType } from "../styles/components/flex";
import { Outlet } from "react-router-dom";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";

export function LoginLayout() {
  return (
    <>
      <picture>
        <source media="(max-width: 600px)" srcSet={bgiSm} />
        <Img src={bgi} alt="" />
      </picture>
      <Container>
        <FlexType
          style={{ width: "100%", height: "100vh" }}
          $justify={"flex-end"}
          $gap={"lg"}
        >
          <LoginContainer $justify={"center"} $align={"center"}>
            <FlexType style={{ width: "352px" }} $direction={"column"}>
              <FlexType style={{ width: "100%" }}>
                <LogoTangy />
              </FlexType>
              <Outlet />
            </FlexType>
          </LoginContainer>
        </FlexType>
      </Container>
    </>
  );
}
