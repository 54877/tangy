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

interface BackStageContext {
  tagList?: TagsListType[];
}

const TagActions = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <IconButton aria-label={`編輯`} title="編輯" size="small">
      <EditOutlinedIcon fontSize="small" />
    </IconButton>
    <IconButton aria-label={`刪除`} title="刪除" size="small" color="error">
      <DeleteOutlinedIcon fontSize="small" />
    </IconButton>
  </div>
);

export const Tags = () => {
  const { tagList } = useOutletContext<BackStageContext>();

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
      cell: TagActions,
    },
  ];

  return (
    <section style={{ width: "100%", padding: 16 }}>
      <Flex style={{ marginBottom: "16px" }} $justify="space-between">
        <Heading>標籤管理</Heading>
        <Button text="新增標籤" />
      </Flex>
      <ReusableDataTable columns={columns} data={tagList ?? []} />
    </section>
  );
};
