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
import { DeviceCloseByUserId, personal } from "../../api/profile";
import { useEffect, useState } from "react";
import type { UseUserProps } from "../../types/authType";
import { profileDetailInit } from "../../constants/profile";
import type { OptionItem } from "../../types/select";
import { useLoading } from "../../context/loading/useLoading";
import { LoadingUi } from "../../components/loading/loading";
import type { DeviceProps } from "../../types/profile";
import { useLoadingState } from "../../utils/loading/loading.state";
import { useAuth } from "../../context/auth/useAuth";
import { useNavigate } from "react-router-dom";

export const Personal = () => {
  const isMac = useMediaQuery(`${media.sm}`);
  const isTablet = useMediaQuery(`${media.xs}`);
  const [user, setUser] = useState<UseUserProps>(profileDetailInit);
  const [gender, setGender] = useState<OptionItem[]>();
  const [userReady, setUserReady] = useState(true);
  const [device, setDevice] = useState<DeviceProps[]>();
  const { clearAuthToken } = useAuth();
  const { loading } = useLoading();
  const { openDialog } = useDialog();
  const navigate = useNavigate();

  //查詢個人資料API
  const fetchUser = async () => {
    loading(1).start();
    try {
      const res = await personal();
      const data = res.data;
      setUser(data.userDate);
      setDevice(data.deviceDate);
      setUserReady(false);
    } catch (err) {
      console.log(err);
    } finally {
      loading(1).stop();
    }
  };

  //登出所有裝置API
  const DeviceCloseByUserIdApi = async () => {
    loading(2).start();
    try {
      await DeviceCloseByUserId(user.id);
      clearAuthToken();
      navigate("/login");
      await loading(2).stop();
    } catch (err) {
      await loading(2).stop();
      console.log(err);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const fetchUser = async () => {
      loading(1).start();
      try {
        const res = await personal();
        const data = res.data;
        console.log(data);
        if (!cancelled) {
          setDevice(data.deviceDate);
          setUser(data.userDate);
          setGender(data.genderSelect);
          setUserReady(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        loading(1).stop();
      }
    };

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, []);

  //編輯個人資料dialog
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

  //查看裝置詳細資料dialog
  const deviceOnclick = (id: string) => {
    openDialog(
      {
        type: "DeviceDialog",
        title: "查看裝置詳細資料",
        deviceData: device?.find((e) => e.id === id),
        editProfileOnclick: fetchUser,
      },
      1,
    );
  };

  //更新密碼dialog
  const updatePasswordOnclick = () => {
    openDialog(
      {
        type: "UpdatePasswordDialog",
        title: "更新密碼",
      },
      1,
    );
  };

  //兩部驗證dialog
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
  const time = isTablet ? "YYYY年MM月DD日 hh:mm" : "YYYY年MM月DD日 ";
  const createdAt = user?.createdAt
    ? dayjs(user.createdAt).format(time)
    : "未填寫";

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
              disabled={userReady}
              onClick={editOnclick}
              icon_left={<EditOutlinedIcon />}
              text={"編輯"}
            />
          }
        />
        {user.userName ? (
          <>
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
              text={
                gender?.find((x) => x.key === user.gender)?.label ?? "未填寫"
              }
            />
            <ProfileInfoItem
              icon={<AccessTimeOutlinedIcon />}
              title={"加入時間"}
              text={createdAt}
            />
            <ProfileInfoItem
              icon={<BadgeOutlinedIcon />}
              title={"簡介"}
              type={true}
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
          </>
        ) : (
          <LoadingUi style={{ height: "580px" }} type={"spinner"} />
        )}
      </Container>

      {/* 登入裝置 */}
      <Container $direction={"column"}>
        <ProfileInfoItemTitle
          context={"登入裝置"}
          secContext={"管理所有裝置"}
          icon={
            <TabletAndroidOutlinedIcon
              style={{ width: "30px", height: "30px" }}
            />
          }
          RightButton={
            <TitleButton
              onClick={() => {
                DeviceCloseByUserIdApi();
              }}
              style={{ color: "red" }}
              text={
                useLoadingState(2) ? (
                  <LoadingUi type={"button"} />
                ) : (
                  "登出所有裝置"
                )
              }
            />
          }
        />
        {device ? (
          device.map((e) => (
            <Flex key={e.id}>
              <ProfileDeviceInfoItem
                onclick={() => {
                  deviceOnclick(e.id);
                }}
                isCurrent={e.isCurrent}
                icon={<TabletAndroidOutlinedIcon />}
                title={`${e.os} · ${e.browser}`}
              />
            </Flex>
          ))
        ) : (
          <LoadingUi style={{ height: "560px" }} type={"spinner"} />
        )}
      </Container>
    </Flex>
  );
};
