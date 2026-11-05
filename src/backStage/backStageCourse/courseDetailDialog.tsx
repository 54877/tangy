import { useEffect, useMemo, useState } from "react";
import { getCourseById, reviewCourse } from "../../api/backStage.api";
import { Button } from "../../components/Button/Button";
import { DialogBase } from "../../components/dialog/dialogBase";
import { Flex } from "../../components/Input/Input.styled";
import { LoadingUi } from "../../components/loading/loading";
import { useDialog } from "../../context/dialog/useDialog";
import { useLoading } from "../../context/loading/useLoading";
import { SpanType } from "../../styles/components/span";
import { useActiveDialog } from "../../utils/dialogLayer";
import { sanitizeCourseContent } from "../../utils/sanitizeHtml";
import { DialogApiError } from "../../utils/apiError";
import { useLoadingState } from "../../utils/loading/loading.state";
import type {
  AdminCourseType,
  CourseReviewStatus,
} from "../../types/backStageType";
import {
  CourseContent,
  CourseCover,
  CourseHeader,
  CourseVideo,
  DialogFooter,
  DialogTitle,
  FooterActions,
  Instructor,
  MetricsGrid,
  RejectButton,
  ReviewNotice,
  StatusBadge,
  SummaryTitle,
  Tag,
  Tags,
  CoverFallback,
} from "./courseDetailDialog.styled";
import { Metric } from "./Metric";

