import { useOutletContext } from "react-router-dom";
import { type TableColumn } from "react-data-table-component";
import { Typography } from "@mui/material";
import type { UseUserProps } from "../../types/userType";
import { ReusableDataTable } from "../../components/DataTable/dataTable";

interface BackStageContext {
  userList?: UseUserProps[];
}

const columns: TableColumn<UseUserProps>[] = [
  {
    name: "使用者名稱",
    selector: (row) => row.userName || "—",
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email || "—",
    sortable: true,
    grow: 2,
  },
  {
    name: "角色",
    selector: (row) => row.role || "—",
    sortable: true,
  },
];

export const UserList = () => {
  const { userList = [] } = useOutletContext<BackStageContext>();

  return (
    <section style={{ width: "100%", padding: 16 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
        使用者列表
      </Typography>
      <ReusableDataTable columns={columns} data={userList} />
    </section>
  );
};
