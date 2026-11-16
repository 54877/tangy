import DataTable, { type TableProps } from "react-data-table-component";
import { useCallback, useLayoutEffect, useRef } from "react";
import { NoDataComponent } from "./NoData";
import { customStyles, DataTableCard } from "./dataTable.styled";

export type ReusableDataTableProps<T> = Omit<
  TableProps<T>,
  "columns" | "data"
> & {
  columns: TableProps<T>["columns"];
  data: T[];
  /** 在此容器寬度以下套用窄螢幕表格行為，單位為 px。 */
  responsiveBreakpoint?: number;
};

type MeasuredProperty = "flex" | "width" | "min-width";
type SavedCellStyles = Record<
  MeasuredProperty,
  { value: string; priority: string }
>;
const measuredProperties: MeasuredProperty[] = ["flex", "width", "min-width"];
const originalCellStyles = new WeakMap<HTMLElement, SavedCellStyles>();
const adjustedCellsByCard = new WeakMap<HTMLDivElement, Set<HTMLElement>>();

/** 窄螢幕時，依每欄最寬的表頭或資料內容設定一致欄寬，避免文字重疊並維持對齊。 */
const syncResponsiveColumnWidths = (
  card: HTMLDivElement,
  responsiveBreakpoint: number,
) => {
  const previouslyAdjustedCells = adjustedCellsByCard.get(card);
  previouslyAdjustedCells?.forEach((cell) => {
    const styles = originalCellStyles.get(cell);
    if (!styles) return;
    measuredProperties.forEach((property) => {
      const original = styles[property];
      if (original.value) {
        cell.style.setProperty(property, original.value, original.priority);
      } else {
        cell.style.removeProperty(property);
      }
    });
    originalCellStyles.delete(cell);
  });
  previouslyAdjustedCells?.clear();

  // 依表格實際可用寬度判斷
  if (card.clientWidth > responsiveBreakpoint) return;

  // 取得表頭和目前顯示的資料列，後續按欄位位置一起計算寬度。
  const headers = Array.from(
    card.querySelectorAll<HTMLElement>(".rdt_TableHeadRow .rdt_TableCol"),
  );
  if (!headers.length) return;
  const rows = Array.from(card.querySelectorAll<HTMLElement>(".rdt_TableRow"));
  const cellRows = [
    headers,
    ...rows.map((row) =>
      Array.from(row.querySelectorAll<HTMLElement>(".rdt_TableCell")),
    ),
  ];

  // 用單一 class 暫時切換量測樣式，避免逐格寫入及還原 inline styles。
  const widths = headers.map(() => 0);
  card.classList.add("rdt-measuring-content");
  try {
    // 先集中套用樣式，再逐格讀取一次尺寸，避免讀寫交錯造成重複 layout。
    cellRows.forEach((cells) => {
      cells.forEach((cell, index) => {
        const currentWidth = widths[index];
        if (currentWidth === undefined) return;
        widths[index] = Math.max(
          currentWidth,
          cell.getBoundingClientRect().width,
        );
      });
    });
  } finally {
    card.classList.remove("rdt-measuring-content");
  }

  // 將同一欄的寬度同步套用到表頭和各資料列，確保欄位對齊。
  const adjustedCells = adjustedCellsByCard.get(card) ?? new Set<HTMLElement>();
  adjustedCellsByCard.set(card, adjustedCells);
  cellRows.forEach((row) =>
    row.forEach((cell, index) => {
      const width = widths[index];
      if (width === undefined) return;
      const originalStyles: SavedCellStyles = {
        flex: {
          value: cell.style.getPropertyValue("flex"),
          priority: cell.style.getPropertyPriority("flex"),
        },
        width: {
          value: cell.style.getPropertyValue("width"),
          priority: cell.style.getPropertyPriority("width"),
        },
        "min-width": {
          value: cell.style.getPropertyValue("min-width"),
          priority: cell.style.getPropertyPriority("min-width"),
        },
      };
      originalCellStyles.set(cell, originalStyles);
      adjustedCells.add(cell);
      cell.style.setProperty("flex", `0 0 ${width}px`, "important");
      cell.style.setProperty("width", `${width}px`, "important");
      cell.style.setProperty("min-width", `${width}px`, "important");
    }),
  );
};

