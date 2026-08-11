import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import TabletAndroidOutlinedIcon from "@mui/icons-material/TabletAndroidOutlined";
import { useMediaQuery } from "@mui/material";
import { Flex } from "../../components/Input/Input.styled";
import { useDialog } from "../../context/dialog/useDialog";
import { media } from "../../styles/helper/media";
import { Container, TitleButton } from "./personal.styled";
import {
  ProfileDeviceInfoItem,
  ProfileInfoItem,
  ProfileInfoItemTitle,
  ProfileSafetyInfoItem,
} from "./ProfileInfoItem";
import dayjs from "dayjs";
import { personal } from "../../api/profile";
import { useEffect, useState } from "react";
import type { UseUserProps } from "../../types/authType";
import { profileDetailInit } from "../../constants/profile";
import type { OptionItem } from "../../types/select";

export const Personal = () => {
  const isMac = useMediaQuery(`${media.sm}`);
  const [user, setUser] = useState<UseUserProps>(profileDetailInit);
  const [gender, setGender] = useState<OptionItem[]>();
  const { openDialog } = useDialog();
  const fetchUser = async () => {
    try {
      const res = await personal();

      setUser(res.data.userDate);
      setGender(res.data.genderSelect);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const fetchUser = async () => {
      try {
        const res = await personal();

        if (!cancelled) {
          setUser(res.data.userDate);
          setGender(res.data.genderSelect);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, []);

  const editOnclick = () => {
    openDialog(
      {
        type: "EditDialog",
        title: "編輯個人資訊",
        user: user,
        gender: gender,
        editProfileOnclick: fetchUser,
      },
      1,
    );
  };

  const deviceOnclick = () => {
    openDialog(
      {
        type: "DeviceDialog",
        title: "查看裝置詳細資料",
      },
      1,
    );
  };

  const updatePasswordOnclick = () => {
    openDialog(
      {
        type: "UpdatePasswordDialog",
        title: "更新密碼",
      },
      1,
    );
  };

  const SVOnclick = () => {
    openDialog(
      {
        type: "SVDialog",
        title: "兩步驟驗證",
        user: user,
        setUser: setUser,
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
              onClick={editOnclick}
              icon_left={<EditOutlinedIcon />}
              text={"編輯"}
            />
          }
        />
        <ProfileInfoItem
          icon={<PermIdentityOutlinedIcon />}
          title={"暱稱"}
          text={user?.userName}
        />
        <ProfileInfoItem
          icon={<EmailOutlinedIcon />}
          title={"電子郵件"}
          text={user?.email ?? ""}
        />
        <ProfileInfoItem
          icon={<CalendarMonthOutlinedIcon />}
          title={"生日"}
          text={
            user?.birthday
              ? dayjs(user?.birthday).format("YYYY年MM月DD日")
              : "未填寫"
          }
        />
        <ProfileInfoItem
          icon={<MaleOutlinedIcon />}
          title={"性別"}
          text={gender?.find((x) => x.key)?.label ?? "未填寫"}
        />
        <ProfileInfoItem
          icon={<AccessTimeOutlinedIcon />}
          title={"加入時間"}
          text={
            dayjs(user?.createdAt).format("YYYY年MM月DD日 hh:mm") ?? "未填寫"
          }
        />
        <ProfileInfoItem
          icon={<BadgeOutlinedIcon />}
          title={"簡介"}
          text={user?.introduction ?? "未填寫"}
        />
        <ProfileSafetyInfoItem
          icon={<BuildOutlinedIcon />}
          onclick={updatePasswordOnclick}
          title={"變更密碼"}
          secTitle={"定期更新密碼以保護帳號安全"}
        />
        <ProfileSafetyInfoItem
          borderType={false}
          icon={<SecurityOutlinedIcon />}
          onclick={SVOnclick}
          title={"兩步驟驗證"}
          secTitle={"為您帳號增加額外安全層"}
        />
      </Container>

      {/* 登入裝置 */}
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
          onclick={deviceOnclick}
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
