import styled from "styled-components";
import type { TableStyles } from "react-data-table-component";
import { colors } from "../../styles/tokens/colors";
import { semanticColors } from "../../styles/tokens/semanticColors";
import { radius } from "../../styles/tokens/radius";

/** 後台列表共用容器，讓表格在窄螢幕中可水平捲動。 */
export const DataTableCard = styled.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
  border: 1px solid ${semanticColors.border.base};
  border-radius: ${radius.md};
  background: ${semanticColors.background.elevated};
  box-shadow: 0 2px 8px rgb(35 37 41 / 8%);

  .rdt_Table {
    color: ${semanticColors.text.primary};
    background: ${semanticColors.background.elevated};
  }

  .rdt_TableCol_Sortable,
  .rdt_TableCol_Sortable > div:first-child,
  .rdt_TableCol_Sortable > span:first-child {
    overflow: visible;
    white-space: nowrap;
    text-overflow: clip;
    line-height: 1.25;
  }

  .rdt_TableCol_Sortable {
    gap: 6px;
  }

  .rdt_TableWrapper {
    overflow-x: auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 600px) {
    .rdt_Table {
      width: 100%;
      min-width: 0;
    }

    .rdt_TableWrapper {
      max-height: 60vh;
    }

    .rdt_TableCell {
      overflow-wrap: anywhere;
    }
  }
`;

export const customStyles: TableStyles = {
  tableWrapper: {
    style: {
      width: "100%",
      overflowX: "auto",
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
    },
  },
  table: {
    style: {
      width: "100%",
      minHeight: "120px",
      backgroundColor: semanticColors.background.elevated,
    },
  },
  headRow: {
    style: {
      minHeight: "48px",
      backgroundColor: colors.primary[700],
      borderBottomWidth: "0",
    },
  },
  headCells: {
    style: {
      paddingLeft: "16px",
      paddingRight: "16px",
      color: semanticColors.text.white,
      fontSize: "0.875rem",
      fontWeight: 700,
      whiteSpace: "nowrap",
    },
  },
  rows: {
    style: {
      minHeight: "52px",
      backgroundColor: semanticColors.background.elevated,
      borderBottomColor: semanticColors.border.light,
      fontSize: "0.9rem",
    },
    highlightOnHoverStyle: {
      backgroundColor: colors.primary[50],
      outline: "none",
    },
  },
  cells: {
    style: {
      minWidth: "0",
      paddingLeft: "16px",
      paddingRight: "16px",
      color: semanticColors.text.primary,
      whiteSpace: "normal",
    },
  },
  noData: {
    style: {
      minHeight: "120px",
      paddingTop: "8px",
      paddingBottom: "8px",
      color: semanticColors.text.muted,
      backgroundColor: semanticColors.background.surface,
      fontSize: "1rem",
    },
  },
  pagination: {
    style: {
      minHeight: "56px",
      paddingLeft: "12px",
      paddingRight: "12px",
      color: semanticColors.text.secondary,
      borderTopColor: semanticColors.border.light,
      backgroundColor: semanticColors.background.elevated,
    },
  },
};
