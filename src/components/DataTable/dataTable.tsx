import DataTable, { type TableProps } from "react-data-table-component";
import { NoDataComponent } from "./NoData";
import { customStyles, DataTableCard } from "./dataTable.styled";

export type ReusableDataTableProps<T> = Omit<
  TableProps<T>,
  "columns" | "data"
> & {
  columns: TableProps<T>["columns"];
  data: T[];
};

export const ReusableDataTable = <T,>({
  columns,
  data,
  pagination = true,
  paginationPerPage = 20,
  paginationRowsPerPageOptions = [5, 10, 20, 50],
  highlightOnHover = true,
  responsive = true,
  defaultSortAsc = true,
  customStyles: customStylesProp = customStyles,
  noDataComponent = <NoDataComponent />,
  ...tableProps
}: ReusableDataTableProps<T>) => (
  <DataTableCard>
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
