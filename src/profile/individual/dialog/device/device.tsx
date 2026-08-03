import CloseIcon from "@mui/icons-material/Close";
import { DialogBase } from "../../../../components/dialog/dialogBase";
import { Flex } from "../../../../components/Input/Input.styled";
import { useDialog } from "../../../../context/dialog/useDialog";
import { Heading, SpanType } from "../../../../styles/components/span";
import { useActiveDialog } from "../../../../utils/dialogLayer";
import { ProfileButton } from "../edit/editDialog.styled";

export const DeviceDialog = () => {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("DeviceDialog");
  const { type, title } = activeDialog || {};

  const content = (
    <Flex $direction={"column"}>
      <Flex style={{ paddingBottom: "24px" }} $justify={"space-between"}>
        <Heading>{title}</Heading>
        <CloseIcon onClick={() => closeDialog(activeLayer)} />
      </Flex>
      <Flex $direction={"column"}>
        <Flex $justify={"space-between"}>
          <SpanType>裝置名稱 :</SpanType>
          <SpanType style={{ flex: 1 }}>Windows · Chrome</SpanType>
        </Flex>
        <Flex $justify={"space-between"}>
          <SpanType>瀏覽器 :</SpanType>
          <SpanType style={{ flex: 1 }}>Chrome 138</SpanType>
        </Flex>
        <Flex $justify={"space-between"}>
          <SpanType>作業系統 :</SpanType>
          <SpanType style={{ flex: 1 }}>Windows 11</SpanType>
        </Flex>
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
        <ProfileButton text={"登出"} />
      </Flex>
    </Flex>
  );

  return <DialogBase type={type ?? null} context={content} />;
};
