import { FromInput } from "../components/Input/Input";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { FlexType } from "../styles/components/flex";

export function ForgotPassword() {
  return (
    <>
      <form style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"lg"} $align={"flex-start"}>
          <FromInput title={"Email"} required={true} />
          <ButtonAuth text={"發送密碼重置郵件"}></ButtonAuth>
        </FlexType>
      </form>
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"/login"} text={"Back to Sign in →"} />
      </FlexType>
    </>
  );
}
