import { useState } from "react";
import { FromInput } from "../components/Input/Input";
import { ButtonAuth, LinkAuth } from "../MainLayout/MainLayout.styled";
import { FlexType } from "../styles/components/flex";
import { SpanType } from "../styles/components/span";
import { userForgotPasswordInit } from "../constants/user";
import { useInformation } from "../utils/information";
import { handleSubmit } from "../utils/formDefault";

export interface ForgotProps {
  email: string;
  code: string;
  newPassword: string;
}

export function ForgotPassword() {
  const [verify, setVerify] = useState<boolean>(false);
  const [password, setPassword] = useState<boolean>(false);

  const { information, handleOnChange } = useInformation<ForgotProps>(
    userForgotPasswordInit,
  );
  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FlexType $direction={"column"} $gap={"lg"} $align={"flex-start"}>
          <FromInput
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
                information={information}
                onChange={handleOnChange}
                fieldKey={"code"}
                disabled={password}
                title={"Verification code"}
                required={true}
              />
              {!password && (
                <FlexType $direction={"column"} $align={"flex-start"}>
                  <SpanType>此代碼將於 15 分鐘後失⁠效。</SpanType>
                  <FlexType>
                    <SpanType>沒收到代碼通知？</SpanType>
                    <button
                      style={{ flex: "1" }}
                      onClick={() => {
                        setVerify((pre) => !pre);
                      }}
                    >
                      <SpanType style={{ textDecoration: "underline" }}>
                        請點此重新傳⁠送。
                      </SpanType>
                    </button>
                  </FlexType>
                </FlexType>
              )}
            </>
          )}
          {password && (
            <FromInput
              information={information}
              onChange={handleOnChange}
              fieldKey={"newPassword"}
              title={"New Password"}
              required={true}
              content={"密碼長度需8~15個字符，其中包含數字和大小寫字母。"}
            />
          )}
          {verify ? (
            <ButtonAuth
              onClick={() => {
                setPassword((pre) => !pre);
              }}
              text={password ? "更新密碼" : "確認驗證碼"}
            />
          ) : (
            <ButtonAuth
              onClick={() => {
                setVerify((pre) => !pre);
              }}
              text={"發送密碼重置郵件"}
            />
          )}
        </FlexType>
      </form>
      <FlexType style={{ width: "100%" }}>
        <LinkAuth to={"/login"} text={"Back to Sign in →"} />
      </FlexType>
    </>
  );
}
