import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useInformation } from "../../utils/information";
import type { MyCourseDetailType } from "../../types/backStageType";
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
import { LoadingUi } from "../../components/loading/loading";
import { useLoading } from "../../context/loading/useLoading";
import { useLoadingState } from "../../utils/loading/loading.state";
import { getMyCourseById } from "../../api/profile.api";
import { DialogApiError } from "../../utils/apiError";
import {
  Actions,
  Fields,
  Section,
  SectionHead,
} from "../course/createCourse.styled";

const emptyCourse: MyCourseDetailType = {
  id: "",
  title: "",
  teacher: "",
  rating: "",
  studentCount: "",
  duration: "",
  content: "",
  price: "",
  originalPrice: "",
  categoryKey: "",
  reviewStatus: "PENDING",
  reviewContext: null,
  reviewCount: 0,
  imageUrl: "",
  videoUrl: "",
  tags: [],
  tagsKey: [],
  image: null,
  video: null,
  videoKey: "",
};

export const CourseDialog = () => {
  const { closeDialog, openDialog } = useDialog();
  const { loading } = useLoading();
  const { activeDialog, activeLayer } = useActiveDialog("CourseDialog");
  const {
    type,
    courseId,
    courseDialogTitle,
    confirmButtonText,
    courseTags,
    courseCategories,
    isReadOnly = false,
    onConfirm,
  } = activeDialog || {};
  const isSmall = useMediaQuery("(max-width:700px)");
  const { information, setInformation, handleOnChange } =
    useInformation<MyCourseDetailType>({ ...emptyCourse });
  const hasImageFile = information.image instanceof File;
  const hasVideoFile = information.video instanceof File;
  const isCourseLoading = useLoadingState(6);

  useEffect(() => {
    let isCurrent = true;

    const loadCourseDetail = async () => {
      if (!courseId) {
        return;
      }

      loading(6).start();
      try {
        const response = await getMyCourseById(courseId);
        if (!isCurrent) return;

        const data = response.data.dataSet;
        setInformation({
          ...emptyCourse,
          ...data,
          image: null,
          video: null,
          videoKey: data.videoKey ?? "",
        });
      } catch (error) {
        if (isCurrent) {
          DialogApiError(error, openDialog, 2);
        }
      } finally {
        if (isCurrent) {
          void loading(6).stop();
        }
      }
    };

    void loadCourseDetail();
    return () => {
      isCurrent = false;
    };
  }, [courseId, loading, openDialog, setInformation]);

  const content = (
    <div style={{ display: "grid", gap: 20, paddingBottom: 8 }}>
      <Section>
        <Fields>
          <FromInput
            title="課程名稱"
            required
            disabled={isReadOnly}
            fieldKey="title"
            information={information}
            onChange={handleOnChange}
            placeholder="請輸入課程名稱"
          />
          <FromInput
            title="講師名稱"
            required
            disabled={isReadOnly}
            fieldKey="teacher"
            information={information}
            onChange={handleOnChange}
            placeholder="請輸入講師名稱"
          />
          <FromInput
            title="售價"
            required
            disabled={isReadOnly}
            fieldKey="price"
            information={information}
            onChange={handleOnChange}
            inputMode="numeric"
            placeholder="請輸入售價"
          />
          <FromInput
            title="原價"
            required
            disabled={isReadOnly}
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
          <FormSelect
            title="課程分類"
            required
            disable={isReadOnly}
            fieldKey="categoryKey"
            information={information}
            onChange={handleOnChange}
            list={courseCategories ?? []}
            labelKey="CategoryName"
            valueKey="categoryKey"
            defaultName="請選擇課程分類"
          />
          <MultiSelectDropdown
            title="課程標籤"
            required
            disabled={isReadOnly}
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
              <h2>
                課程內容 <span style={{ color: "#FF2D2D" }}>*</span>
              </h2>
            </SectionHead>
          }
          disabled={isReadOnly}
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
          style={{ marginTop: 20, width: "100%" }}
          $align="stretch"
          $justify="space-between"
          $direction={{ xs: "column", sm: "row" }}
          $gap="xl"
        >
          <div
            style={{
              display: "flex",
              flex: "1 1 0",
              flexDirection: "column",
              minWidth: 0,
              width: "100%",
            }}
          >
            {!isReadOnly && (
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
                layer={2}
              />
            )}
            {!information.image && (
              <div
                style={{
                  display: "flex",
                  flex: "0 0 220px",
                  flexDirection: "column",
                  height: 220,
                  marginTop: hasVideoFile ? 60 : 20,
                }}
              >
                {information.imageUrl ? (
                  <img
                    src={information.imageUrl}
                    alt="課程封面"
                    style={{
                      display: "block",
                      width: "100%",
                      height: 220,
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <span>目前沒有封面圖片</span>
                )}
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flex: "1 1 0",
              flexDirection: "column",
              minWidth: 0,
              width: "100%",
            }}
          >
            {!isReadOnly && (
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
                layer={2}
              />
            )}
            {!information.video && (
              <div
                style={{
                  display: "flex",
                  flex: "0 0 220px",
                  flexDirection: "column",
                  height: 220,
                  marginTop: hasImageFile ? 60 : 20,
                }}
              >
                {information.videoUrl ? (
                  <video
                    src={information.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    style={{
                      display: "block",
                      width: "100%",
                      height: 220,
                      objectFit: "contain",
                    }}
                  >
                    <track
                      kind="captions"
                      src="/captions/course.vtt"
                      srcLang="zh-TW"
                      label="繁體中文"
                    />
                    您的瀏覽器無法播放此課程影片。
                  </video>
                ) : (
                  <span>目前沒有課程影片</span>
                )}
              </div>
            )}
          </div>
        </Flex>
      </Section>

      <Actions>
        <Button
          text={confirmButtonText ?? "關閉"}
          disabled={!onConfirm}
          onClick={() => {
            if (onConfirm) void onConfirm();
          }}
        />
      </Actions>
    </div>
  );

  return (
    <DialogBase
      type={type ?? null}
      title={courseDialogTitle ?? "課程資料"}
      headerContent={
        information.reviewContext ? (
          <div
            style={{
              flex: "0 0 auto",
              margin: "-12px 0 16px",
              padding: "10px 12px",
              border: "1px solid #d32f2f",
              borderRadius: 6,
              color: "#d32f2f",
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
            }}
          >
            {information.reviewContext}
          </div>
        ) : undefined
      }
      onClose={() => closeDialog(activeLayer)}
      context={
        isCourseLoading ? (
          <LoadingUi type="spinner" style={{ minHeight: 180 }} />
        ) : (
          content
        )
      }
      width={isSmall ? "94%" : "min(900px, 90%)"}
    />
  );
};
