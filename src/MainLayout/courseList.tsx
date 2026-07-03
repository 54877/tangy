import { ListButtonDefault } from "../components/NavUserList/List";
import { UserLi } from "../components/NavUserList/List.styled";
import { FlexType } from "../styles/components/flex";
import { SpanType } from "../styles/components/span";

export const CourseList = () => {
  return (
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
  );
};
