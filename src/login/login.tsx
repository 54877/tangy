import { FlexType } from "../styles/components/flex";
import { Federated } from "../components/FederatedLogin/FederatedLogin";
import { FromInput } from "../components/Input/Input";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { userInit } from "../constants/user";
import { useInformation } from "../utils/information";
import { handleSubmit } from "../utils/formDefault";

export interface UserProps {
  email: string;
  password: string;
  userName: string;
}

export function LoginPage() {
  const { information, handleOnChange } = useInformation<UserProps>(userInit);

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"md"} $align={"flex-start"}>
          <FromInput
            information={information}
            fieldKey={"email"}
            onChange={handleOnChange}
            title={"Email"}
          />
          <FromInput
            information={information}
            fieldKey={"password"}
            onChange={handleOnChange}
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
