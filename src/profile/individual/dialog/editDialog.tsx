import { DialogBase } from "../../../components/dialog/dialogBase";
import { Flex } from "../../../components/Input/Input.styled";
import { useDialog } from "../../../context/dialog/useDialog";
import { Heading, SpanType } from "../../../styles/components/span";
import CloseIcon from "@mui/icons-material/Close";
import { useActiveDialog } from "../../../utils/dialogLayer";
import { FromInput } from "../../../components/Input/Input";
import type { ReactNode } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useInformation } from "../../../utils/information";
import type { ProfileDetailProps } from "../../../types/profile";
import { profileDetailInit } from "../../../constants/profile";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { ButtonOutlined } from "../../../components/Button/Button";
import { ProfileButton } from "./editDialog.styled";

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
          direction={"row"}
          fieldKey={"name"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({
            icon: <EmailOutlinedIcon />,
            title: "電子郵件",
          })}
          direction={"row"}
          fieldKey={"email"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({
            icon: <CalendarMonthOutlinedIcon />,
            title: "生日",
          })}
          direction={"row"}
          fieldKey={"birthday"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({ icon: <MaleOutlinedIcon />, title: "性別" })}
          direction={"row"}
          fieldKey={"gender"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({
            icon: <AccessTimeOutlinedIcon />,
            title: "加入時間",
          })}
          direction={"row"}
          fieldKey={"createdAt"}
          information={information}
          onChange={handleOnChange}
        />

        <FromInput
          title={titleUi({ icon: <BadgeOutlinedIcon />, title: "簡介" })}
          direction={"row"}
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

  return <DialogBase type={type ?? null} context={content} />;
};
