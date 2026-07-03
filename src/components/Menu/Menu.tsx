import { ClickAwayListener, Paper, Popper } from "@mui/material";
import type { ReactNode } from "react";

type MenuType = {
  open: boolean;
  menuRef: HTMLElement | null;
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  text: ReactNode;
};

export const MenuNav = ({ open, menuRef, onClickAway, text }: MenuType) => {
  return (
    <Popper
      open={open}
      anchorEl={menuRef}
      placement="bottom-end"
      sx={{ zIndex: 1300 }}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ]}
    >
      <ClickAwayListener onClickAway={onClickAway}>
        <Paper
          sx={{
            border: "1px solid #ddd",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          {text}
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};
