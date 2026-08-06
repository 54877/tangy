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
import { Heading } from "../../../../styles/components/span";
import { updatePassword } from "../../../../api/profile";
import { handleApiError } from "../../../../utils/apiError";
import { useState } from "react";
import type { FormError } from "../../../../types/errorType";

export const UpdatePasswordDialog = () => {
  const { closeDialog } = useDialog();
  const [err, setErr] = useState<FormError<UpdatePasswordProps>>({});
  const { activeDialog, activeLayer } = useActiveDialog("UpdatePasswordDialog");
  const { information, handleOnChange } =
    useInformation<UpdatePasswordProps>(updatePasswordInit);
  const { type, title } = activeDialog || {};
  const isSmall = useMediaQuery("(max-width:500px)");

  //更新密碼API
  const updatePasswordApi = async () => {
    try {
      await updatePassword(information);
      closeDialog(activeLayer);
    } catch (err) {
      handleApiError(err, setErr);
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

        <FromInput
          err={err}
          title={"新密碼"}
          type={"password"}
          direction={isSmall ? "column" : "row"}
          fieldKey={"newPassword"}
          information={information}
          onChange={handleOnChange}
        />
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
        <ProfileButton onClick={updatePasswordApi} text={"更新密碼"} />
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
