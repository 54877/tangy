import { FlexType } from "../styles/components/flex";
import { Federated } from "../components/FederatedLogin/FederatedLogin";
import { FromInput } from "../components/Input/Input";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";

export function LoginPage() {
  return (
    <>
      <form style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"md"} $align={"flex-start"}>
          <FromInput title={"Email"} />
          <FromInput
            title={"Password"}
            to={"forgot"}
            titleSec={"Forgot password?"}
          />
          <ButtonAuth text={"登入"}></ButtonAuth>
        </FlexType>
      </form>
      <Federated />
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"register"} text={"Create an account?"} />
      </FlexType>
    </>
  );
}
