import { useOutletContext } from "react-router-dom";
import { type TableColumn } from "react-data-table-component";
import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import dayjs from "dayjs";
import {
  createCourseCategory,
  deleteCourseCategory,
  editCourseCategory,
} from "../../api/backStage.api";
import { ReusableDataTable } from "../../components/DataTable/dataTable";
import { Flex } from "../../components/Input/Input.styled";
import { LoadingUi } from "../../components/loading/loading";
import { Button } from "../../components/Button/Button";
import { useDialog } from "../../context/dialog/useDialog";
import { DialogApiError } from "../../utils/apiError";
import { useLoading } from "../../context/loading/useLoading";
import type {
  BackStageContext,
  CourseCategoryType,
} from "../../types/backStageType";
import { Heading } from "../../styles/components/span";

export const Category = () => {
  const { categoryList, refreshCategoryList } =
    useOutletContext<BackStageContext>();
  const { openDialog } = useDialog();
  const { loading } = useLoading();

  const deleteCategory = async (row: CourseCategoryType) => {
    loading(2).start();
    try {
      await deleteCourseCategory(row.categoryKey);
      await refreshCategoryList();
    } catch (err) {
      DialogApiError(err, openDialog, 1);
    } finally {
      void loading(2).stop();
    }
  };

  const saveCategory = async (name: string, row?: CourseCategoryType) => {
    loading(2).start();
    try {
      if (row) {
        await editCourseCategory(row.categoryKey, name);
      } else {
        await createCourseCategory(name);
      }
      await refreshCategoryList();
    } catch (err) {
      DialogApiError(err, openDialog, 1);
    } finally {
      void loading(2).stop();
    }
  };

  const handleCreateClick = () => {
    openDialog(
      {
        type: "TextInputDialog",
        title: "新增課程分類",
        inputTitle: "課程分類名稱",
        onInputSubmit: (name) => saveCategory(name),
      },
      1,
    );
  };

  const handleEditClick = (row: CourseCategoryType) => {
    openDialog(
      {
        type: "TextInputDialog",
        title: "編輯課程分類",
        inputTitle: "課程分類名稱",
        inputValue: row.CategoryName,
        onInputSubmit: (name) => saveCategory(name, row),
      },
      1,
    );
  };

  const handleDeleteClick = (row: CourseCategoryType) => {
    openDialog(
      {
        type: "MessageDialog",
        title: "刪除課程分類",
        fileErrorMessage: `確定要刪除課程分類「${row.CategoryName}」嗎？`,
        onConfirm: () => deleteCategory(row),
      },
      1,
    );
  };

  const columns: TableColumn<CourseCategoryType>[] = [
    {
      name: "課程分類名稱",
      selector: (row) => row.CategoryName,
      sortable: true,
    },
    {
      name: "創建時間",
      selector: (row) => dayjs(row.createdAt).format("YYYY年MM月DD日"),
      sortable: true,
    },
    {
      name: "使用數量",
      selector: (row) => row.useCount ?? "0",
      sortable: true,
    },
    {
      name: "操作",
      width: "132px",
      cell: (row) => (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <IconButton
            aria-label="編輯"
            title="編輯"
            size="small"
            onClick={() => handleEditClick(row)}
          >
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="刪除"
            title="刪除"
            size="small"
            color="error"
            onClick={() => handleDeleteClick(row)}
          >
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      ),
    },
  ];

  return categoryList === undefined ? (
    <section style={{ margin: "36px" }}>
      <LoadingUi type="spinner" />
    </section>
  ) : (
    <section style={{ width: "100%", padding: 16 }}>
      <Flex style={{ marginBottom: "16px" }} $justify="space-between">
        <Heading>課程分類管理</Heading>
        <Button text="新增課程分類" onClick={handleCreateClick} />
      </Flex>
      <ReusableDataTable columns={columns} data={categoryList} />
    </section>
  );
};
