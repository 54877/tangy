import { useMediaQuery } from "@mui/material";
import { useInformation } from "../../utils/information";
import type { CoursePayload } from "../../types/createCourseType";
import type {
  CourseCategoryType,
  TagsListType,
} from "../../types/backStageType";
import { useActiveDialog } from "../../utils/dialogLayer";
import { useDialog } from "../../context/dialog/useDialog";
import { DialogBase } from "../../components/dialog/dialogBase";
import { FromInput } from "../../components/Input/Input";
import { FormSelect } from "../../components/select/FromSelect";
import MultiSelectDropdown from "../../components/TagSelector/MultiSelectDropdown";
import { FromRichText } from "../../components/RichText/RichText";
import { FromFileInput } from "../../components/FileInput/FromFileInput";
import { Button } from "../../components/Button/Button";
import { Flex } from "../../components/Input/Input.styled";
import {
  Actions,
  Fields,
  Section,
  SectionHead,
} from "../course/createCourse.styled";

const emptyCourse: CoursePayload = {
  title: "",
  teacher: "",
  rating: "",
  studentCount: "",
  duration: "",
  content: "",
  price: "",
  originalPrice: "",
  categoryKey: "",
  tagsKey: [],
  image: null,
  video: null,
  videoKey: "",
};

export const CourseDialog = () => {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("CourseDialog");
  const { type, title, courseTags, courseCategories } = activeDialog || {};
  const isSmall = useMediaQuery("(max-width:700px)");
  const { information, handleOnChange } = useInformation<CoursePayload>({
    ...emptyCourse,
  });

  const content = (
    <div style={{ display: "grid", gap: 20, paddingBottom: 8 }}>
      <Section>
        <Fields>
          <FromInput
            title="課程名稱"
            required
            fieldKey="title"
            information={information}
            onChange={handleOnChange}
            placeholder="請輸入課程名稱"
          />
          <FromInput
            title="講師名稱"
            required
            fieldKey="teacher"
            information={information}
            onChange={handleOnChange}
            placeholder="請輸入講師名稱"
          />
          <FromInput
            title="售價"
            required
            fieldKey="price"
            information={information}
            onChange={handleOnChange}
            inputMode="numeric"
            placeholder="請輸入售價"
          />
          <FromInput
            title="原價"
            required
            fieldKey="originalPrice"
            information={information}
            onChange={handleOnChange}
            inputMode="numeric"
            placeholder="請輸入原價"
          />
        </Fields>
        <Flex
          $align="flex-start"
          $direction={{ xs: "column", sm: "row" }}
          style={{ marginTop: 20, gap: 20 }}
        >
          <FormSelect<CoursePayload, CourseCategoryType>
            title="課程分類"
            required
            fieldKey="categoryKey"
            information={information}
            onChange={handleOnChange}
            list={courseCategories ?? []}
            labelKey="CategoryName"
            valueKey="categoryKey"
            defaultName="請選擇課程分類"
          />
          <MultiSelectDropdown<CoursePayload, TagsListType>
            title="課程標籤"
            required
            fieldKey="tagsKey"
            information={information}
            onChange={handleOnChange}
            options={courseTags ?? []}
            labelKey="label"
            valueKey="key"
            maxSelected={3}
          />
        </Flex>
      </Section>

      <Section>
        <FromRichText
          title={
            <SectionHead>
              <h2>課程內容</h2>
            </SectionHead>
          }
          required
          fieldKey="content"
          information={information}
          onChange={handleOnChange}
          placeholder="介紹課程內容、適合對象與課程特色。"
        />
      </Section>

      <Section>
        <SectionHead>
          <h2>課程素材</h2>
          <p>選擇課程封面圖片與課程影片。</p>
        </SectionHead>
        <Flex
          $align="flex-start"
          $direction={{ xs: "column", sm: "row" }}
          $gap="xl"
        >
          <FromFileInput
            required
            title="封面圖片"
            fieldKey="image"
            information={information}
            onChange={handleOnChange}
            accept="image/jpeg,image/png"
            allowedTypes={["image/jpeg", "image/png"]}
            allowedExtensions={["jpg", "jpeg", "png"]}
            preview="image"
          />
          <FromFileInput
            required
            title="課程影片"
            fieldKey="video"
            information={information}
            onChange={handleOnChange}
            accept="video/mp4,video/webm"
            allowedTypes={["video/mp4", "video/webm"]}
            allowedExtensions={["mp4", "webm"]}
            preview="video"
          />
        </Flex>
      </Section>

      <Actions>
        <Button text="關閉" onClick={() => closeDialog(activeLayer)} />
      </Actions>
    </div>
  );

  return (
    <DialogBase
      type={type ?? null}
      title={title ?? "課程資料"}
      onClose={() => closeDialog(activeLayer)}
      context={content}
      width={isSmall ? "94%" : "min(900px, 90%)"}
    />
  );
};
