import { ImageIcon, PlayCircle } from "lucide-react";
import {
  Actions,
  Container,
  Fields,
  Form,
  Intro,
  Section,
  SectionHead,
} from "./createCourse.styled";
import { useInformation } from "../../utils/information";
import { Heading, SpanType } from "../../styles/components/span";
import { FromInput } from "../../components/Input/Input";
import { FromFileInput } from "../../components/FileInput/FromFileInput";
import { Button } from "../../components/Button/Button";
import { FromRichText } from "../../components/RichText/RichText";
import type { CoursePayload } from "../../types/createType";
import { sanitizeCourseContent } from "../../utils/sanitizeHtml";
import { useEffect } from "react";
import { Flex } from "../../components/Input/Input.styled";

const initialCourse: CoursePayload = {
  title: "",
  teacher: "",
  rating: "5",
  studentCount: "0",
  duration: "",
  content: "",
  price: "",
  originalPrice: "",
  image: null,
  video: null,
  videoKey: "",
};

export function CreateCourse() {
  const { information, handleOnChange } =
    useInformation<CoursePayload>(initialCourse);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...information,
      content: sanitizeCourseContent(information.content),
    };

    // 將 payload 直接作為建立課程 API 的 request body。
    console.log("Create course payload", payload);
  };

  useEffect(() => {
    console.log(information.content);

    console.log(information.video);
    console.log(information.image);
  }, [information]);

  return (
    <Container>
      <Intro>
        <Heading $size={{ xsLg: "lg", lg: "xl" }}>建立新課程</Heading>
        <SpanType $shade={600}>完整填寫課程資料後，即可儲存並上架。</SpanType>
      </Intro>

      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionHead>
            <h2>基本資訊</h2>
            <p>這些內容會顯示在課程卡片與課程頁面。</p>
          </SectionHead>

          <Fields>
            <FromInput
              title="課程名稱"
              required
              fieldKey="title"
              information={information}
              onChange={handleOnChange}
              placeholder="例如：理財新手財務啟蒙之旅"
            />

            <FromInput
              title="講師名稱"
              required
              fieldKey="teacher"
              information={information}
              onChange={handleOnChange}
              placeholder="例如：白老師"
            />

            <FromInput
              title="售價"
              required
              fieldKey="price"
              information={information}
              onChange={handleOnChange}
              inputMode="numeric"
              placeholder="例如：3600"
            />

            <FromInput
              title="原價"
              required
              fieldKey="originalPrice"
              information={information}
              onChange={handleOnChange}
              inputMode="numeric"
              placeholder="例如：5800"
            />
          </Fields>
        </Section>

        <Section>
          <FromRichText
            title={
              <SectionHead>
                <h2>課程內容</h2>
              </SectionHead>
            }
            fieldKey="content"
            information={information}
            onChange={handleOnChange}
            placeholder="介紹課程會學到什麼、適合哪些學員，以及課程特色。"
          />
        </Section>

        <Section>
          <SectionHead>
            <h2>課程素材</h2>
            <p>請選擇課程封面圖片與課程影片。</p>
          </SectionHead>

          <Flex
            $align="flex-start"
            $direction={{ xs: "column", sm: "row" }}
            $gap="xl"
          >
            <Flex $direction="column" style={{ flex: "1 1 0", minWidth: 0 }}>
              <FromFileInput
                title={
                  <>
                    <ImageIcon size={16} /> 封面圖片
                  </>
                }
                fieldKey="image"
                information={information}
                onChange={handleOnChange}
                accept="image/jpeg,image/png"
                allowedTypes={["image/jpeg", "image/png"]}
                allowedExtensions={["jpg", "jpeg", "png"]}
                preview="image"
              />
            </Flex>

            <Flex $direction="column" style={{ flex: "1 1 0", minWidth: 0 }}>
              <FromFileInput
                title={
                  <>
                    <PlayCircle size={16} /> 課程影片
                  </>
                }
                fieldKey="video"
                information={information}
                onChange={handleOnChange}
                accept="video/mp4,video/webm"
                allowedTypes={["video/mp4", "video/webm"]}
                allowedExtensions={["mp4", "webm"]}
                preview="video"
              />
            </Flex>
          </Flex>
        </Section>

        <Actions>
          <Button text="儲存課程" />
        </Actions>
      </Form>
    </Container>
  );
}
