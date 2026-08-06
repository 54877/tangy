import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState, type ReactNode } from "react";
import { DateTime } from "../../../../components/dateTime/dateTime";
import { DialogBase } from "../../../../components/dialog/dialogBase";
import { FromInput } from "../../../../components/Input/Input";
import { Flex } from "../../../../components/Input/Input.styled";
import { profileDetailInit } from "../../../../constants/profile";
import { useDialog } from "../../../../context/dialog/useDialog";
import { Heading, SpanType } from "../../../../styles/components/span";
import { type ProfileDetailProps } from "../../../../types/profile";
import { useActiveDialog } from "../../../../utils/dialogLayer";
import { useInformation } from "../../../../utils/information";
import { ProfileButton } from "./editDialog.styled";
import { FormSelect } from "../../../../components/select/FromSelect";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import { updatePersonal } from "../../../../api/profile";
import { handleApiError } from "../../../../utils/apiError";

export interface Props {
  icon: ReactNode;
  title: string;
}

export const EditDialog = () => {
  const { closeDialog } = useDialog();
  const [err, setErr] = useState<Partial<ProfileDetailProps>>({});
  const { activeDialog, activeLayer } = useActiveDialog("EditDialog");
  const { information, handleOnChange, setInformation } =
    useInformation<ProfileDetailProps>(profileDetailInit);
  const { type, title, user, gender, editProfileOnclick } = activeDialog || {};
  const isSmall = useMediaQuery("(max-width:500px)");

  useEffect(() => {
    if (user) {
      setInformation(user);
    }
  }, []);

  const updatePersonalApi = async () => {
    try {
      await updatePersonal(information);
      closeDialog(activeLayer);
      if (editProfileOnclick) {
        await editProfileOnclick();
      }
    } catch (err) {
      handleApiError(err, setErr);
    }
  };

  const titleUi = ({ icon, title }: Props) => (
    <Flex $justify={"flex-start"}>
      {icon}
      <SpanType>{title} :</SpanType>
    </Flex>
  );

  const content = (
    <Flex $direction={"column"}>
      <Flex style={{ paddingBottom: "24px" }} $justify={"space-between"}>
        <Heading>{title}</Heading>
        <CloseIcon onClick={() => closeDialog(activeLayer)} />
      </Flex>
      <Flex $direction={"column"}>
        <FromInput
          err={err}
          title={titleUi({ icon: <PermIdentityOutlinedIcon />, title: "暱稱" })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"userName"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({
            icon: <EmailOutlinedIcon />,
            title: "電子郵件",
          })}
          err={err}
          disabled={true}
          direction={isSmall ? "column" : "row"}
          fieldKey={"email"}
          information={information}
          onChange={handleOnChange}
        />

        <DateTime
          title={titleUi({
            icon: <AccessTimeOutlinedIcon />,
            title: "生日",
          })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"birthday"}
          information={information}
          onChange={handleOnChange}
        />

        <FormSelect
          title={titleUi({
            icon: <MaleOutlinedIcon />,
            title: "性別",
          })}
          err={err}
          defaultName={"請選擇性別"}
          direction={isSmall ? "column" : "row"}
          list={gender ?? []}
          valueKey={"key"}
          labelKey={"label"}
          information={information}
          fieldKey={"gender"}
          onChange={handleOnChange}
        />

        <DateTime
          title={titleUi({
            icon: <AccessTimeOutlinedIcon />,
            title: "加入時間",
          })}
          type={"time"}
          direction={isSmall ? "column" : "row"}
          disabled={true}
          fieldKey={"createdAt"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({ icon: <BadgeOutlinedIcon />, title: "簡介" })}
          err={err}
          direction={isSmall ? "column" : "row"}
          fieldKey={"introduction"}
          information={information}
          onChange={handleOnChange}
        />
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
        <ProfileButton onClick={updatePersonalApi} text={"儲存"} />
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
