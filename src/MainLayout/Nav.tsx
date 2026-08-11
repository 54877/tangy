import CloseIcon from "@mui/icons-material/Close";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";
import { FlexType } from "../styles/components/flex";
import { SpanType } from "../styles/components/span";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  HeaderFixed,
  ContainerHeader,
  FlexTypeHeader,
  SearchFlex,
  HeaderSearch,
  ButtonIcon,
  ListMenu,
  Border,
  NavButton,
  NavFlex,
  BorderReverse,
  UserListMenu,
  UserContainer,
  Search,
  MenuIcon,
} from "./MainLayout.styled";
import { Button, ButtonOutlined } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth/useAuth";
import { UserImg } from "../components/UserImg/userImg";
import {
  ListButtonDefault,
  UserListButton,
} from "../components/NavUserList/List";
import { UserList } from "./userList";
import { MenuNav } from "../components/Menu/Menu";
import { useMenu } from "../components/Menu/menuHook";
import { CourseList } from "./courseList";
import { ChartMenu, CourseMenu, UserMenu } from "./menu";
import { logout } from "../api/auth";
import { useUserInit } from "../constants/user";
import { useMe } from "../api/common/nav.API";

type NavProps = {
  isMobile: boolean;
};

export const Nav = ({ isMobile }: NavProps) => {
  const [open, setOpen] = useState(false);
  const [borderState, setBorderState] = useState(false);
  const { isAuthenticated, clearAuthToken, setUser } = useAuth();
  const navigate = useNavigate();
  const menu = useMenu();
  const { user, token } = useAuth();
  const { getMe } = useMe();
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      getMe();
    }
  }, []);

  //登入跳轉手頁
  const loginRouterOnclick = () => {
    navigate("/login");
  };

  //關閉menu
  const closeClick = () => {
    setOpen(false);
    setBorderState(false);
  };

  //登出
  const logoutButton = async () => {
    setLogoutLoading(true);
    try {
      await logout();
      setUser(useUserInit);
      navigate("/");
      clearAuthToken();
      closeClick();
      menu.closeClick();
    } catch (err) {
      console.log(err);
    } finally {
      setLogoutLoading(false);
    }
  };

  //手機板關閉menu切換UI
  const button = () => {
    return open ? (
      <ButtonIcon onClick={closeClick} icon={<CloseIcon />} />
    ) : (
      <ButtonIcon onClick={() => setOpen(true)} icon={<MenuIcon />} />
    );
  };

  //電腦 登入登出切換 UI
  const macLogin = () => {
    return isAuthenticated ? (
      <ButtonOutlined
        onClick={menu.openClick("user")}
        style={{ padding: "0", border: "0" }}
        text={<UserImg />}
      />
    ) : (
      <Button onClick={loginRouterOnclick} text={"登入/註冊"} />
    );
  };

  return (
    <>
      <HeaderFixed>
        <ContainerHeader $gap={{ sm: "lg" }} $justify="space-between">
          <LogoTangy />

          <FlexType $display={{ xs: "none", sm: "flex" }}>
            <ButtonOutlined
              onClick={menu.openClick("course")}
              style={{ padding: "12px 0", border: "0" }}
              text={
                <>
                  <SpanType>課程分類</SpanType>
                  <KeyboardArrowDownIcon />
                </>
              }
            />
          </FlexType>

          <FlexTypeHeader $gap={{ xs: "none", sm: "lg" }}>
            {/* 搜尋 */}
            <SearchFlex>
              <HeaderSearch type="text" />
              <Search />
            </SearchFlex>
            <FlexType $gap={{ xs: "none", sm: "sm" }}>
              {/* cart */}
              <ButtonOutlined
                onClick={menu.openClick("chart")}
                style={{ padding: "12px", border: "0" }}
                text={<ShoppingCartOutlinedIcon />}
              />
              {/* Menu */}
              {isMobile ? macLogin() : button()}
            </FlexType>
          </FlexTypeHeader>
        </ContainerHeader>
      </HeaderFixed>

      {/* Drawer 手機板 */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            pt: "80px",
          },
        }}
      >
        {isAuthenticated && (
          <FlexType style={{ paddingBottom: "12px" }} $gap={"none"}>
            <NavFlex $direction={"column"} $gap={"none"}>
              <NavButton
                onClick={() => {
                  setBorderState(false);
                }}
                text={
                  <SpanType style={{ padding: "6.5px 8px" }} $type={"label"}>
                    課程分類
                  </SpanType>
                }
              />
              <Border $borderState={borderState} />
            </NavFlex>

            <NavFlex $direction={"column"} $gap={"none"}>
              <NavButton
                style={{ paddingTop: "8px" }}
                onClick={() => {
                  setBorderState(true);
                }}
                text={
                  <SpanType style={{ padding: "6.5px 8px" }} $type={"label"}>
                    <FlexType $direction={"row"}>
                      <UserImg width={"32px"} height={"32px"} />
                      關於我
                    </FlexType>
                  </SpanType>
                }
              />
              <BorderReverse $borderState={borderState} />
            </NavFlex>
          </FlexType>
        )}
        {borderState ? (
          <UserContainer $direction={"column"}>
            <ListButtonDefault
              as={"div"}
              paddingType={true}
              text={
                <FlexType>
                  <UserImg width={"48px"} height={"48px"} />
                  <SpanType>{user.userName}</SpanType>
                </FlexType>
              }
            />
            {/* User 列表 */}
            <UserListMenu>
              <UserList
                close={() => {
                  closeClick();
                }}
              />
            </UserListMenu>
            <UserListButton
              onClick={logoutButton}
              as={"div"}
              icon={<LogoutOutlinedIcon />}
              text={"登出"}
            />
          </UserContainer>
        ) : (
          <ListMenu>
            {/* course List */}
            <CourseList />
            {!isAuthenticated && (
              <Button onClick={loginRouterOnclick} text={"登入/註冊"} />
            )}
          </ListMenu>
        )}
      </Drawer>

      {/* mac menu*/}
      <MenuNav
        open={menu.isOpen}
        menuRef={menu.ref}
        onClickAway={menu.closeClick}
        text={
          <>
            {/* userList menu */}
            {menu.activeKey === "user" && (
              <UserMenu loading={logoutLoading} logout={logoutButton} />
            )}
            {/* 課程分類menu */}
            {menu.activeKey === "course" && <CourseMenu />}
            {/* 購物車menu */}
            {menu.activeKey === "chart" && (
              <ChartMenu close={menu.closeClick} />
            )}
          </>
        }
      />
    </>
  );
};
