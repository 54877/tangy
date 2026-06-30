import { FlexType } from "../../styles/components/flex";
import { Heading, SpanType } from "../../styles/components/span";

interface CardType {
  readonly img: string;
  readonly title: string;
  readonly content: string;
}

export function CardSm({ img, title, content }: CardType) {
  return (
    <FlexType $direction={"column"} $gap={"spc"}>
      <img src={img} alt={img} />
      <FlexType
        style={{ marginBottom: "12px" }}
        $direction={"column"}
        $gap={"spc"}
      >
        <Heading
          as={"h3"}
          $color={"primary"}
          $shade={600}
          $size={{ xs: "md", sm: "xl" }}
        >
          {title}
        </Heading>
        <SpanType style={{ textAlign: "center" }} $shade={700} $size={"lg"}>
          {content}
        </SpanType>
      </FlexType>
    </FlexType>
  );
}
