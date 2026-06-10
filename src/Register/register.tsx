import { Federated } from "../components/FederatedLogin/FederatedLogin";
import { FromInput } from "../components/Input/Input";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { FlexType } from "../styles/components/flex";

export function Register() {
  return (
    <>
      <Federated location={"down"} />
      <form style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"lg"} $align={"flex-start"}>
          <FromInput title={"Email"} required={true} />
          <FromInput
            title={"Password"}
            required={true}
            content={"密碼長度需8~15個字符，其中包含數字和大小寫字母。"}
          />
          <FromInput title={"Username"} required={true} />
          <ButtonAuth text={"註冊"}></ButtonAuth>
        </FlexType>
      </form>
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"/login"} text={"Already have an account? Sign in →"} />
      </FlexType>
    </>
  );
}
