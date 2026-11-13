import { useCallback, useMemo, useState } from "react";
import { Button } from "../../components/Button/Button";
import { ReusableDataTable } from "../../components/DataTable/dataTable";
import { LoadingUi } from "../../components/loading/loading";
import { useFavorite } from "../../context/favorite/useFavorite";
import { useDialog } from "../../context/dialog/useDialog";
import { DialogApiError } from "../../utils/apiError";
import type { TableColumn } from "react-data-table-component";
import { Heading } from "../../styles/components/span";
import type { FavoriteCourseType } from "../../types/profileType";
import dayjs from "dayjs";
import { formatDuration } from "../../utils/Duration";

export const Collect = () => {
  const { favorites, isLoading, removeFavorite } = useFavorite();
  const { openDialog } = useDialog();
  const [removingIds, setRemovingIds] = useState<Set<string>>(() => new Set());

  const handleRemove = useCallback(
    async (courseId: string) => {
      if (removingIds.has(courseId)) return;
      setRemovingIds((current) => new Set(current).add(courseId));
      try {
        await removeFavorite(courseId, {
          optimistic: false,
          delayRefresh: false,
        });
      } catch (error) {
        DialogApiError(error, openDialog, 1);
      } finally {
        setRemovingIds((current) => {
          const next = new Set(current);
          next.delete(courseId);
          return next;
        });
      }
    },
    [openDialog, removeFavorite, removingIds],
  );

  const renderActionButton = useCallback(
    (row: FavoriteCourseType) => (
      <Button
        className="course-rejection-reason"
        text={removingIds.has(row.id) ? <LoadingUi type="button" /> : "移除收藏"}
        disabled={removingIds.has(row.id)}
        style={{ width: "auto", minWidth: "max-content", margin: "0 8px" }}
        onClick={() => void handleRemove(row.id)}
      />
    ),
    [handleRemove, removingIds],
  );

  const columns = useMemo<TableColumn<FavoriteCourseType>[]>(
    () => [
      {
        name: "課程名稱",
        selector: (row) => row.title || "—",
        sortable: true,
      },
      { name: "講師", selector: (row) => row.teacher || "—", sortable: true },
      { name: "分類", selector: (row) => row.category || "—", sortable: true },
      {
        name: "時長",
        selector: (row) => formatDuration(row.duration) || "—",
        sortable: true,
      },
      {
        name: "價格",
        selector: (row) => Number(row.price) || 0,
        cell: (row) => `NT$${row.price}`,
        sortable: true,
      },
      {
        name: "收藏時間",
        selector: (row) => row.favoriteAt || "",
        cell: (row) =>
          row.favoriteAt ? dayjs(row.favoriteAt).format("YYYY年MM月DD日") : "—",
        sortable: true,
        minWidth: "140px",
      },
      {
        name: "操作",
        cell: (row) => renderActionButton(row),
        ignoreRowClick: true,
        button: true,
        minWidth: "140px",
      },
    ],
    [renderActionButton],
  );

  return (
    <section style={{ width: "100%", padding: 16 }}>
      <Heading style={{ marginBottom: 16 }}>我的收藏</Heading>
      {isLoading ? (
        <LoadingUi type="spinner" />
      ) : (
        <ReusableDataTable
          columns={columns}
          data={favorites}
          defaultSortFieldId="favoriteAt"
          defaultSortAsc={false}
        />
      )}
    </section>
  );
};
