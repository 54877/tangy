import { FlexType } from "../../styles/components/flex";
import { Heading } from "../../styles/components/span";
import { Img } from "./CourseSection.styled";

interface sectionType {
  img: string;
  title: string;
}
export function CourseSection({ img, title }: sectionType) {
  return (
    <FlexType style={{ padding: "24px 0" }} $direction={"column"}>
      <Img src={img} alt="img" />
      <Heading as={"h3"} $size={{ xs: "md", sm: "xxxl" }}>
        {title}
      </Heading>
    </FlexType>
  );
}
