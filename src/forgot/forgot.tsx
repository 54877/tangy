import { FromInput } from "../components/Input/Input";
import { FlexType } from "../styles/components/flex";
import { ButtonForgot, Link } from "./forgot.styled";

export function ForgotPassword() {
  return (
    <>
      <form style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"lg"} $align={"flex-start"}>
          <FromInput title={"Email"} required={true} />
          <ButtonForgot text={"發送密碼重置郵件"}></ButtonForgot>
        </FlexType>
      </form>
      <FlexType style={{ width: "100%" }}>
        <Link to={"/login"} text={"Back to Sign in →"} />
      </FlexType>
    </>
  );
}
