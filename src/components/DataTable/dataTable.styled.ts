import styled from "styled-components";
import type { TableStyles } from "react-data-table-component";
import { colors } from "../../styles/tokens/colors";
import { semanticColors } from "../../styles/tokens/semanticColors";
import { radius } from "../../styles/tokens/radius";

/** 後台列表共用容器，讓表格在窄螢幕中可水平捲動。 */
export const DataTableCard = styled.div<{ $responsiveBreakpoint: number }>`
  width: 100%;
  min-width: 0;
  container-type: inline-size;
  overflow: hidden;
  border: 1px solid ${semanticColors.border.base};
  border-radius: ${radius.md};
  background: ${semanticColors.background.elevated};
  box-shadow: 0 2px 8px rgb(35 37 41 / 8%);

  .rdt_Table {
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    color: ${semanticColors.text.primary};
    background: ${semanticColors.background.elevated};
  }

  .rdt_TableHeadRow .rdt_TableCol,
  .rdt_TableCol_Sortable,
  .rdt_TableCol_Sortable > div:first-child,
  .rdt_TableCol_Sortable > span:first-child {
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.25;
  }

  .rdt_TableCol_Sortable {
    gap: 6px;
  }

  .rdt_ResponsiveWrapper,
  .rdt_responsiveWrapper {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .rdt_TableCell,
  .rdt_TableCell > div,
  .rdt_TableCell > div > * {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @container (max-width: ${({ $responsiveBreakpoint }) =>
    $responsiveBreakpoint}px) {
    .rdt_ResponsiveWrapper,
    .rdt_responsiveWrapper {
      overflow-x: auto !important;
    }

    .rdt_Table {
      width: max-content !important;
      min-width: 100% !important;
      max-width: none !important;
    }

    .rdt_TableCell,
    .rdt_TableCell > div,
    .rdt_TableCell > div > * {
      overflow: visible !important;
      text-overflow: clip !important;
      white-space: nowrap !important;
    }

    .rdt_TableCell .course-rejection-reason {
      display: block;
      overflow: visible !important;
      overflow-wrap: anywhere;
      text-overflow: clip !important;
      white-space: normal !important;
    }

    .rdt_TableHeadRow .rdt_TableCol,
    .rdt_TableCol_Sortable,
    .rdt_TableCol_Sortable > div:first-child,
    .rdt_TableCol_Sortable > span:first-child {
      overflow: visible;
      text-overflow: clip;
    }
  }

  @media (max-width: 600px) {
    .rdt_ResponsiveWrapper,
    .rdt_responsiveWrapper {
      max-height: 60vh;
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
