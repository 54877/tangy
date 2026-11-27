import { ImageIcon, PlayCircle } from "lucide-react";
import {
  Actions,
  Container,
  Fields,
  Form,
  Intro,
  Section,
  SectionHead,
  UploadProgress,
} from "./createCourse.styled";
import { useInformation } from "../../utils/information";
import { Heading, SpanType } from "../../styles/components/span";
import { FromInput } from "../../components/Input/Input";
import { FromFileInput } from "../../components/FileInput/FromFileInput";
import { Button } from "../../components/Button/Button";
import { FromRichText } from "../../components/RichText/RichText";
import type { CoursePayload } from "../../types/createCourseType";
import { sanitizeCourseContent } from "../../utils/sanitizeHtml";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Flex } from "../../components/Input/Input.styled";
import { useLoading } from "../../context/loading/useLoading";
import { createCourse, getUploadToken } from "../../api/profile.api";
import { DialogApiError } from "../../utils/apiError";
import type { FormError } from "../../types/errorType";
import { LoadingUi } from "../../components/loading/loading";
import { useLoadingState } from "../../utils/loading/loading.state";
import { formValidate } from "../../utils/formValidate";
import MultiSelectDropdown from "../../components/TagSelector/MultiSelectDropdown";
import { FormSelect } from "../../components/select/FromSelect";
import type {
  CourseCategoryType,
  TagsListType,
} from "../../types/backStageType";
import { useDialog } from "../../context/dialog/useDialog";
import {
  uploadStandardVideo,
  uploadTusVideo,
} from "../../utils/uploadTusVideo";

type CourseFormOptionsContext = {
  courseTags: TagsListType[];
  courseCategories: CourseCategoryType[];
  invalidateMyCourseList: () => void;
};

const initialCourse: CoursePayload = {
  title: "",
  teacher: "",
  rating: "5",
  studentCount: "0",
  duration: "",
  content: "",
  price: "",
  originalPrice: "",
  categoryKey: "",
  tagsKey: [],
  image: null,
  video: null,
  videoKey: "",
  videoTicket: "",
};

export function CreateCourse() {
  const {
    courseTags: tagList,
    courseCategories: categoryList,
    invalidateMyCourseList,
  } = useOutletContext<CourseFormOptionsContext>();
  const { information, handleOnChange, setInformation } =
    useInformation<CoursePayload>(initialCourse);
  const { loading } = useLoading();
  const [err, setErr] = useState<FormError<CoursePayload>>({});
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const isLoading = useLoadingState(3);
  const { openDialog } = useDialog();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...information,
      content: sanitizeCourseContent(information.content),
    };

    formValidate<CoursePayload>({
      information,
      fields: [
        // "title",
        // "teacher",
        // "content",
        // "price",
        // "originalPrice",
        // "categoryKey",
        // "tagsKey",
        // "image",
        "video",
      ],
      setErr,
      fn: () => getUploadTokenApi(payload),
    });
  };

  //影片API
  const getUploadTokenApi = async (payload: CoursePayload) => {
    const { video } = payload;
    if (!video) return;
    setUploadProgress(0);
    loading(3).start();

    try {
      const res = await getUploadToken(video.name, video.size, video.type);
      const data = res.data.dataSet;
      const method = data.method;
      if (method !== "tus" && method !== "standard") {
        throw new Error(`不支援的影片上傳方式：${data.method}`);
      }
      if (method == "tus") {
        throw new Error(`TUS 上船有異常暫不使用}`);
        //await uploadTusVideo(video, data, setUploadProgress);
      }

      if (method == "standard") {
        await uploadStandardVideo(video, data);
      }
      // const info = {
      //   ...payload,
      //   videoKey: data.path,
      //   videoTicket: data.uploadId,
      // };
      //await createCourseApi(info);
    } catch (err) {
      DialogApiError(err, openDialog, 1);
    } finally {
      setUploadProgress(null);
      await loading(3).stop();
    }
  };

  //創建課程API
  const createCourseApi = async (info: CoursePayload) => {
    try {
      await createCourse(info);
      invalidateMyCourseList();
      setInformation(initialCourse);
    } catch (err) {
      await loading(3).stop();
      DialogApiError(err, openDialog, 1);
    }
  };

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
              err={err}
              title="課程名稱"
              required
              fieldKey="title"
              information={information}
              onChange={handleOnChange}
              placeholder="例如：理財新手財務啟蒙之旅"
            />

            <FromInput
              err={err}
              title="講師名稱"
              required
              fieldKey="teacher"
              information={information}
              onChange={handleOnChange}
              placeholder="例如：白老師"
            />

            <FromInput
              err={err}
              title="售價"
              required
              fieldKey="price"
              information={information}
              onChange={handleOnChange}
              inputMode="numeric"
              placeholder="例如：3600"
            />

            <FromInput
              err={err}
              title="原價"
              required
              fieldKey="originalPrice"
              information={information}
              onChange={handleOnChange}
              inputMode="numeric"
              placeholder="例如：5800"
            />
          </Fields>

          <Flex
            $align="flex-start"
            $direction={{ xs: "column", sm: "row" }}
            style={{ marginTop: "20px", gap: "20px" }}
          >
            <FormSelect
              err={err}
              title="課程分類"
              required
              fieldKey="categoryKey"
              information={information}
              onChange={handleOnChange}
              list={categoryList}
              labelKey="CategoryName"
              valueKey="categoryKey"
              defaultName="請選擇課程分類"
            />

            <MultiSelectDropdown
              title="課程標籤"
              required
              fieldKey="tagsKey"
              information={information}
              onChange={handleOnChange}
              options={tagList ?? []}
              labelKey="label"
              valueKey="key"
              err={err}
              maxSelected={3}
            />
          </Flex>
        </Section>

        <Section>
          <FromRichText
            err={err}
            title={
              <SectionHead>
                <h2>
                  課程內容 <span style={{ color: "#FF2D2D" }}>*</span>
                </h2>
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
                required
                err={err}
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
                required
                err={err}
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
              {uploadProgress !== null && (
                <UploadProgress>
                  <span>影片上傳中：{uploadProgress}%</span>
                  <progress
                    aria-label="影片上傳進度"
                    value={uploadProgress}
                    max={100}
                  />
                </UploadProgress>
              )}
            </Flex>
          </Flex>
        </Section>

        <Actions>
          <Button text={isLoading ? <LoadingUi type="button" /> : "儲存課程"} />
        </Actions>
      </Form>
    </Container>
  );
}