export const ReusableDataTable = <T,>({
  columns,
  data,
  responsiveBreakpoint = 900,
  pagination = true,
  paginationPerPage = 20,
  paginationRowsPerPageOptions = [5, 10, 20, 50],
  highlightOnHover = true,
  responsive = true,
  defaultSortAsc = true,
  customStyles: customStylesProp = customStyles,
  noDataComponent = <NoDataComponent />,
  onChangePage,
  onChangeRowsPerPage,
  onSort,
  onRowExpandToggled,
  onFilterChange,
  onColumnOrderChange,
  onColumnGroupOrderChange,
  ...tableProps
}: ReusableDataTableProps<T>) => {
  const tableCardRef = useRef<HTMLDivElement>(null);
  const measurementFrameRef = useRef(0);

  const scheduleResponsiveWidths = useCallback(() => {
    const card = tableCardRef.current;
    if (!card) return;
    cancelAnimationFrame(measurementFrameRef.current);
    measurementFrameRef.current = requestAnimationFrame(() =>
      syncResponsiveColumnWidths(card, responsiveBreakpoint),
    );
  }, [responsiveBreakpoint]);

  useLayoutEffect(() => {
    const card = tableCardRef.current;
    if (!card) return;

    scheduleResponsiveWidths();

    // 欄位 props 變更後，DataTable 會在自己的 effect 更新內部欄位狀態；
    // 監聽表格本體可在實際 DOM 更新後補做量測，避免只量到前一個狀態。
    const table = card.querySelector<HTMLElement>(".rdt_Table");
    const tableMutationObserver = new MutationObserver(
      scheduleResponsiveWidths,
    );
    if (table) {
      tableMutationObserver.observe(table, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    // 容器高度也會因資料列換行改變；只有可用寬度變動時才需要重算欄寬。
    let observedWidth = card.clientWidth;
    const syncOnWidthChange = () => {
      const nextWidth = card.clientWidth;
      if (nextWidth === observedWidth) return;
      observedWidth = nextWidth;
      scheduleResponsiveWidths();
    };
    const widthObserver = new ResizeObserver(syncOnWidthChange);
    widthObserver.observe(card);

    return () => {
      cancelAnimationFrame(measurementFrameRef.current);
      tableMutationObserver.disconnect();
      widthObserver.disconnect();
    };
  }, [scheduleResponsiveWidths]);

  // 資料、欄位或受控表格狀態改變時，直接排程量測。
  useLayoutEffect(() => {
    scheduleResponsiveWidths();
  }, [
    columns,
    data,
    pagination,
    paginationPerPage,
    tableProps.paginationPage,
    tableProps.paginationResetDefaultPage,
    tableProps.filterValues,
    tableProps.expandableRows,
    tableProps.progressPending,
    scheduleResponsiveWidths,
  ]);

  const handleChangePage: NonNullable<TableProps<T>["onChangePage"]> = (
    page,
    totalRows,
  ) => {
    onChangePage?.(page, totalRows);
    scheduleResponsiveWidths();
  };
  const handleChangeRowsPerPage: NonNullable<
    TableProps<T>["onChangeRowsPerPage"]
  > = (currentRowsPerPage, currentPage) => {
    onChangeRowsPerPage?.(currentRowsPerPage, currentPage);
    scheduleResponsiveWidths();
  };
  const handleSort: NonNullable<TableProps<T>["onSort"]> = (...args) => {
    onSort?.(...args);
    scheduleResponsiveWidths();
  };
  const handleRowExpandToggled: NonNullable<
    TableProps<T>["onRowExpandToggled"]
  > = (expanded, row) => {
    onRowExpandToggled?.(expanded, row);
    scheduleResponsiveWidths();
  };
  const handleFilterChange: NonNullable<
    TableProps<T>["onFilterChange"]
  > = (columnId, filter) => {
    onFilterChange?.(columnId, filter);
    scheduleResponsiveWidths();
  };
  const handleColumnOrderChange: NonNullable<
    TableProps<T>["onColumnOrderChange"]
  > = (nextOrder) => {
    onColumnOrderChange?.(nextOrder);
    scheduleResponsiveWidths();
  };
  const handleColumnGroupOrderChange: NonNullable<
    TableProps<T>["onColumnGroupOrderChange"]
  > = (nextGroups, nextColumns) => {
    onColumnGroupOrderChange?.(nextGroups, nextColumns);
    scheduleResponsiveWidths();
  };
  return (
    <DataTableCard
      ref={tableCardRef}
      $responsiveBreakpoint={responsiveBreakpoint}
    >
      <DataTable
        {...tableProps}
        columns={columns}
        data={data}
        pagination={pagination}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        highlightOnHover={highlightOnHover}
        responsive={responsive}
        customStyles={customStylesProp}
        defaultSortAsc={defaultSortAsc}
        noDataComponent={noDataComponent}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        onSort={handleSort}
        onRowExpandToggled={handleRowExpandToggled}
        onFilterChange={handleFilterChange}
        onColumnOrderChange={handleColumnOrderChange}
        onColumnGroupOrderChange={handleColumnGroupOrderChange}
      />
    </DataTableCard>
  );
};
