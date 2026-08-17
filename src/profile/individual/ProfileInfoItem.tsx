import { useMediaQuery } from "@mui/material";
import { Flex } from "../../components/Input/Input.styled";
import { Heading, SpanType } from "../../styles/components/span";
import type {
  ProfileDeviceInfoItemProps,
  ProfileInfoItemProps,
  ProfileInfoItemTitleProps,
  ProfileSafetyInfoItemProps,
} from "../../types/profile";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { media } from "../../styles/helper/media";
import { Content } from "./personal.styled";

export const ProfileInfoItemTitle = ({
  icon,
  context,
  secContext,
  RightButton,
}: ProfileInfoItemTitleProps) => {
  return (
    <Flex $justify={"space-between"}>
      <Flex $justify={"flex-start"}>
        {icon}
        <Flex
          style={{ textAlign: "start" }}
          $direction={"column"}
          $align={"flex-start"}
          $gap={"none"}
        >
          <Heading>{context}</Heading>
          <SpanType $shade={400}>{secContext}</SpanType>
        </Flex>
      </Flex>
      {RightButton}
    </Flex>
  );
};

export const ProfileInfoItem = ({
  icon,
  title,
  text,
  type = false,
}: ProfileInfoItemProps) => {
  const isSmall = useMediaQuery(`${media.xs}`);
  const isLgMac = useMediaQuery(`${media.md}`);
  return (
    <Flex
      style={{
        borderBottom: "1px solid #e4e8e9",
        padding: "16px 0",
      }}
      $justify={"space-between"}
      $align={type ? "flex-start" : "center"}
      $direction={type ? "column" : "row"}
    >
      <Flex style={{ width: isLgMac ? "35%" : "40%" }} $justify={"flex-start"}>
        {isSmall && <> {icon}</>}
        <SpanType>{title} :</SpanType>
      </Flex>
      {type ? <SpanType>{text}</SpanType> : <Content>{text}</Content>}
    </Flex>
  );
};

export const ProfileSafetyInfoItem = ({
  icon,
  title,
  secTitle,
  onclick,
  borderType = true,
}: ProfileSafetyInfoItemProps) => {
  const isSmall = useMediaQuery(`${media.xs}`);
  return (
    <Flex
      as={"button"}
      onClick={onclick}
      style={{
        borderBottom: borderType ? "1px solid #e4e8e9" : "0",
        padding: "16px 0",
      }}
      $justify={"space-between"}
    >
      <Flex $justify={"flex-start"}>
        {icon}
        <Flex $direction={"column"} $align={"flex-start"} $gap={"none"}>
          <SpanType style={{ fontWeight: "bold" }}>{title}</SpanType>
          <SpanType $shade={400}>{secTitle}</SpanType>
        </Flex>
      </Flex>
      {isSmall && <ArrowForwardIosOutlinedIcon />}
    </Flex>
  );
};

export const ProfileDeviceInfoItem = ({
  icon,
  title,
  onclick,
  borderType = true,
  isCurrent,
}: ProfileDeviceInfoItemProps) => {
  return (
    <Flex
      style={{
        borderBottom: borderType ? "1px solid #e4e8e9" : "0",
        padding: "16px 0",
      }}
      $justify={"space-between"}
    >
      <Flex $justify={"flex-start"}>
        {icon}
        <Flex $direction={"column"} $align={"flex-start"} $gap={"none"}>
          <SpanType style={{ fontWeight: "bold" }}>{title}</SpanType>
          {isCurrent && (
            <SpanType $color={"success"} $shade={400}>
              目前裝置
            </SpanType>
          )}
        </Flex>
      </Flex>
      <Flex style={{ flex: 1 }} as={"button"} onClick={onclick}>
        <MoreVertOutlinedIcon />
      </Flex>
    </Flex>
  );
};
