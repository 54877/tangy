import { UserListButton } from "../components/NavUserList/List";
import { UserLi } from "../components/NavUserList/List.styled";
import { SpanType } from "../styles/components/span";
import { UserListMenu } from "./MainLayout.styled";
import { UserList } from "./userList";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { CourseList } from "./courseList";
import { FlexType } from "../styles/components/flex";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useMe } from "../api/common/nav.API";
import { useEffect } from "react";
import { useAuth } from "../context/auth/useAuth";

type UiType = {
  logout: () => void;
};

type CartType = {
  close: () => void;
};

export const UserMenu = ({ logout }: UiType) => {
  const { user, token } = useAuth();
  const { getMe } = useMe();

  useEffect(() => {
    if (token) {
      getMe();
    }
  }, []);

  return (
    <UserListMenu style={{ border: "0", padding: "16px 24px" }}>
      <UserLi style={{ paddingBottom: "12px" }}>
        <SpanType>HI {user.userName}</SpanType>
      </UserLi>
      <UserList />
      <UserListButton
        onClick={logout}
        as={"div"}
        icon={<LogoutOutlinedIcon />}
        text={"登出"}
      />
    </UserListMenu>
  );
};

export const CourseMenu = () => {
  return (
    <UserListMenu style={{ border: "0", padding: "16px 24px" }}>
      <CourseList />
    </UserListMenu>
  );
};

export const ChartMenu = ({ close }: CartType) => {
  const navigate = useNavigate();

  const onclick = () => {
    close();
    navigate("/course");
  };
  return (
    <UserListMenu
      style={{ minHeight: "240px", border: "0", padding: "16px 24px" }}
    >
      <FlexType $direction={"column"} style={{ flex: "1" }}>
        <SpanType style={{ fontWeight: "bold" }}>
          空空如也，趕緊去逛逛吧
        </SpanType>
        <Button onClick={onclick} text={"探索課程"} />
      </FlexType>
    </UserListMenu>
  );
};
