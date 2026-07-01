import { FlexType } from "../styles/components/flex";
import { Federated } from "../components/FederatedLogin/FederatedLogin";
import { FromInput } from "../components/Input/Input";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { userInit } from "../constants/user";
import { useInformation } from "../utils/information";
import { handleSubmit } from "../utils/formDefault";
import type { UserProps } from "../types/authType";
import { handleApiError } from "../utils/apiError";
import { useState } from "react";
import { login } from "../api/auth";
import { formValidate } from "../utils/formValidate";
import { TOKEN_KEY } from "../api/utils/token";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const { information, handleOnChange } = useInformation<UserProps>(userInit);
  const [err, setErr] = useState<Partial<UserProps>>({});
  const navigate = useNavigate();
  //登入API
  const loginApi = async () => {
    try {
      const res = await login(information);
      const token = res.data.accessToken;
      if (!token) {
        return;
      }
      sessionStorage.setItem(TOKEN_KEY, token);
      navigate("/");
    } catch (err) {
      handleApiError(err, setErr);
    }
  };

  //表單驗證
  const handleOnclick = () => {
    formValidate<UserProps>({
      information,
      fields: ["email", "password"],
      setErr,
      fn: loginApi,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"md"} $align={"flex-start"}>
          <FromInput
            err={err}
            information={information}
            fieldKey={"email"}
            onChange={handleOnChange}
            title={"Email"}
          />
          <FromInput
            err={err}
            type={"password"}
            information={information}
            fieldKey={"password"}
            onChange={handleOnChange}
            title={"Password"}
            to={"forgot"}
            titleSec={"Forgot password?"}
          />
          <ButtonAuth onClick={handleOnclick} text={"登入"} />
        </FlexType>
      </form>
      <Federated />
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"register"} text={"Create an account?"} />
      </FlexType>
    </>
  );
}
