import DataTable, { type TableProps } from "react-data-table-component";
import { useLayoutEffect, useRef } from "react";
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

  // 暫時移除欄位分配到的寬度，讓每格依內容的 max-content 寬度排版。
  // 這樣量到的是內容所需寬度，而不是表格目前分配給該欄的寬度。
  const measurementStyles = new Map<HTMLElement, SavedCellStyles>();
  cellRows.flat().forEach((cell) => {
    measurementStyles.set(cell, {
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
    });
    cell.style.setProperty("flex", "0 0 max-content", "important");
    cell.style.setProperty("width", "max-content", "important");
    cell.style.setProperty("min-width", "max-content", "important");
  });

  const widths = headers.map(() => 0);
  cellRows.forEach((cells) => {
    cells.forEach((cell, index) => {
      const currentWidth = widths[index];
      if (currentWidth === undefined) return;
      widths[index] = Math.max(currentWidth, cell.getBoundingClientRect().width);
    });
  });

  // 還原量測用樣式，再套用依內容實際量出的欄寬，沒有預設固定欄寬。
  measurementStyles.forEach((styles, cell) => {
    measuredProperties.forEach((property) => {
      const original = styles[property];
      if (original.value) {
        cell.style.setProperty(property, original.value, original.priority);
      } else {
        cell.style.removeProperty(property);
      }
    });
  });

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
  ...tableProps
}: ReusableDataTableProps<T>) => {
  const tableCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const card = tableCardRef.current;
    if (!card) return;

    // 等瀏覽器完成版面更新後再量測，避免取得前一個視窗寬度下的欄寬。
    let frame = 0;
    const syncWidths = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        syncResponsiveColumnWidths(card, responsiveBreakpoint),
      );
    };
    syncWidths();

    // 觀察分頁或資料更新造成的 DOM 變化，以及容器寬度變化。
    const observer = new MutationObserver(syncWidths);
    observer.observe(card, {
      childList: true,
      characterData: true,
      subtree: true,
    });
    const resizeObserver = new ResizeObserver(syncWidths);
    resizeObserver.observe(card);
    window.addEventListener("resize", syncWidths);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncWidths);
    };
  }, [responsiveBreakpoint]);

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
      />
    </DataTableCard>
  );
};
