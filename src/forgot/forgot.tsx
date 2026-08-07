import { useState } from "react";
import { FromInput } from "../components/Input/Input";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { FlexType } from "../styles/components/flex";
import { SpanType } from "../styles/components/span";
import { userForgotPasswordInit } from "../constants/user";
import { useInformation } from "../utils/information";
import { handleSubmit } from "../utils/formDefault";
import type { ForgotProps } from "../types/authType";
import { forgotPassword, resetPassword } from "../api/auth";
import { handleApiError } from "../utils/apiError";
import { formValidate } from "../utils/formValidate";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleAxiosError } from "../api/utils/handleError";

export function ForgotPassword() {
  const [err, setErr] = useState<Partial<ForgotProps>>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step");
  const email = searchParams.get("email") ?? "";
  const verify = step === "verify";
  const { information, setInformation, handleOnChange } =
    useInformation<ForgotProps>({
      ...userForgotPasswordInit,
      email,
    });
  const navigate = useNavigate();

  //API 寄信
  const forgotPasswordApi = async () => {
    try {
      await forgotPassword(information.email);
      setSearchParams({ step: "verify", email: information.email });
    } catch (err) {
      handleApiError(err, setErr);
    }
  };

  //API 更新密碼
  const resetPasswordApi = async () => {
    try {
      await resetPassword(information);
      setInformation(userForgotPasswordInit);
      navigate("/login");
    } catch (err) {
      const { status } = handleAxiosError(err);
      if (status === 429) {
        setInformation({ ...userForgotPasswordInit, email: information.email });
        setSearchParams({});
        return;
      }
      handleApiError(err, setErr);
    }
  };

  //表單驗證-寄信
  const handleOnclick = () => {
    formValidate<ForgotProps>({
      information,
      fields: ["email"],
      setErr,
      fn: forgotPasswordApi,
    });
  };

  //表單驗證-更新密碼
  const handleResetPasswordOnclick = () => {
    formValidate<ForgotProps>({
      information,
      fields: ["email", "newPassword", "code"],
      setErr,
      fn: resetPasswordApi,
    });
  };

  //驗證碼備註UI
  const verifyContent = () => {
    return (
      <FlexType $direction={"column"} $align={"flex-start"}>
        <SpanType $size={"xs"} $shade={900}>
          此代碼將於 15 分鐘後失⁠效。
        </SpanType>
        <FlexType>
          <SpanType $size={"xs"} $shade={900}>
            沒收到代碼通知？
          </SpanType>
          <button type="button" style={{ flex: "1" }} onClick={handleOnclick}>
            <SpanType
              $size={"xs"}
              $shade={900}
              style={{ textDecoration: "underline" }}
            >
              請點此重新傳⁠送。
            </SpanType>
          </button>
        </FlexType>
      </FlexType>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"lg"} $align={"flex-start"}>
          <FromInput
            err={err}
            information={information}
            onChange={handleOnChange}
            fieldKey={"email"}
            disabled={verify}
            title={"Email"}
            required={true}
          />
          {verify && (
            <>
              <FromInput
                err={err}
                information={information}
                onChange={handleOnChange}
                fieldKey={"newPassword"}
                title={"New Password"}
                required={true}
                content={"密碼長度需8~15個字符，其中包含數字和大小寫字母。"}
              />
              <FromInput
                err={err}
                information={information}
                onChange={handleOnChange}
                fieldKey={"code"}
                title={"Verification code"}
                required={true}
                content={verifyContent()}
              />
            </>
          )}
          {verify ? (
            <ButtonAuth
              onClick={handleResetPasswordOnclick}
              text={"更新密碼"}
            />
          ) : (
            <ButtonAuth onClick={handleOnclick} text={"發送密碼重置郵件"} />
          )}
        </FlexType>
      </form>
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"/login"} text={"Back to Sign in →"} />
      </FlexType>
    </>
  );
}
