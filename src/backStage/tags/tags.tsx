import { useOutletContext } from "react-router-dom";
import { type TableColumn } from "react-data-table-component";
import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import type { TagsListType } from "../../types/backStageType";
import { ReusableDataTable } from "../../components/DataTable/dataTable";
import { Flex } from "../../components/Input/Input.styled";
import { Heading } from "../../styles/components/span";
import { Button } from "../../components/Button/Button";
import dayjs from "dayjs";
import { LoadingUi } from "../../components/loading/loading";
import {
  createTag as createTagRequest,
  deleteTag as deleteTagRequest,
  editTag as editTagRequest,
} from "../../api/backStage.api";
import { useDialog } from "../../context/dialog/useDialog";
import { useLoading } from "../../context/loading/useLoading";
import { DialogApiError } from "../../utils/apiError";
import type { BackStageContext } from "../../types/backStageType";

interface TagActionsProps {
  row: TagsListType;
  onEdit: (row: TagsListType) => void;
  onDelete: (row: TagsListType) => void;
}

const TagActions = ({ row, onEdit, onDelete }: TagActionsProps) => (
  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <IconButton
      aria-label="編輯"
      title="編輯"
      size="small"
      onClick={() => onEdit(row)}
    >
      <EditOutlinedIcon fontSize="small" />
    </IconButton>
    <IconButton
      aria-label="刪除"
      title="刪除"
      size="small"
      color="error"
      onClick={() => onDelete(row)}
    >
      <DeleteOutlinedIcon fontSize="small" />
    </IconButton>
  </div>
);

export const Tags = () => {
  const { tagList, refreshTagList } = useOutletContext<BackStageContext>();
  const { openDialog } = useDialog();
  const { loading } = useLoading();

  const createTag = async (label: string) => {
    loading(2).start();
    try {
      await createTagRequest(label);
      await refreshTagList();
    } catch (err) {
      DialogApiError(err, openDialog, 1);
    } finally {
      void loading(2).stop();
    }
  };

  const editTag = async (row: TagsListType, label: string) => {
    loading(2).start();
    try {
      await editTagRequest(row.key, label);
      await refreshTagList();
    } catch (err) {
      DialogApiError(err, openDialog, 1);
    } finally {
      void loading(2).stop();
    }
  };

  const deleteTag = async (row: TagsListType) => {
    loading(2).start();
    try {
      await deleteTagRequest(row.key);
      await refreshTagList();
    } catch (err) {
      DialogApiError(err, openDialog, 1);
    } finally {
      void loading(2).stop();
    }
  };

  const handleEditClick = (row: TagsListType) => {
    openDialog(
      {
        type: "TextInputDialog",
        title: "編輯標籤",
        inputTitle: "標籤名稱",
        inputValue: row.label,
        onInputSubmit: (label) => editTag(row, label),
      },
      1,
    );
  };

  const handleDeleteClick = (row: TagsListType) => {
    openDialog(
      {
        type: "MessageDialog",
        title: "刪除標籤",
        fileErrorMessage: `確定要刪除標籤「${row.label}」嗎？`,
        onConfirm: () => deleteTag(row),
      },
      1,
    );
  };

  const renderTagActions = (row: TagsListType) => (
    <TagActions
      row={row}
      onEdit={handleEditClick}
      onDelete={handleDeleteClick}
    />
  );

  const columns: TableColumn<TagsListType>[] = [
    {
      name: "標籤名稱",
      selector: (row) => row.label,
      sortable: true,
    },
    {
      name: "創建時間",
      selector: (row) => dayjs(row.createTime).format("YYYY年MM月DD日") ?? "-",
      sortable: true,
    },
    {
      name: "使用數量",
      selector: (row) => row.num ?? "0",
      sortable: true,
    },
    {
      name: "操作",
      width: "132px",
      cell: renderTagActions,
    },
  ];

  return tagList === undefined ? (
    <section style={{ margin: "36px" }}>
      <LoadingUi type="spinner" />
    </section>
  ) : (
    <section style={{ width: "100%", padding: 16 }}>
      <Flex style={{ marginBottom: "16px" }} $justify="space-between">
        <Heading>標籤管理</Heading>
        <Button
          onClick={() =>
            openDialog(
              {
                type: "TextInputDialog",
                title: "新增標籤",
                inputTitle: "標籤名稱",
                onInputSubmit: createTag,
              },
              1,
            )
          }
          text="新增標籤"
        />
      </Flex>
      <ReusableDataTable columns={columns} data={tagList ?? []} />
    </section>
  );
};
