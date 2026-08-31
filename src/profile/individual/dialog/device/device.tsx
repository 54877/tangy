import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { DialogBase } from "../../../../components/dialog/dialogBase";
import { Flex } from "../../../../components/Input/Input.styled";
import { useDialog } from "../../../../context/dialog/useDialog";
import { Heading } from "../../../../styles/components/span";
import { useActiveDialog } from "../../../../utils/dialogLayer";
import { ProfileButton } from "../edit/editDialog.styled";
import { DeviceItem } from "./item";
import dayjs from "dayjs";
import { DeviceCloseById } from "../../../../api/profile";
import { useLoading } from "../../../../context/loading/useLoading";
import { LoadingUi } from "../../../../components/loading/loading";
import { useLoadingState } from "../../../../utils/loading/loading.state";
import { useAuth } from "../../../../context/auth/useAuth";
import { useNavigate } from "react-router-dom";

export const DeviceDialog = () => {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("DeviceDialog");
  const { type, title, deviceData, editProfileOnclick } = activeDialog || {};
  const { loading } = useLoading();
  const { clearAuthToken } = useAuth();
  const navigate = useNavigate();
  const isSmall = useMediaQuery("(max-width:500px)");

  const DeviceCloseByIdApi = async (id?: string) => {
    if (!id) {
      return;
    }
    loading(2).start();
    try {
      await DeviceCloseById(id);
      if (deviceData?.isCurrent) {
        clearAuthToken();
        loading(2).stop();
        closeDialog(activeLayer);
        navigate("/login");
        return;
      }

      if (editProfileOnclick) {
        await editProfileOnclick();
      }

      await loading(2).stop();
      closeDialog(activeLayer);
    } catch (err) {
      await loading(2).stop();
      console.log(err);
    }
  };

  const content = (
    <Flex $direction={"column"}>
      <Flex style={{ paddingBottom: "24px" }} $justify={"space-between"}>
        <Heading>{title}</Heading>
        <CloseIcon onClick={() => closeDialog(activeLayer)} />
      </Flex>
      <Flex $direction={"column"}>
        <DeviceItem
          title={"裝置名稱"}
          value={`${deviceData?.deviceVendor ?? ""} ${deviceData?.deviceModel ?? ""} ${!deviceData?.deviceVendor ? "" : "·"} ${deviceData?.browser}`}
        />

        <DeviceItem
          title={"瀏覽器"}
          value={`${deviceData?.browser} ${deviceData?.browserVersion}`}
        />

        <DeviceItem
          title={"作業系統"}
          value={`${deviceData?.os} ${deviceData?.osVersion}`}
        />

        <DeviceItem
          title={"登入時間"}
          value={dayjs(deviceData?.createdAt).format("YYYY/MM/DD HH:mm")}
        />

        <DeviceItem
          title={"最後活動時間"}
          value={dayjs(deviceData?.lastUseAt).format("YYYY/MM/DD HH:mm")}
        />

        <DeviceItem title={"IP"} value={deviceData?.ip ?? "未提供"} />
      </Flex>
      <Flex $justify={"flex-end"} style={{ paddingTop: "24px" }}>
        <ProfileButton
          onClick={() => {
            DeviceCloseByIdApi(deviceData?.id);
          }}
          text={useLoadingState(2) ? <LoadingUi type={"button"} /> : "登出裝置"}
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
