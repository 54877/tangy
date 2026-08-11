import { useMediaQuery } from "@mui/material";
import { DialogBase } from "../../../../components/dialog/dialogBase";
import { FromInput } from "../../../../components/Input/Input";
import { Flex } from "../../../../components/Input/Input.styled";
import { useDialog } from "../../../../context/dialog/useDialog";
import { Heading, SpanType } from "../../../../styles/components/span";
import { useActiveDialog } from "../../../../utils/dialogLayer";
import { ProfileButton } from "../edit/editDialog.styled";
import CloseIcon from "@mui/icons-material/Close";
import type { SVProps } from "../../../../types/profile";
import { SVInit } from "../../../../constants/profile";
import { useInformation } from "../../../../utils/information";
import { useState } from "react";
import type { FormError } from "../../../../types/errorType";
import { FA, FAClose, SvSendEmail } from "../../../../api/profile";
import { handleApiError } from "../../../../utils/apiError";

export const SVDialog = () => {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("SVDialog");
  const { information, handleOnChange } = useInformation<SVProps>(SVInit);
  const [err, setErr] = useState<FormError<SVProps>>({});
  const [state, setState] = useState<boolean>(false);
  const { type, title, user, setUser } = activeDialog!;
  const isSmall = useMediaQuery("(max-width:500px)");

  if (!user || !setUser) {
    return null;
  }

  //API 寄信
  const SvSendEmailApi = async () => {
    try {
      await SvSendEmail(information.email);
      setState(true);
    } catch (err) {
      handleApiError(err, setErr);
    }
  };

  //開啟2FA
  const faApi = async () => {
    try {
      await FA(information);
      setUser({
        ...user,
        svType: true,
      });

      closeDialog(activeLayer);
    } catch (err) {
      handleApiError(err, setErr);
    }
  };

  //關閉2FA
  const faCloseApi = async () => {
    try {
      await FAClose();
      setUser({
        ...user,
        svType: false,
      });
      closeDialog(activeLayer);
    } catch (err) {
      handleApiError(err, setErr);
    }
  };

  const contentOpen = (
    <>
      <Flex $direction={"column"}>
        <FromInput
          title={"電子郵件"}
          err={err}
          disabled={state}
          direction={isSmall ? "column" : "row"}
          fieldKey={"email"}
          information={information}
          onChange={handleOnChange}
        />

        {state && (
          <FromInput
            title={"驗證碼"}
            direction={isSmall ? "column" : "row"}
            fieldKey={"code"}
            information={information}
            onChange={handleOnChange}
          />
        )}
      </Flex>
      {!state && (
        <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
          <ProfileButton onClick={SvSendEmailApi} text={"發送二次驗證碼"} />
        </Flex>
      )}
      {state && (
        <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
          <ProfileButton onClick={faApi} text={"確認"} />
        </Flex>
      )}
    </>
  );

  const contentClose = (
    <>
      <Flex $direction={"column"}>
        <SpanType>目前已經開啟兩步驟驗證，是否要關閉兩步驟驗證</SpanType>
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
        <ProfileButton onClick={faCloseApi} text={"關閉兩步驟驗證"} />
      </Flex>
    </>
  );

  const content = (
    <Flex $direction={"column"}>
      <Flex style={{ paddingBottom: "24px" }} $justify={"space-between"}>
        <Heading>{title}</Heading>
        <CloseIcon onClick={() => closeDialog(activeLayer)} />
      </Flex>
      {user.svType ? contentClose : contentOpen}
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
