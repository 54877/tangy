import { UserListButton } from "../components/NavUserList/List";
import { FlexType } from "../styles/components/flex";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

export const UserList = () => {
  return (
    <FlexType $direction={"column"} $gap={"sm"}>
      <UserListButton icon={<AccountCircleOutlinedIcon />} text={"個人檔案"} />
      <UserListButton icon={<MenuBookOutlinedIcon />} text={"我的學習"} />
      <UserListButton icon={<FavoriteBorderOutlinedIcon />} text={"我的收藏"} />
      <UserListButton
        icon={<FormatListBulletedOutlinedIcon />}
        text={"訂單紀錄"}
      />
    </FlexType>
  );
};
