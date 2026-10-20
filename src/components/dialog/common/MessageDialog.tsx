import { Button } from "../../Button/Button";
import { useDialog } from "../../../context/dialog/useDialog";
import { SpanType } from "../../../styles/components/span";
import { useActiveDialog } from "../../../utils/dialogLayer";
import { Flex } from "../../Input/Input.styled";
import { DialogBase } from "../dialogBase";
import { useLoadingState } from "../../../utils/loading/loading.state";
import { LoadingUi } from "../../loading/loading";

export function MessageDialog() {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("MessageDialog");
  const { type, fileErrorMessage, title, onConfirm } = activeDialog;
  const isLoadingApi = useLoadingState(2);
  const close = () => closeDialog(activeLayer);
  const handleConfirm = async () => {
    if (isLoadingApi) return;
    await onConfirm?.();
    close();
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key !== "Enter" || event.repeat || isLoadingApi) return;

    event.preventDefault();
    void handleConfirm();
  };

  const content = (
    <Flex $direction="column" $gap="md">
      <SpanType $shade={700}>{fileErrorMessage}</SpanType>
      <Flex $justify="flex-end">
        <Button
          text={isLoadingApi ? <LoadingUi type="button" /> : "確認"}
          disabled={isLoadingApi}
          onClick={() => void handleConfirm()}
        />
      </Flex>
    </Flex>
  );

  return (
    <DialogBase
      type={type}
      title={title}
      onClose={close}
      onKeyDown={handleKeyDown}
      context={content}
      width="420px"
    />
  );
}
