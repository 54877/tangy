import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { type TableColumn } from "react-data-table-component";
import type { UseUserProps } from "../../types/userType";
import { ReusableDataTable } from "../../components/DataTable/dataTable";
import { LoadingUi } from "../../components/loading/loading";
import type { BackStageContext } from "../../types/backStageType";
import { Button } from "../../components/Button/Button";
import { editUserRole } from "../../api/backStage.api";
import dayjs from "dayjs";
import { useLoading } from "../../context/loading/useLoading";
import { DialogApiError } from "../../utils/apiError";
import { useDialog } from "../../context/dialog/useDialog";
import { Flex } from "../../components/Input/Input.styled";
import { Heading } from "../../styles/components/span";

type UserRoleProps = {
  onclick: () => void;
  disabled: boolean;
};

const UserRole = ({ onclick, disabled }: UserRoleProps) => {
  return <Button text="切換" onClick={onclick} disabled={disabled} />;
};

export const UserList = () => {
  const { userList, setUserList, refreshUserList } =
    useOutletContext<BackStageContext>();
  const { loading } = useLoading();
  const { openDialog } = useDialog();
  const [pendingUserIds, setPendingUserIds] = useState<Set<string>>(
    () => new Set(),
  );
  const rows = userList ?? [];

  const editUserRoleApi = async (row: UseUserProps) => {
    if (pendingUserIds.has(row.id)) return;

    const previousRole = row.role;
    const nextRole = previousRole === "admin" ? "user" : "admin";

    setPendingUserIds((ids) => new Set(ids).add(row.id));
    setUserList((users) =>
      users?.map((user) =>
        user.id === row.id ? { ...user, role: nextRole } : user,
      ),
    );
    loading(2).start();
    try {
      await editUserRole(row.id);
      await refreshUserList();
    } catch (err) {
      console.log(err);
      setUserList((users) =>
        users?.map((user) =>
          user.id === row.id ? { ...user, role: previousRole } : user,
        ),
      );
      DialogApiError(err, openDialog, 1);
    } finally {
      setPendingUserIds((ids) => {
        const nextIds = new Set(ids);
        nextIds.delete(row.id);
        return nextIds;
      });
      void loading(2).stop();
    }
  };

  const renderUserRole = (row: UseUserProps) => (
    <UserRole
      onclick={() => editUserRoleApi(row)}
      disabled={pendingUserIds.has(row.id)}
    />
  );

  const columns: TableColumn<UseUserProps>[] = [
    {
      name: "切換權限",
      selector: (row) => row.id || "—",
      cell: (row) => renderUserRole(row),
    },
    {
      name: "權限",
      id: "role",
      selector: (row) => row.role || "—",
      sortable: true,
    },
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
      name: "創建時間",
      selector: (row) => dayjs(row.createdAt).format("YYYY年MM月DD日") ?? "-",
      sortable: true,
    },
  ];

  return userList === undefined ? (
    <section style={{ margin: "36px" }}>
      <LoadingUi type="spinner" />
    </section>
  ) : (
    <section style={{ width: "100%", padding: 16 }}>
      <Flex style={{ marginBottom: "16px" }} $justify="flex-start">
        <Heading>使用者列表</Heading>
      </Flex>
      <ReusableDataTable
        columns={columns}
        data={rows}
        defaultSortFieldId="role"
        defaultSortAsc
      />
    </section>
  );
};
