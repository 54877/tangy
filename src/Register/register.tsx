import { Federated } from "../components/FederatedLogin/FederatedLogin";
import { FromInput } from "../components/Input/Input";
import { userInit } from "../constants/user";
import { type UserProps } from "../login/login";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { FlexType } from "../styles/components/flex";
import { handleSubmit } from "../utils/formDefault";
import { useInformation } from "../utils/information";
import { registerApi } from "./registerApi";

export function Register() {
  const { information, handleOnChange } = useInformation<UserProps>(userInit);

  return (
    <>
      <Federated location={"down"} />
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"lg"} $align={"flex-start"}>
          <FromInput
            fieldKey={"email"}
            information={information}
            onChange={handleOnChange}
            title={"Email"}
            required={true}
          />
          <FromInput
            fieldKey={"password"}
            information={information}
            onChange={handleOnChange}
            title={"Password"}
            required={true}
            content={"密碼長度需8~15個字符，其中包含數字和大小寫字母。"}
          />
          <FromInput
            fieldKey={"userName"}
            information={information}
            onChange={handleOnChange}
            title={"Username"}
            required={true}
          />
          <ButtonAuth
            onClick={() => registerApi(information)}
            text={"註冊"}
          ></ButtonAuth>
        </FlexType>
      </form>
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"/login"} text={"Already have an account? Sign in →"} />
      </FlexType>
    </>
  );
}
