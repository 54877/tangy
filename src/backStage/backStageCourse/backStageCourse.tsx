import { useMemo, useState } from "react";
import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { type TableColumn } from "react-data-table-component";
import { useOutletContext } from "react-router-dom";
import { ReusableDataTable } from "../../components/DataTable/dataTable";
import { renderRejectionReasonCell } from "../../components/DataTable/RejectionReasonCell";
import { Flex } from "../../components/Input/Input.styled";
import { LoadingUi } from "../../components/loading/loading";
import { Heading } from "../../styles/components/span";
import type {
  AdminCourseType,
  BackStageContext,
  CourseReviewStatus,
} from "../../types/backStageType";
import { useDialog } from "../../context/dialog/useDialog";
import { useLoading } from "../../context/loading/useLoading";
import { deleteCourse } from "../../api/backStage.api";
import { DialogApiError } from "../../utils/apiError";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { reviewStatusOptions } from "../../constants/courseReviewStatus";

export const BackStageCourse = () => {
  const { courseList, refreshCourseList } =
    useOutletContext<BackStageContext>();
  const { openDialog } = useDialog();
  const { loading } = useLoading();
  const [selectedStatus, setSelectedStatus] =
    useState<CourseReviewStatus>("PENDING");

  const visibleCourses = useMemo(
    () =>
      courseList?.filter((course) => course.reviewStatus === selectedStatus) ??
      [],
    [courseList, selectedStatus],
  );

  const deleteCourseRequest = async (courseId: string) => {
    loading(2).start();
    try {
      await deleteCourse(courseId);
      await refreshCourseList();
    } catch (err) {
      DialogApiError(err, openDialog, 2);
      throw err;
    } finally {
      void loading(2).stop();
    }
  };

  const openDeleteCourseDialog = (course: AdminCourseType) => {
    openDialog(
      {
        type: "MessageDialog",
        title: "刪除課程",
        fileErrorMessage: `確定要刪除課程「${course.title || "未命名課程"}」嗎？`,
        onConfirm: () => deleteCourseRequest(course.id),
      },
      1,
    );
  };

  const renderDeleteCourseButton = (course: AdminCourseType) => (
    <IconButton
      aria-label="刪除"
      title="刪除"
      size="small"
      color="error"
      onClick={(event) => {
        event.stopPropagation();
        openDeleteCourseDialog(course);
      }}
    >
      <DeleteOutlinedIcon fontSize="small" />
    </IconButton>
  );

  const columns: TableColumn<AdminCourseType>[] = [
    {
      name: "課程名稱",
      id: "title",
      selector: (row) => row.title || "—",
      sortable: true,
      grow: 1.5,
      minWidth: "200px",
    },
    {
      name: "建立者",
      selector: (row) => row.userName || "—",
      sortable: true,
    },
    {
      name: "分類",
      selector: (row) => row.category || "—",
      sortable: true,
    },
    {
      name: "標籤",
      selector: (row) => row.tags?.join(", ") || "—",
      grow: 1.2,
      minWidth: "130px",
    },
  ];

  if (selectedStatus !== "REJECTED") {
    columns.push(
      {
        name: "原價",
        selector: (row) => Number(row.originalPrice) || 0,
        cell: (row) => `NT$${row.originalPrice}`,
        sortable: true,
        wrap: false,
        minWidth: "140px",
        grow: 1.2,
      },
      {
        name: "價格",
        selector: (row) => Number(row.price) || 0,
        cell: (row) => `NT$${row.price}`,
        sortable: true,
        wrap: false,
        minWidth: "140px",
        grow: 1.2,
      },
    );
  }

  if (selectedStatus === "APPROVED") {
    columns.push(
      {
        name: "評分",
        selector: (row) => Number(row.rating) || 0,
        cell: (row) => row.rating || "—",
        sortable: true,
        width: "90px",
      },
      {
        name: "學生數",
        selector: (row) => Number(row.studentCount) || 0,
        sortable: true,
        width: "100px",
      },
      {
        name: "操作",
        button: true,
        ignoreRowClick: true,
        allowOverflow: true,
        cell: (course) => renderDeleteCourseButton(course),
      },
    );
  }

  if (selectedStatus === "PENDING") {
    columns.push({
      name: "審核次數",
      selector: (row) => Number(row.reviewCount) || 0,
      width: "110px",
    });
  }

  if (selectedStatus === "REJECTED") {
    columns.push({
      name: "拒絕原因",
      selector: (row) => row.reviewContext || "—",
      cell: (row) => renderRejectionReasonCell(row.reviewContext),
      grow: 1.5,
      maxWidth: "300px",
      wrap: true,
    });
  }

  return courseList === undefined ? (
    <section style={{ margin: "36px" }}>
      <LoadingUi type="spinner" />
    </section>
  ) : (
    <section style={{ width: "100%", padding: 16 }}>
      <Flex
        style={{ marginBottom: 16, gap: 12, flexWrap: "wrap" }}
        $justify="space-between"
      >
        <Heading>課程管理</Heading>
        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          value={selectedStatus}
          aria-label="切換課程審核狀態"
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
        onRowClicked={(course) => {
          if (selectedStatus !== "PENDING") return;
          openDialog(
            {
              type: "CourseDetailDialog",
              courseId: course.id,
              onCourseReviewed: refreshCourseList,
            },
            1,
          );
        }}
      />
    </section>
  );
};
