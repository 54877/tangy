import { useState, type FormEvent } from "react";
import { ArrowLeft, ImageIcon, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Heading, SpanType } from "../styles/components/span";
import {
  Actions,
  Container,
  Field,
  Fields,
  Form,
  Intro,
  Page,
  Preview,
  SecondaryButton,
  Section,
  SectionHead,
} from "./createCourse.styled";

export type CoursePayload = {
  title: string;
  teacher: string;
  rating: string;
  studentCount: string;
  duration: string;
  price: string;
  originalPrice: string;
  image: string;
  video: string;
};

const initialCourse: CoursePayload = {
  title: "",
  teacher: "",
  rating: "5",
  studentCount: "0",
  duration: "",
  price: "",
  originalPrice: "",
  image: "",
  video: "",
};

export function CreateCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = useState<CoursePayload>(initialCourse);

  const updateField = (field: keyof CoursePayload, value: string) => {
    setCourse((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 將 course 直接作為建立課程 API 的 request body。
    console.log("Create course payload", course);
  };

  return (
    <Page>
      <Container>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, color: "#495057" }}
        >
          <ArrowLeft size={18} /> 返回課程列表
        </button>

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
              <Field $full>
                課程名稱 <span>*</span>
                <input required value={course.title} onChange={(e) => updateField("title", e.target.value)} placeholder="例如：理財新手財務啟蒙之旅" />
              </Field>
              <Field>
                講師名稱 <span>*</span>
                <input required value={course.teacher} onChange={(e) => updateField("teacher", e.target.value)} placeholder="例如：白老師" />
              </Field>
              <Field>
                課程時長
                <input value={course.duration} onChange={(e) => updateField("duration", e.target.value)} placeholder="例如：4.6 小時" />
              </Field>
            </Fields>
          </Section>

          <Section>
            <SectionHead>
              <h2>售價與課程數據</h2>
              <p>評分與學員人數已帶入後端預設值，可依需求調整。</p>
            </SectionHead>
            <Fields>
              <Field>
                售價 <span>*</span>
                <input required inputMode="numeric" value={course.price} onChange={(e) => updateField("price", e.target.value)} placeholder="例如：3600" />
              </Field>
              <Field>
                原價 <span>*</span>
                <input required inputMode="numeric" value={course.originalPrice} onChange={(e) => updateField("originalPrice", e.target.value)} placeholder="例如：5800" />
              </Field>
              <Field>
                課程評分
                <input inputMode="decimal" value={course.rating} onChange={(e) => updateField("rating", e.target.value)} placeholder="5" />
              </Field>
              <Field>
                學員人數
                <input inputMode="numeric" value={course.studentCount} onChange={(e) => updateField("studentCount", e.target.value)} placeholder="0" />
              </Field>
            </Fields>
          </Section>

          <Section>
            <SectionHead>
              <h2>課程素材</h2>
              <p>請輸入已上傳至儲存空間的圖片與影片網址。</p>
            </SectionHead>
            <Fields>
              <Field $full>
                <ImageIcon size={16} /> 封面圖片網址 <span>*</span>
                <input required type="url" value={course.image} onChange={(e) => updateField("image", e.target.value)} placeholder="https://example.com/course-cover.jpg" />
                <small>建議使用 16:9 橫式圖片，呈現效果最佳。</small>
              </Field>
              <Field $full>
                <PlayCircle size={16} /> 課程影片網址 <span>*</span>
                <input required type="url" value={course.video} onChange={(e) => updateField("video", e.target.value)} placeholder="https://example.com/course-intro.mp4" />
              </Field>
            </Fields>
            {course.image && (
              <Preview>
                <img src={course.image} alt="課程封面預覽" />
              </Preview>
            )}
          </Section>

          <Actions>
            <SecondaryButton type="button" onClick={() => navigate(-1)}>取消</SecondaryButton>
            <Button text="儲存課程" />
          </Actions>
        </Form>
      </Container>
    </Page>
  );
}
