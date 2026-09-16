import { ImageIcon, PlayCircle } from "lucide-react";
import {
  Actions,
  Container,
  Fields,
  Form,
  Intro,
  Preview,
  Section,
  SectionHead,
} from "./createCourse.styled";
import { useInformation } from "../../utils/information";
import { Heading, SpanType } from "../../styles/components/span";
import { FromInput } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { FromRichText } from "../../components/RichText/RichText";
import type { CoursePayload } from "../../types/createType";
import { sanitizeCourseContent } from "../../utils/sanitizeHtml";
import { useEffect } from "react";

const initialCourse: CoursePayload = {
  title: "",
  teacher: "",
  rating: "5",
  studentCount: "0",
  duration: "",
  content: "",
  price: "",
  originalPrice: "",
  image: "",
  video: "",
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
            <p>請輸入已上傳至儲存空間的圖片與影片網址。</p>
          </SectionHead>

          <Fields>
            <FromInput
              title={
                <>
                  <ImageIcon size={16} /> 封面圖片網址
                </>
              }
              required
              fieldKey="image"
              information={information}
              onChange={handleOnChange}
              type="url"
              placeholder="https://example.com/course-cover.jpg"
              content="建議使用 16:9 橫式圖片，呈現效果最佳。"
            />

            <FromInput
              title={
                <>
                  <PlayCircle size={16} /> 課程影片網址
                </>
              }
              required
              fieldKey="video"
              information={information}
              onChange={handleOnChange}
              type="url"
              placeholder="https://example.com/course-intro.mp4"
            />
          </Fields>

          {information.image && (
            <Preview>
              <img src={information.image} alt="課程封面預覽" />
            </Preview>
          )}
        </Section>

        <Actions>
          <Button text="儲存課程" />
        </Actions>
      </Form>
    </Container>
  );
}
