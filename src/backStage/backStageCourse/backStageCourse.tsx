// // import type { TableColumn } from "react-data-table-component";
// import { ReusableDataTable } from "../../components/DataTable/dataTable";
// import { Flex } from "../../components/Input/Input.styled";
// import { LoadingUi } from "../../components/loading/loading";
// import { Heading } from "../../styles/components/span";
// import { useLoading } from "../../context/loading/useLoading";
// import { useDialog } from "../../context/dialog/useDialog";
// import { useState } from "react";

export const BackStageCourse = () => {
  // const { userList, setUserList, refreshUserList } =
  //   useOutletContext<BackStageContext>();
  // const { loading } = useLoading();
  // const { openDialog } = useDialog();
  // const [pendingUserIds, setPendingUserIds] = useState<Set<string>>(
  //   () => new Set(),
  // );
  // const rows = userList ?? [];

  // const columns: TableColumn<UseUserProps>[] = [
  //   {
  //     name: "切換權限",
  //     selector: (row) => row.id || "—",
  //     cell: (row) => renderUserRole(row),
  //   },
  //   {
  //     name: "權限",
  //     id: "role",
  //     selector: (row) => row.role || "—",
  //     sortable: true,
  //   },
  //   {
  //     name: "使用者名稱",
  //     selector: (row) => row.userName || "—",
  //     sortable: true,
  //   },
  //   {
  //     name: "Email",
  //     selector: (row) => row.email || "—",
  //     sortable: true,
  //     grow: 2,
  //   },
  //   {
  //     name: "創建時間",
  //     selector: (row) => dayjs(row.createdAt).format("YYYY年MM月DD日") ?? "-",
  //     sortable: true,
  //   },
  // ];

  // return userList === undefined ? (
  //   <section style={{ margin: "36px" }}>
  //     <LoadingUi type="spinner" />
  //   </section>
  // ) : (
  //   <section style={{ width: "100%", padding: 16 }}>
  //     <Flex style={{ marginBottom: "16px" }} $justify="flex-start">
  //       <Heading>使用者列表</Heading>
  //     </Flex>
  //     <ReusableDataTable
  //       columns={columns}
  //       data={rows}
  //       defaultSortFieldId="role"
  //       defaultSortAsc
  //     />
  //   </section>
  // );
  return <div>123</div>;
};
