import { FlexType } from "../styles/components/flex";
import { ButtonLogin, Link } from "./login.styled";
import { Federated } from "../components/FederatedLogin/FederatedLogin";
import { FromInput } from "../components/Input/Input";

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
          <ButtonLogin text={"登入"}></ButtonLogin>
        </FlexType>
      </form>
      <Federated />
      <FlexType style={{ width: "100%" }}>
        <Link to={"register"} text={"Create an account?"} />
      </FlexType>
    </>
  );
}
