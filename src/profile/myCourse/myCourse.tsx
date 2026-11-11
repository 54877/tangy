import { useMemo, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { type TableColumn } from "react-data-table-component";
import { useOutletContext } from "react-router-dom";
import { ReusableDataTable } from "../../components/DataTable/dataTable";
import { renderRejectionReasonCell } from "../../components/DataTable/RejectionReasonCell";
import { Flex } from "../../components/Input/Input.styled";
import { LoadingUi } from "../../components/loading/loading";
import { Heading } from "../../styles/components/span";
import type {
  CourseReviewStatus,
  MyCourseType,
  CourseCategoryType,
  TagsListType,
} from "../../types/backStageType";
import { reviewStatusOptions } from "../../constants/courseReviewStatus";
import { useDialog } from "../../context/dialog/useDialog";

type ProfileOutletContext = {
  myCourseList: MyCourseType[];
  courseTags: TagsListType[];
  courseCategories: CourseCategoryType[];
};

export const MyCourse = () => {
  const { myCourseList, courseTags, courseCategories } =
    useOutletContext<ProfileOutletContext>();
  const { openDialog, closeDialog } = useDialog();
  const [selectedStatus, setSelectedStatus] =
    useState<CourseReviewStatus>("PENDING");

  const visibleCourses = useMemo(
    () =>
      myCourseList?.filter(
        (course) => course.reviewStatus === selectedStatus,
      ) ?? [],
    [myCourseList, selectedStatus],
  );

  const openCourseDialog = (course: MyCourseType) => {
    if (course.reviewStatus === "APPROVED") return;

    const isRejected = course.reviewStatus === "REJECTED";
    openDialog(
      {
        type: "CourseDialog",
        courseId: course.id,
        courseDialogTitle: isRejected ? "修改課程" : "待審核課程",
        confirmButtonText: isRejected ? "重新送審" : "關閉",
        isReadOnly: !isRejected,
        courseTags,
        courseCategories,
        onConfirm: isRejected ? undefined : () => closeDialog(1),
      },
      1,
    );
  };

  const columns = useMemo<TableColumn<MyCourseType>[]>(() => {
    const baseColumns: TableColumn<MyCourseType>[] = [
      {
        name: "課程名稱",
        id: "title",
        selector: (row) => row.title || "—",
        sortable: true,
        grow: 1.5,
        maxWidth: "200px",
      },
      {
        name: "講師",
        selector: (row) => row.teacher || "—",
        sortable: true,
      },
      {
        name: "分類",
        selector: (row) => row.category || "—",
        sortable: true,
      },
    ];

    if (selectedStatus !== "REJECTED") {
      baseColumns.push({
        name: "價格",
        selector: (row) => Number(row.price) || 0,
        cell: (row) => `NT$${row.price}`,
        sortable: true,
        maxWidth: "120px",
      });
    }

    if (selectedStatus === "APPROVED") {
      baseColumns.push(
        {
          name: "原價",
          selector: (row) => Number(row.originalPrice) || 0,
          cell: (row) => `NT$${row.originalPrice}`,
          sortable: true,
          maxWidth: "120px",
        },
        {
          name: "學生數",
          selector: (row) => Number(row.studentCount) || 0,
          sortable: true,
          maxWidth: "110px",
        },
        {
          name: "評分",
          selector: (row) => Number(row.rating) || 0,
          cell: (row) => row.rating || "—",
          sortable: true,
          maxWidth: "90px",
        },
      );
    }

    if (selectedStatus === "PENDING") {
      baseColumns.push({
        name: "審核次數",
        selector: (row) => Number(row.reviewCount) || 0,
        sortable: true,
        maxWidth: "120px",
      });
    }

    if (selectedStatus === "REJECTED") {
      baseColumns.push(
        {
          name: "拒絕原因",
          selector: (row) => row.reviewContext || "—",
          cell: (row) => renderRejectionReasonCell(row.reviewContext),
          grow: 1.5,
          maxWidth: "200px",
          wrap: true,
        },
        {
          name: "審核次數",
          selector: (row) => Number(row.reviewCount) || 0,
          sortable: true,
          maxWidth: "110px",
        },
      );
    }

    return baseColumns;
  }, [selectedStatus]);

  if (myCourseList === undefined || courseTags === undefined) {
    return (
      <section style={{ width: "100%", padding: 16 }}>
        <LoadingUi type="spinner" />
      </section>
    );
  }

  return (
    <section style={{ width: "100%", padding: 16 }}>
      <Flex
        style={{ marginBottom: 16, gap: 12, flexWrap: "wrap" }}
        $justify="space-between"
      >
        <Heading>我的課程</Heading>
        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          value={selectedStatus}
          aria-label="切換我的課程審核狀態"
          onChange={(_, value: CourseReviewStatus | null) => {
            if (value) setSelectedStatus(value);
          }}
        >
          {reviewStatusOptions.map((option) => (
            <ToggleButton key={option.value} value={option.value}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Flex>
      <ReusableDataTable
        columns={columns}
        data={visibleCourses}
        defaultSortFieldId="title"
        pointerOnHover
        onRowClicked={(course) => openCourseDialog(course)}
      />
    </section>
  );
};
