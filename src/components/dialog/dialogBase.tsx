import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { ReactNode } from "react";
import { Container, Content, Header, Title } from "./dialog.styled";

interface DialogBaseProps {
  type: string | null;
  width?: string;
  context: ReactNode;
  title?: ReactNode;
  onClose: () => void;
}

export const DialogBase = ({
  type,
  context,
  title,
  onClose,
  width = "90%",
}: DialogBaseProps) => {
  return (
    <Modal open={!!type}>
      <Container
        style={{
          width: width,
        }}
      >
        <Header>
          <Title>{title}</Title>
          <button type="button" aria-label="關閉" onClick={onClose}>
            <CloseIcon />
          </button>
        </Header>
        <Content>{context}</Content>
      </Container>
    </Modal>
  );
};
