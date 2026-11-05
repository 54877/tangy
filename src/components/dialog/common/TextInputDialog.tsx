import { useState, type SubmitEvent } from "react";
import { Button } from "../../Button/Button";
import { DialogBase } from "../dialogBase";
import { FromInput } from "../../Input/Input";
import { Flex } from "../../Input/Input.styled";
import { LoadingUi } from "../../loading/loading";
import { useDialog } from "../../../context/dialog/useDialog";
import { useActiveDialog } from "../../../utils/dialogLayer";
import { formValidate } from "../../../utils/formValidate";
import { useInformation } from "../../../utils/information";
import type { FormError } from "../../../types/errorType";
import { useLoadingState } from "../../../utils/loading/loading.state";

type TextInputDialogForm = Record<string, string>;

export function TextInputDialog() {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("TextInputDialog");
  const {
    type,
    title,
    inputTitle,
    inputValue,
    fieldKey,
    onInputSubmit,
  } = activeDialog;
  if (!fieldKey) {
    throw new Error("TextInputDialog requires a fieldKey");
  }
  const isLoadingApi = useLoadingState(2);
  const { information, handleOnChange } = useInformation<TextInputDialogForm>({
    [fieldKey]: inputValue ?? "",
  });
  const [err, setErr] = useState<FormError<TextInputDialogForm>>({});
  const close = () => closeDialog(activeLayer);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!onInputSubmit) return;

    formValidate<TextInputDialogForm>({
      information,
      fields: [fieldKey],
      setErr,
      fn: async () => {
        try {
          await onInputSubmit(information[fieldKey]);
          close();
        } catch {
          // Keep the dialog open when submission fails.
        }
      },
    });
  };

  const content = (
    <form onSubmit={handleSubmit}>
      <Flex $direction="column" $gap="md">
        <FromInput
          title={inputTitle ?? "名稱"}
          err={err}
          fieldKey={fieldKey}
          information={information}
          onChange={handleOnChange}
          required
        />
        <Flex $justify="flex-end">
          <Button
            text={isLoadingApi ? <LoadingUi type="button" /> : "確認"}
            disabled={isLoadingApi}
          />
        </Flex>
      </Flex>
    </form>
  );

  return (
    <DialogBase
      type={type}
      title={title}
      onClose={close}
      context={content}
      width="420px"
    />
  );
}
