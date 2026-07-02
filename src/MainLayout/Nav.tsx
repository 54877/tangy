import { MenuIcon, Search } from "lucide-react";
import CloseIcon from "@mui/icons-material/Close";
import { LogoTangy } from "../components/LogoTangy/LogoTangy";
import { FlexType } from "../styles/components/flex";
import { SpanType } from "../styles/components/span";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
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
} from "./MainLayout.styled";
import { Button } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../context/auth/useAuth";
import { UserImg } from "../components/UserImg/userImg";
import {
  ListButtonDefault,
  UserListButton,
} from "../components/NavUserList/List";
import { UserLi } from "../components/NavUserList/List.styled";

type NavProps = {
  isMobile: boolean;
};

export const Nav = ({ isMobile }: NavProps) => {
  const [open, setOpen] = useState(true);
  const [borderState, setBorderState] = useState(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const loginRouterOnclick = () => {
    navigate("/login");
  };
  const button = () => {
    return open ? (
      <ButtonIcon onClick={() => setOpen(false)} icon={<CloseIcon />} />
    ) : (
      <ButtonIcon onClick={() => setOpen(true)} icon={<MenuIcon />} />
    );
  };

  return (
    <>
      <HeaderFixed>
        <ContainerHeader $gap={{ sm: "lg" }} $justify="space-between">
          <LogoTangy />

          <FlexType $display={{ xs: "none", sm: "flex" }}>
            <SpanType>課程分類</SpanType>
            <KeyboardArrowDownIcon />
          </FlexType>

          <FlexTypeHeader $gap={{ xs: "none", sm: "lg" }}>
            {/* 搜尋 */}
            <SearchFlex>
              <HeaderSearch type="text" />
              <Search />
            </SearchFlex>
            <FlexType $gap={{ xs: "none", sm: "sm" }}>
              {/* cart */}
              <ShoppingCartOutlinedIcon
                sx={{ margin: "12px", cursor: "pointer" }}
              />
              {/* Menu */}
              {isMobile ? (
                <Button onClick={loginRouterOnclick} text={"登入/註冊"} />
              ) : (
                button()
              )}
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
                  <SpanType>Anna Wu</SpanType>
                </FlexType>
              }
            />
            <UserListMenu>
              <FlexType $direction={"column"} $gap={"sm"}>
                <UserListButton
                  icon={<AccountCircleOutlinedIcon />}
                  text={"個人檔案"}
                />
                <UserListButton
                  icon={<MenuBookOutlinedIcon />}
                  text={"我的學習"}
                />
                <UserListButton
                  icon={<FavoriteBorderOutlinedIcon />}
                  text={"我的收藏"}
                />
                <UserListButton
                  icon={<FormatListBulletedOutlinedIcon />}
                  text={"訂單紀錄"}
                />
              </FlexType>
            </UserListMenu>
            <UserListButton
              as={"div"}
              icon={<LogoutOutlinedIcon />}
              text={"登出"}
            />
          </UserContainer>
        ) : (
          <ListMenu>
            <FlexType $direction={"column"} $gap={"sm"}>
              <UserLi style={{ padding: "12px 0" }}>
                <SpanType $type="label">所有領域</SpanType>
              </UserLi>
              <ListButtonDefault text={"個人理財"} />
              <ListButtonDefault text={"家族財富"} />
              <ListButtonDefault text={"投資規劃"} />
              <ListButtonDefault text={"財務分析"} />
              <ListButtonDefault text={"風險管理"} />
            </FlexType>
            <Button onClick={loginRouterOnclick} text={"登入/註冊"} />
          </ListMenu>
        )}
      </Drawer>
    </>
  );
};
