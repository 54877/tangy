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
import { login, loginSV } from "../api/auth";
import { formValidate } from "../utils/formValidate";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";
import type { FormError } from "../types/errorType";
import { SpanType } from "../styles/components/span";
import { useLoading } from "../context/loading/useLoading";
import { LoadingUi } from "../components/loading/loading";

export function LoginPage() {
  const { information, handleOnChange } = useInformation<UserProps>(userInit);
  const [err, setErr] = useState<FormError<UserProps>>({});
  const [state, setState] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setAuthToken, setUser } = useAuth();
  const { loading, setLoading } = useLoading();

  //登入API
  const loginApi = async () => {
    setLoading(true);
    try {
      let res;
      if (state) {
        res = await loginSV(information);
      } else {
        res = await login(information);
      }

      if (res.data.svType) {
        setState(true);
        return;
      }
      setUser(res.data.userDate);
      const token = res.data.accessToken;
      if (!token) {
        return;
      }
      setAuthToken(token);
      navigate("/");
    } catch (err) {
      handleApiError(err, setErr);
    } finally {
      setLoading(false);
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
          {!state && (
            <>
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
            </>
          )}
          {state && (
            <FromInput
              err={err}
              information={information}
              fieldKey={"code"}
              onChange={handleOnChange}
              title={"驗證碼"}
            />
          )}
          {err.message && (
            <SpanType $color={"danger"} $size={"xs"} $shade={600}>
              {err.message}
            </SpanType>
          )}
          <ButtonAuth
            onClick={handleOnclick}
            text={loading ? <LoadingUi type={"button"} /> : "登入"}
          />
        </FlexType>
      </form>
      <Federated />
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"register"} text={"Create an account?"} />
      </FlexType>
    </>
  );
}
