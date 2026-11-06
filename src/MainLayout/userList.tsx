import { UserListButton } from "../components/NavUserList/List";
import { FlexType } from "../styles/components/flex";
import { useNavigate } from "react-router-dom";
import { profileMenuItems } from "../constants/profileMenu";

type Props = {
  close?: () => void;
};

export const UserList = ({ close }: Props) => {
  const navigate = useNavigate();

  const onclick = (url: string) => {
    if (close) {
      close();
    }
    void navigate(`./${url}`);
  };

  return (
    <FlexType $direction={"column"} $gap={"sm"}>
      {profileMenuItems.map(({ label, url, icon: Icon }) => (
        <UserListButton
          key={url}
          onClick={() => onclick(`profile/${url}`)}
          icon={<Icon />}
          text={label}
        />
      ))}
    </FlexType>
  );
};
