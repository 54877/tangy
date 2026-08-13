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
import { useLoadingState } from "../../../../utils/loading/loading.state";
import { useLoading } from "../../../../context/loading/useLoading";
import { LoadingUi } from "../../../../components/loading/loading";
import { formValidate } from "../../../../utils/formValidate";

export const SVDialog = () => {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("SVDialog");
  const { information, handleOnChange } = useInformation<SVProps>(SVInit);
  const [err, setErr] = useState<FormError<SVProps>>({});
  const [state, setState] = useState<boolean>(false);
  const { type, title, user, setUser } = activeDialog!;
  const isSmall = useMediaQuery("(max-width:500px)");
  const { loading } = useLoading();
  const sendLoading = useLoadingState(2);
  const faLoading = useLoadingState(3);
  if (!user || !setUser) {
    return null;
  }

  //API 寄信
  const SvSendEmailApi = async () => {
    loading(2).start();
    try {
      await SvSendEmail(information.email);
      setState(true);
    } catch (err) {
      handleApiError(err, setErr);
    } finally {
      loading(2).stop();
    }
  };

  //表單驗證
  const sendHandleOnclick = () => {
    formValidate<SVProps>({
      information,
      fields: ["email"],
      setErr,
      fn: SvSendEmailApi,
    });
  };

  //開啟2FA
  const faApi = async () => {
    loading(3).start();
    try {
      await FA(information);
      setUser({
        ...user,
        svType: true,
      });

      closeDialog(activeLayer);
    } catch (err) {
      handleApiError(err, setErr);
    } finally {
      loading(3).stop();
    }
  };

  //表單驗證
  const openFAHandleOnclick = () => {
    formValidate<SVProps>({
      information,
      fields: ["email", "code"],
      setErr,
      fn: faApi,
    });
  };

  //關閉2FA
  const faCloseApi = async () => {
    loading(3).start();
    try {
      await FAClose();
      setUser({
        ...user,
        svType: false,
      });
      closeDialog(activeLayer);
    } catch (err) {
      handleApiError(err, setErr);
    } finally {
      loading(3).stop();
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
          <Flex $direction={"column"} $align={"flex-end"}>
            <FromInput
              err={err}
              title={"驗證碼"}
              direction={isSmall ? "column" : "row"}
              fieldKey={"code"}
              information={information}
              onChange={handleOnChange}
            />
            <button
              onClick={sendHandleOnclick}
              disabled={sendLoading}
              type="button"
              style={{ flex: "1" }}
            >
              <SpanType
                $size={"xs"}
                $shade={900}
                style={{ textDecoration: "underline" }}
              >
                {sendLoading ? (
                  <LoadingUi type={"spinner"} />
                ) : (
                  "請點此重新傳⁠送。"
                )}
              </SpanType>
            </button>
          </Flex>
        )}
      </Flex>
      {!state && (
        <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
          <ProfileButton
            disabled={sendLoading}
            onClick={sendHandleOnclick}
            text={
              sendLoading ? <LoadingUi type={"button"} /> : "發送二次驗證碼"
            }
          />
        </Flex>
      )}
      {state && (
        <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
          <ProfileButton
            onClick={openFAHandleOnclick}
            text={faLoading ? <LoadingUi type={"button"} /> : "確認"}
          />
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
        <ProfileButton
          onClick={faCloseApi}
          text={faLoading ? <LoadingUi type={"button"} /> : "關閉兩步驟驗證"}
        />
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
