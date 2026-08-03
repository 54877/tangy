import { Modal } from "@mui/material";
import type { ReactNode } from "react";
import { Container } from "./dialog.styled";

interface DialogBaseProps {
  type: string | null;
  width?: string;
  context: ReactNode;
}

export const DialogBase = ({
  type,
  context,
  width = "90%",
}: DialogBaseProps) => {
  return (
    <Modal open={!!type}>
      <Container style={{ width: width }}>{context}</Container>
    </Modal>
  );
};
