import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { DialogBase } from "../../../../components/dialog/dialogBase";
import { Flex } from "../../../../components/Input/Input.styled";
import { useDialog } from "../../../../context/dialog/useDialog";
import { Heading } from "../../../../styles/components/span";
import { useActiveDialog } from "../../../../utils/dialogLayer";
import { ProfileButton } from "../edit/editDialog.styled";
import { DeviceItem } from "./item";

export const DeviceDialog = () => {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("DeviceDialog");
  const { type, title } = activeDialog || {};
  const isSmall = useMediaQuery("(max-width:500px)");

  const content = (
    <Flex $direction={"column"}>
      <Flex style={{ paddingBottom: "24px" }} $justify={"space-between"}>
        <Heading>{title}</Heading>
        <CloseIcon onClick={() => closeDialog(activeLayer)} />
      </Flex>
      <Flex $direction={"column"}>
        <DeviceItem title={"裝置名稱"} value={"Windows · Chrome"} />
        <DeviceItem title={"瀏覽器"} value={"Chrome 138"} />
        <DeviceItem title={"作業系統"} value={"Windows 11"} />
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
        <ProfileButton text={"登出裝置"} />
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
