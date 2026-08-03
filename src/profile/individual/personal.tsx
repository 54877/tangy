import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Container, TitleButton } from "./personal.styled";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {
  ProfileDeviceInfoItem,
  ProfileInfoItem,
  ProfileInfoItemTitle,
  ProfileSafetyInfoItem,
} from "./ProfileInfoItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import TabletAndroidOutlinedIcon from "@mui/icons-material/TabletAndroidOutlined";
import { Flex } from "../../components/Input/Input.styled";
import { useMediaQuery } from "@mui/material";
import { media } from "../../styles/helper/media";
import { useDialog } from "../../context/dialog/useDialog";

export const Personal = () => {
  const isMac = useMediaQuery(`${media.sm}`);
  const { openDialog } = useDialog();

  const editButton = () => {
    openDialog(
      {
        type: "EditDialog",
        title: "編輯個人資訊",
      },
      1,
    );
  };

  return (
    <Flex $direction={isMac ? "row" : "column"} $align={"flex-start"}>
      <Container $direction={"column"}>
        <ProfileInfoItemTitle
          context={"個人簡介"}
          icon={
            <PermIdentityOutlinedIcon
              style={{ width: "30px", height: "30px" }}
            />
          }
          RightButton={
            <TitleButton
              onClick={editButton}
              icon_left={<EditOutlinedIcon />}
              text={"編輯"}
            />
          }
        />
        <ProfileInfoItem
          icon={<PermIdentityOutlinedIcon />}
          title={"暱稱"}
          text={"123"}
        />
        <ProfileInfoItem
          icon={<EmailOutlinedIcon />}
          title={"電子郵件"}
          text={"123"}
        />
        <ProfileInfoItem
          icon={<CalendarMonthOutlinedIcon />}
          title={"生日"}
          text={"123"}
        />
        <ProfileInfoItem
          icon={<MaleOutlinedIcon />}
          title={"性別"}
          text={"123"}
        />
        <ProfileInfoItem
          icon={<AccessTimeOutlinedIcon />}
          title={"加入時間"}
          text={"123"}
        />
        <ProfileInfoItem
          icon={<BadgeOutlinedIcon />}
          title={"簡介"}
          text={"123"}
        />
        <ProfileSafetyInfoItem
          icon={<BuildOutlinedIcon />}
          title={"變更密碼"}
          secTitle={"定期更新密碼以保護帳號安全"}
        />
        <ProfileSafetyInfoItem
          borderType={false}
          icon={<SecurityOutlinedIcon />}
          title={"兩步驟驗證"}
          secTitle={"為您帳號增加額外安全層"}
        />
      </Container>
      <Container $direction={"column"}>
        <ProfileInfoItemTitle
          context={"登入裝置"}
          secContext={"管理所有登入裝置"}
          icon={
            <TabletAndroidOutlinedIcon
              style={{ width: "30px", height: "30px" }}
            />
          }
          RightButton={
            <TitleButton style={{ color: "red" }} text={"登出所有裝置"} />
          }
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
        <ProfileDeviceInfoItem
          icon={<TabletAndroidOutlinedIcon />}
          title={"Windows · Chrome"}
          secTitle={"台灣 · 台北市"}
        />
      </Container>
    </Flex>
  );
};
