import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { type ReactNode } from "react";
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
import { useMediaQuery } from "@mui/material";

export interface Props {
  icon: ReactNode;
  title: string;
}

export const EditDialog = () => {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("EditDialog");
  const { information, handleOnChange } =
    useInformation<ProfileDetailProps>(profileDetailInit);
  const { type, title } = activeDialog || {};
  const isSmall = useMediaQuery("(max-width:500px)");
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
          title={titleUi({ icon: <PermIdentityOutlinedIcon />, title: "暱稱" })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"name"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({
            icon: <EmailOutlinedIcon />,
            title: "電子郵件",
          })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"email"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({
            icon: <CalendarMonthOutlinedIcon />,
            title: "生日",
          })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"birthday"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({ icon: <MaleOutlinedIcon />, title: "性別" })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"gender"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({
            icon: <AccessTimeOutlinedIcon />,
            title: "加入時間",
          })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"createdAt"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({ icon: <BadgeOutlinedIcon />, title: "簡介" })}
          direction={isSmall ? "column" : "row"}
          fieldKey={"introduction"}
          information={information}
          onChange={handleOnChange}
        />
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
        <ProfileButton text={"儲存"} />
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
