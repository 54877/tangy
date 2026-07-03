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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";
import type { FormError } from "../types/errorType";
import { SpanType } from "../styles/components/span";

export function LoginPage() {
  const { information, handleOnChange } = useInformation<UserProps>(userInit);
  const [err, setErr] = useState<FormError<UserProps>>({});
  const navigate = useNavigate();
  const { setAuthToken } = useAuth();

  //登入API
  const loginApi = async () => {
    try {
      const res = await login(information);
      console.log(res);
      const token = res.data.accessToken;
      if (!token) {
        return;
      }
      setAuthToken(token);
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
          {err.message && (
            <>
              <SpanType $color={"danger"} $size={"xs"} $shade={600}>
                {err.message}
              </SpanType>
            </>
          )}
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
