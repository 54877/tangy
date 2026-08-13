import { DialogBase } from "../../../../components/dialog/dialogBase";
import { FromInput } from "../../../../components/Input/Input";
import { Flex } from "../../../../components/Input/Input.styled";
import { ProfileButton } from "../edit/editDialog.styled";
import CloseIcon from "@mui/icons-material/Close";
import { useDialog } from "../../../../context/dialog/useDialog";
import { useActiveDialog } from "../../../../utils/dialogLayer";
import { useInformation } from "../../../../utils/information";
import { useMediaQuery } from "@mui/material";
import type { UpdatePasswordProps } from "../../../../types/profile";
import { updatePasswordInit } from "../../../../constants/profile";
import { Heading, SpanType } from "../../../../styles/components/span";
import { updatePassword } from "../../../../api/profile";
import { handleApiError } from "../../../../utils/apiError";
import { useState } from "react";
import type { FormError } from "../../../../types/errorType";
import { logout } from "../../../../api/auth";
import { useAuth } from "../../../../context/auth/useAuth";
import { useNavigate } from "react-router-dom";
import { useUserInit } from "../../../../constants/user";
import { useLoading } from "../../../../context/loading/useLoading";
import { useLoadingState } from "../../../../utils/loading/loading.state";
import { LoadingUi } from "../../../../components/loading/loading";
import { formValidate } from "../../../../utils/formValidate";

export const UpdatePasswordDialog = () => {
  const { closeDialog } = useDialog();
  const [err, setErr] = useState<FormError<UpdatePasswordProps>>({});
  const { activeDialog, activeLayer } = useActiveDialog("UpdatePasswordDialog");
  const { information, handleOnChange } =
    useInformation<UpdatePasswordProps>(updatePasswordInit);
  const { type, title } = activeDialog || {};
  const { setUser, clearAuthToken } = useAuth();
  const isSmall = useMediaQuery("(max-width:500px)");
  const navigate = useNavigate();
  const { loading } = useLoading();

  //TODO 更新密碼後 登入裝置問題
  //更新密碼API
  const updatePasswordApi = async () => {
    loading(3).start();
    try {
      await updatePassword(information);
      closeDialog(activeLayer);
    } catch (err) {
      handleApiError(err, setErr);
    } finally {
      loading(3).stop();
    }
  };

  //表單驗證
  const handleOnclick = () => {
    if (
      information.newPassword === information.oldPassword &&
      information.newPassword !== ""
    ) {
      setErr({
        newPassword: "新舊密碼不可相同",
      });
      return;
    }

    formValidate<UpdatePasswordProps>({
      information,
      fields: ["oldPassword", "newPassword"],
      setErr,
      fn: updatePasswordApi,
    });
  };

  //忘記密碼
  const onclick = async () => {
    loading(2).start();
    try {
      //登出
      await logout();
      closeDialog(activeLayer);
      clearAuthToken();
      setUser(useUserInit);
      navigate("/login/forgot");
    } catch (err) {
      console.log(err);
    } finally {
      loading(2).stop();
    }
  };

  const content = (
    <Flex $direction={"column"}>
      <Flex style={{ paddingBottom: "24px" }} $justify={"space-between"}>
        <Heading>{title}</Heading>
        <CloseIcon onClick={() => closeDialog(activeLayer)} />
      </Flex>
      <Flex $direction={"column"}>
        <FromInput
          err={err}
          title={"舊密碼"}
          type={"password"}
          direction={isSmall ? "column" : "row"}
          fieldKey={"oldPassword"}
          information={information}
          onChange={handleOnChange}
        />

        <Flex $direction={"column"} $align={"flex-end"}>
          <FromInput
            err={err}
            title={"新密碼"}
            type={"password"}
            direction={isSmall ? "column" : "row"}
            fieldKey={"newPassword"}
            information={information}
            onChange={handleOnChange}
          />
          <SpanType as={"button"} onClick={onclick}>
            {useLoadingState(2) ? <LoadingUi type={"button"} /> : "忘記密碼"}
          </SpanType>
        </Flex>
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "16px" }}>
        <ProfileButton
          disabled={useLoadingState(3)}
          onClick={handleOnclick}
          text={useLoadingState(3) ? <LoadingUi type={"button"} /> : "確認"}
        />
      </Flex>
    </Flex>
  );

  return (
    <DialogBase
      type={type ?? null}
      context={content}
      width={isSmall ? "90%" : "500px"}
    />
  );
};
