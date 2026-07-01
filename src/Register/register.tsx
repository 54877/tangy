import { register } from "../api/auth";
import { Federated } from "../components/FederatedLogin/FederatedLogin";
import { FromInput } from "../components/Input/Input";
import { userInit } from "../constants/user";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { FlexType } from "../styles/components/flex";
import { handleSubmit } from "../utils/formDefault";
import { useInformation } from "../utils/information";
import { useState } from "react";
import type { UserProps } from "../types/authType";
import type { UserErrorProps } from "../types/errorType";
import { handleApiError } from "../utils/apiError";
import { formValidate } from "../utils/formValidate";

export function Register() {
  const { information, setInformation, handleOnChange } =
    useInformation<UserProps>(userInit);
  const [err, setErr] = useState<UserErrorProps>({});

  //註冊API
  const registerApi = async () => {
    try {
      await register(information);
      setInformation(userInit);
    } catch (err) {
      handleApiError(err, setErr);
    }
  };

  //表單驗證
  const handleOnclick = () => {
    formValidate<UserErrorProps>({
      information,
      fields: ["email", "password", "userName"],
      setErr,
      fn: registerApi,
    });
  };

  return (
    <>
      <Federated location={"down"} />
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"lg"} $align={"flex-start"}>
          <FromInput
            err={err}
            fieldKey={"email"}
            information={information}
            onChange={handleOnChange}
            title={"Email"}
            required={true}
          />
          <FromInput
            err={err}
            fieldKey={"password"}
            information={information}
            onChange={handleOnChange}
            type={"password"}
            title={"Password"}
            required={true}
            content={"密碼長度需8~40個字符，其中包含數字和大小寫字母。"}
          />
          <FromInput
            err={err}
            fieldKey={"userName"}
            information={information}
            onChange={handleOnChange}
            title={"Username"}
            required={true}
          />
          <ButtonAuth onClick={handleOnclick} text={"註冊"}></ButtonAuth>
        </FlexType>
      </form>
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"/login"} text={"Already have an account? Sign in →"} />
      </FlexType>
    </>
  );
}
