import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../Button/Button";
import { useDialog } from "../../context/dialog/useDialog";
import { Heading, SpanType } from "../../styles/components/span";
import { useActiveDialog } from "../../utils/dialogLayer";
import { Flex } from "../Input/Input.styled";
import { DialogBase } from "./dialogBase";

export function MessageDialog() {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("MessageDialog");
  const { type, fileErrorMessage, title } = activeDialog;
  const close = () => closeDialog(activeLayer);

  const content = (
    <Flex $direction="column" $gap="md">
      <Flex $align="center" $justify="space-between">
        <Heading>{title}</Heading>
        <button type="button" aria-label="關閉" onClick={close}>
          <CloseIcon />
        </button>
      </Flex>
      <SpanType $shade={700}>{fileErrorMessage}</SpanType>
      <Flex $justify="flex-end">
        <Button text="確認" onClick={close} />
      </Flex>
    </Flex>
  );

  return <DialogBase type={type} context={content} width="420px" />;
}
