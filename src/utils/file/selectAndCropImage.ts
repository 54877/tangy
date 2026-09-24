import type { useDialog } from "../../context/dialog/useDialog";

type OpenDialog = ReturnType<typeof useDialog>["openDialog"];

type SelectFileOptions = {
  file?: File;
  openDialog: OpenDialog;
  allowedTypes: readonly string[];
  allowedExtensions: readonly string[];
  cropAspectRatio?: number;
  cropRadius?: number | string;
  onComplete: (file: File) => void;
};

/** 驗證選取的檔案；圖片會先經過共用裁切流程，再將結果交給呼叫端。 */
export function selectAndCropImage(options: SelectFileOptions) {
  const {
    file,
    openDialog,
    allowedTypes,
    allowedExtensions,
    cropAspectRatio = 16 / 9,
    cropRadius = 0,
    onComplete,
  } = options;

  if (!file) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = allowedTypes.join(",");
    input.style.display = "none";
    input.addEventListener(
      "change",
      () => {
        const selected = input.files?.[0];
        input.remove();
        if (selected) selectAndCropImage({ ...options, file: selected });
      },
      { once: true },
    );
    input.addEventListener("cancel", () => input.remove(), { once: true });
    document.body.appendChild(input);
    input.click();
    return;
  }

  const extension = file.name.split(".").pop()?.toLowerCase();
  const isAllowedType = allowedTypes.includes(file.type);
  const isAllowedExtension =
    !!extension && allowedExtensions.includes(extension);

  if (!isAllowedType && !isAllowedExtension) {
    openDialog(
      {
        title: "檔案讀取異常",
        type: "MessageDialog",
        fileErrorMessage: `不允許的檔案格式，僅允許 ${allowedExtensions.join(
          "、",
        )}，請重新選擇檔案。`,
      },
      1,
    );
    return;
  }

  openDialog(
    {
      type: "ImageCropDialog",
      cropFile: file,
      cropImageUrl: URL.createObjectURL(file),
      cropAspectRatio,
      cropRadius,
      onCropComplete: onComplete,
    },
    1,
  );
}