const formatDuration = (value: string) => {
  const seconds = Number(value);
  if (!Number.isFinite(seconds) || seconds < 0) return value || "—";
  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes} 分 ${remainingSeconds} 秒`;
};

export function CourseDetailDialog() {
  const { closeDialog, openDialog } = useDialog();
  const { loading } = useLoading();
  const { activeDialog, activeLayer } = useActiveDialog("CourseDetailDialog");
  const courseId = activeDialog.courseId;
  const [courseDetail, setCourseDetail] = useState<AdminCourseType>();
  const isCourseLoading = useLoadingState(6);
  const close = () => closeDialog(activeLayer);

  useEffect(() => {
    let isCurrent = true;

    const loadCourseDetail = async () => {
      if (!courseId) {
        return;
      }
      loading(6).start();
      try {
        const res = await getCourseById(courseId);
        const dataSet = res.data.dataSet;
        if (isCurrent) {
          setCourseDetail(dataSet);
        }
      } catch (err) {
        if (isCurrent) DialogApiError(err, openDialog, 2);
      } finally {
        if (isCurrent) await loading(6).stop();
      }
    };

    void loadCourseDetail();
    return () => {
      isCurrent = false;
      void loading(6).stop();
    };
  }, [courseId, loading, openDialog]);

  const handleReview = async (
    reviewStatus: Extract<CourseReviewStatus, "APPROVED" | "REJECTED">,
    reviewContext?: string,
  ) => {
    if (!courseDetail?.id || isCourseLoading) return;
    loading(6).start();
    try {
      if (reviewStatus === "REJECTED") {
        await reviewCourse(courseDetail.id, reviewStatus, reviewContext);
      } else {
        await reviewCourse(courseDetail.id, reviewStatus);
      }
      await activeDialog.onCourseReviewed?.();
      close();
    } catch (err) {
      DialogApiError(err, openDialog, 2);
    } finally {
      await loading(6).stop();
    }
  };

  const safeContent = useMemo(
    () => sanitizeCourseContent(courseDetail?.content ?? ""),
    [courseDetail?.content],
  );

  if (!courseDetail) {
    return (
      <DialogBase
        type={activeDialog.type}
        title="課程詳細資料"
        onClose={close}
        context={
          isCourseLoading ? (
            <LoadingUi type="spinner" style={{ minHeight: 180 }} />
          ) : (
            <SpanType $size="sm" $shade={700}>
              無法載入課程資料
            </SpanType>
          )
        }
        width="900px"
      />
    );
  }

  const dialogTitle = (
    <DialogTitle
      $direction="row"
      $align="center"
      $justify="flex-start"
      $gap="sm"
    >
      課程詳細資料
      <SpanType $size="lg" $shade={500}>
        ( {courseDetail.userName || "—"} )
      </SpanType>
    </DialogTitle>
  );

  const context = (
    <Flex $direction="column" $align="stretch" $justify="flex-start" $gap="lg">
      <CourseHeader>
        {courseDetail.imageUrl ? (
          <CourseCover
            src={courseDetail.imageUrl}
            alt={`${courseDetail.title} 課程封面`}
          />
        ) : (
          <CoverFallback $size="xs" $shade={700} aria-label="沒有課程封面">
            尚無課程封面
          </CoverFallback>
        )}

        <div>
          <StatusBadge $type="label" $size="xs" $color="warning" $shade={800}>
            <span aria-hidden="true">● 待審核</span>
          </StatusBadge>

          <SummaryTitle $size="sm" $color="gray" $shade={950}>
            {courseDetail.title || "未命名課程"}
          </SummaryTitle>
          <Instructor $type="label" $size="sm" $shade={800}>
            課程分類 : {courseDetail.category || "—"}
          </Instructor>

          <Instructor $type="label" $size="sm" $shade={800}>
            講師 : {courseDetail.teacher || "—"}
          </Instructor>
          <Tags
            $direction="row"
            $align="center"
            $justify="flex-start"
            $gap="sm"
          >
            {courseDetail.tags?.map((tag) => (
              <Tag
                key={tag}
                $type="label"
                $size="xs"
                $color="success"
                $shade={800}
              >
                # {tag}
              </Tag>
            ))}
          </Tags>
        </div>
      </CourseHeader>

      <Flex
        as="section"
        $direction="column"
        $align="stretch"
        $justify="flex-start"
        $gap="sm"
      >
        <SpanType $type="label" $size="sm" $shade={800}>
          課程資訊
        </SpanType>
        <MetricsGrid>
          <Metric
            label="課程價格"
            value={`NT$${courseDetail.price}`}
            highlight
          />
          <Metric label="原價" value={`NT$${courseDetail.originalPrice}`} />
          <Metric
            label="評分"
            value={courseDetail.rating ? `★ ${courseDetail.rating}` : "—"}
          />
          <Metric
            label="學生數"
            value={`${courseDetail.studentCount || "0"} 人`}
          />
        </MetricsGrid>
      </Flex>

      <Flex
        as={"section"}
        $direction="column"
        $align="stretch"
        $justify="flex-start"
        $gap="lg"
      >
        {courseDetail.videoUrl && (
          <>
            <Flex $direction="column" $align="flex-start" $gap="sm">
              <SpanType $type="label" $size="sm" $shade={800}>
                課程影片
              </SpanType>
              <CourseVideo
                src={courseDetail.videoUrl}
                controls
                playsInline
                preload="metadata"
              >
                您的瀏覽器不支援影片播放。
              </CourseVideo>
            </Flex>

            <Flex $justify="flex-start" $align="center" $gap="sm">
              <SpanType $type="label" $size="sm" $shade={800}>
                課程總時長 :
              </SpanType>
              <SpanType $type="label" $size="sm" $shade={800}>
                {formatDuration(courseDetail.duration)}
              </SpanType>
            </Flex>
          </>
        )}
        <Flex
          $justify="flex-start"
          $align="stretch"
          $direction="column"
          $gap="sm"
        >
          <SpanType $type="label" $size="sm" $shade={800}>
            課程內容
          </SpanType>
          <CourseContent
            $size="sm"
            $shade={700}
            dangerouslySetInnerHTML={{ __html: safeContent || "尚無課程內容" }}
          />
        </Flex>
      </Flex>

      <DialogFooter
        as="footer"
        $direction={{ xs: "column", sm: "row" }}
        $align={{ xs: "stretch", sm: "center" }}
        $justify="space-between"
        $gap="md"
      >
        <ReviewNotice
          $direction="row"
          $align="center"
          $justify="flex-start"
          $gap="sm"
        >
          <SpanType $size="xs" $shade={400}>
            審核前請確認課程內容、標籤，若課程內容不符規範，請拒絕課程。
          </SpanType>
        </ReviewNotice>
        <FooterActions
          $direction="row"
          $align="center"
          $justify={{ xs: "space-between", xsLg: "flex-end" }}
          $gap="sm"
        >
          <RejectButton
            text="拒絕課程"
            disabled={isCourseLoading}
            onClick={() =>
              openDialog(
                {
                  type: "TextInputDialog",
                  title: "拒絕課程",
                  inputTitle: "拒絕原因",
                  fieldKey: "reviewContext",
                  onInputSubmit: (reason) => handleReview("REJECTED", reason),
                },
                2,
              )
            }
          />
          <Button
            text={
              isCourseLoading ? (
                <LoadingUi type="button" />
              ) : (
                "核准課程"
              )
            }
            disabled={isCourseLoading}
            onClick={() => void handleReview("APPROVED")}
          />
        </FooterActions>
      </DialogFooter>
    </Flex>
  );

  return (
    <DialogBase
      type={activeDialog.type}
      title={dialogTitle}
      onClose={close}
      context={context}
      width="900px"
    />
  );
}
