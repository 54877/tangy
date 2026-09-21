import { Button, FormHelperText } from "@mui/material";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { useDialog } from "../../context/dialog/useDialog";
import { DescriptionTitle } from "../dateTime/dateTime.style";
import { SpanType } from "../../styles/components/span";
import { Flex } from "../Input/Input.styled";
import CloseIcon from "@mui/icons-material/Close";
import { ImageCropDialog } from "./ImageCropDialog";
import { Preview } from "./FromFileInput.styled";
import type { FormError } from "../../types/errorType";

type PreviewType = "image" | "video";

type Props<T> = {
  readonly title: ReactNode;
  readonly fieldKey: keyof T;
  readonly direction?: "row" | "column";
  readonly information: T;
  readonly onChange: (
    value: File | null,
    fieldKey: keyof T,
    extra?: Partial<T>,
  ) => void;
  readonly err?: FormError<T>;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly content?: ReactNode;
  readonly extra?: Partial<T>;
  readonly accept: string;
  readonly allowedTypes: readonly string[];
  readonly allowedExtensions: readonly string[];
  readonly preview: PreviewType;
};

export function FromFileInput<T>({
  title,
  direction = "column",
  disabled,
  required = false,
  content,
  err,
  fieldKey,
  information,
  extra,
  onChange,
  accept,
  allowedTypes,
  allowedExtensions,
  preview,
}: Props<T>) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { openDialog } = useDialog();
  const [pendingImage, setPendingImage] = useState<File | null>(null);

  const file = information[fieldKey];

  const previewUrl = useMemo(() => {
    if (!(file instanceof File)) return "";

    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const showFileError = (message: string) => {
    openDialog(
      {
        title: "檔案讀取異常",
        type: "MessageDialog",
        fileErrorMessage: message,
      },
      1,
    );
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    // 清空值，讓使用者再次選擇同一個檔案時也會觸發 onChange。
    event.target.value = "";

    if (!selectedFile) return;

    const extension = selectedFile.name.split(".").pop()?.toLowerCase();

    const isAllowedType = allowedTypes.includes(selectedFile.type);

    const isAllowedExtension =
      !!extension && allowedExtensions.includes(extension);

    if (!isAllowedType && !isAllowedExtension) {
      showFileError(
        `不允許的檔案格式，僅允許 ${allowedExtensions.join(
          "、",
        )}，請重新選擇檔案。`,
      );
      return;
    }

    if (preview === "image") {
      setPendingImage(selectedFile);
      return;
    }

    onChange(selectedFile, fieldKey, extra);
  };

  const handleRemove = () => {
    onChange(null, fieldKey, extra);
  };

  return (
    <>
      <Flex
        $direction={direction}
        $gap="sm"
        $justify="center"
        $align={direction === "row" ? "center" : "flex-start"}
      >
        <Flex
          style={{ width: direction === "row" ? "190px" : "100%" }}
          $justify="space-between"
        >
          <DescriptionTitle style={{ width: "100%" }} required={required}>
            {title}
          </DescriptionTitle>

          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            hidden
            onChange={handleFileChange}
          />

          <Flex $justify="flex-end">
            <Button
              type="button"
              size="small"
              color={err?.[fieldKey] ? "error" : "primary"}
              variant="outlined"
              disabled={disabled}
              onClick={() => fileInputRef.current?.click()}
            >
              選擇檔案
            </Button>
          </Flex>
        </Flex>

        {err?.[fieldKey] && (
          <FormHelperText error sx={{ m: 0 }}>
            {err[fieldKey]}
          </FormHelperText>
        )}

        {content && content !== "" && (
          <SpanType $size="xs" $shade={900}>
            {content}
          </SpanType>
        )}

        {file instanceof File && (
          <Flex $justify="flex-end">
            <Button
              type="button"
              size="small"
              color="inherit"
              disabled={disabled}
              onClick={handleRemove}
            >
              <CloseIcon />
            </Button>
          </Flex>
        )}
      </Flex>

      {previewUrl && preview === "image" && (
        <Preview>
          <img src={previewUrl} alt={`照片預覽`} />
        </Preview>
      )}

      {previewUrl && preview === "video" && (
        <Preview>
          <video src={previewUrl} controls playsInline>
            <track
              kind="captions"
              src="/captions/course.vtt"
              srcLang="zh-TW"
              label="繁體中文"
            />
          </video>
        </Preview>
      )}

      {pendingImage && (
        <ImageCropDialog
          file={pendingImage}
          onCancel={() => setPendingImage(null)}
          onComplete={(croppedImage) => {
            onChange(croppedImage, fieldKey, extra);
            setPendingImage(null);
          }}
        />
      )}
    </>
  );
}
