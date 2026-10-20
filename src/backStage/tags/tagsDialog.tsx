import { useState, type SubmitEvent } from "react";
import { Button } from "../../components/Button/Button";
import { DialogBase } from "../../components/dialog/dialogBase";
import { FromInput } from "../../components/Input/Input";
import { Flex } from "../../components/Input/Input.styled";
import { useDialog } from "../../context/dialog/useDialog";
import { useActiveDialog } from "../../utils/dialogLayer";
import { formValidate } from "../../utils/formValidate";
import { useInformation } from "../../utils/information";
import type { FormError } from "../../types/errorType";
import type { TagsListType } from "../../types/backStageType";
import { useLoadingState } from "../../utils/loading/loading.state";
import { LoadingUi } from "../../components/loading/loading";

export function TagsDialog() {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("TagsDialog");
  const { type, title, tag, tagsApi } = activeDialog;
  const isLoadingApi = useLoadingState(2);
  const { information, handleOnChange } = useInformation<TagsListType>(
    tag ?? {
      key: "",
      label: "",
      createdAt: "",
      useCount: "",
    },
  );
  const [err, setErr] = useState<FormError<TagsListType>>({});
  const close = () => closeDialog(activeLayer);

  //表單驗證
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!tagsApi) return;

    formValidate<TagsListType>({
      information,
      fields: ["label"],
      setErr,
      fn: async () => {
        await tagsApi(information);
        close();
      },
    });
  };

  const content = (
    <form onSubmit={handleSubmit}>
      <Flex $direction="column" $gap="md">
        <FromInput
          title="標籤名稱"
          err={err}
          fieldKey={"label"}
          information={information}
          onChange={handleOnChange}
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
