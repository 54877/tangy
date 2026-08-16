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
    >
      <Flex style={{ width: isLgMac ? "35%" : "40%" }} $justify={"flex-start"}>
        {isSmall && <> {icon}</>}
        <SpanType>{title} :</SpanType>
      </Flex>
      <SpanType style={{ flex: 1 }}>{text}</SpanType>
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
  secTitle,
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
          <SpanType $shade={400}>{secTitle}</SpanType>
        </Flex>
      </Flex>
      <Flex style={{ width: "100%", flex: 1 }}>
        <SpanType
          style={{ width: "100%", flexShrink: 0, whiteSpace: "nowrap" }}
          $color={"success"}
          $shade={400}
        >
          {isCurrent ? "目前裝置" : ""}
        </SpanType>
        <Flex style={{ flex: 1 }} as={"button"} onClick={onclick}>
          <MoreVertOutlinedIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};
