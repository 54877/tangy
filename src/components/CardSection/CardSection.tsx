import { FlexType } from "../../styles/components/flex";
import { SpanType } from "../../styles/components/span";
import { Card, CardBorder, Content, Start, Img } from "./CardSection.styled";
// TODO
// data{
// time : 時間  ,
// content : 內容 ,
// name :發文者名稱
// img: 發文者照片 ,
// work: 發文者職業}

interface CardSectionType {
  readonly time: string;
  readonly content: string;
  readonly userName: string;
  readonly userImg: string;
  readonly userWork: string;
}

export function CardSection({
  time,
  content,
  userName,
  userImg,
  userWork,
}: CardSectionType) {
  return (
    <Card>
      <CardBorder>
        <FlexType $direction={"column"} $align={"flex-start"} $gap={"md"}>
          <FlexType style={{ width: "100%" }} $justify={"space-between"}>
            <FlexType $gap={"xxs"}>
              <Start />
              <Start />
              <Start />
              <Start />
              <Start />
            </FlexType>
            <SpanType $shade={700} $size={"sm"}>
              {time}
            </SpanType>
          </FlexType>
          <Content>{content}</Content>
          <FlexType>
            <Img src={userImg} alt="userImg" />
            <FlexType $direction={"column"} $gap={"xxs"}>
              <SpanType $type={"label"}>{userName}</SpanType>
              <SpanType $shade={700}>{userWork}</SpanType>
            </FlexType>
          </FlexType>
        </FlexType>
      </CardBorder>
    </Card>
  );
}
