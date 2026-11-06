import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AddIcon from "@mui/icons-material/Add";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import type { SvgIconComponent } from "@mui/icons-material";

export type ProfileMenuItem = {
  label: string;
  url: string;
  icon: SvgIconComponent;
};

export const profileMenuItems: ProfileMenuItem[] = [
  { label: "個人檔案", url: "personal", icon: AccountCircleOutlinedIcon },
  { label: "我的學習", url: "learn", icon: MenuBookOutlinedIcon },
  { label: "我的收藏", url: "collect", icon: FavoriteBorderOutlinedIcon },
  { label: "訂單紀錄", url: "order", icon: FormatListBulletedOutlinedIcon },
  { label: "建立課程", url: "createCourse", icon: AddIcon },
  { label: "我的課程", url: "myCourses", icon: SchoolOutlinedIcon },
];
