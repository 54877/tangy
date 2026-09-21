import { UserListButton } from "../components/NavUserList/List";
import { FlexType } from "../styles/components/flex";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  close?: () => void;
};

export const UserList = ({ close }: Props) => {
  const navigate = useNavigate();

  const onclick = (url: string) => {
    if (close) {
      close();
    }
    navigate(`./${url}`);
  };

  return (
    <FlexType $direction={"column"} $gap={"sm"}>
      <UserListButton
        onClick={() => {
          onclick("profile/personal");
        }}
        icon={<AccountCircleOutlinedIcon />}
        text={"個人檔案"}
      />
      <UserListButton
        onClick={() => {
          onclick("profile/learn");
        }}
        icon={<MenuBookOutlinedIcon />}
        text={"我的學習"}
      />
      <UserListButton
        onClick={() => {
          onclick("profile/collect");
        }}
        icon={<FavoriteBorderOutlinedIcon />}
        text={"我的收藏"}
      />
      <UserListButton
        onClick={() => {
          onclick("profile/order");
        }}
        icon={<FormatListBulletedOutlinedIcon />}
        text={"訂單紀錄"}
      />
      <UserListButton
        onClick={() => {
          onclick("profile/createCourse");
        }}
        icon={<AddIcon />}
        text={"建立課程"}
      />
    </FlexType>
  );
};
