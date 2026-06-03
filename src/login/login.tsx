import bgi from "../assets/icon_tangy/login.jpg";
import { FlexType } from "../styles/components/flex";
import {
  ButtonLogin,
  ButtonSec,
  Container,
  Img,
  Link,
  LoginImg,
} from "./login.styled";
import tangyMap from "../assets/icon_tangy/tangyMap-2.png";
import { TextField } from "@mui/material";
import { SpanType } from "../styles/components/span";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";

export function LoginPage() {
  return (
    <>
      <Img src={bgi} alt="" />
      <Container>
        <FlexType style={{ height: "100vh" }} $gap={"lg"}>
          <LoginImg src={tangyMap} alt="" />
          <FlexType style={{ width: "352px" }} $direction={"column"}>
            <form style={{ width: "100%" }}>
              <FlexType $direction={"column"} $gap={"md"} $align={"flex-start"}>
                <FlexType style={{ width: "100%" }}>
                  <LogoTangy />
                </FlexType>
                <SpanType>Email</SpanType>
                <TextField
                  sx={{ backgroundColor: "white" }}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <FlexType style={{ width: "100%" }} $justify={"space-between"}>
                  <SpanType>Password</SpanType>
                  <Link to={""} text={"Forgot password?"} />
                </FlexType>
                <TextField
                  sx={{ backgroundColor: "white" }}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <ButtonLogin text={"登入"}></ButtonLogin>
                <FlexType style={{ width: "100%" }}>
                  <hr style={{ width: "100%" }} />
                  <SpanType>or</SpanType>
                  <hr style={{ width: "100%" }} />
                </FlexType>
                <ButtonSec text={"Continue with Google "} />
                <ButtonSec text={"Continue with FaceBook "} />
                <ButtonSec text={"Continue with Instagram "} />
                <FlexType style={{ width: "100%" }}>
                  <Link to={""} text={"Create an account?"} />
                </FlexType>
              </FlexType>
            </form>
          </FlexType>
        </FlexType>
      </Container>
    </>
  );
}
