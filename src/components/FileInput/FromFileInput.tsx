import { Button, FormHelperText } from "@mui/material";
import {
  useEffect,
  useMemo,
  useRef,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { useDialog } from "../../context/dialog/useDialog";
import { DescriptionTitle } from "../dateTime/dateTime.style";
import { SpanType } from "../../styles/components/span";
import { Flex } from "../Input/Input.styled";
import CloseIcon from "@mui/icons-material/Close";
import { Preview } from "./FromFileInput.styled";
import type { FormError } from "../../types/errorType";
import { selectAndCropImage } from "../../utils/file/selectAndCropImage";

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
  readonly cropAspectRatio?: number;
  readonly cropRadius?: number | string;
};

export function FromFileInput<T>({
  title,
  direction = "column",
  disabled,
  required = false,
  content,
  accept,
  err,
  fieldKey,
  information,
  extra,
  onChange,
  allowedTypes,
  allowedExtensions,
  preview,
  cropAspectRatio = 16 / 9,
  cropRadius = 0,
}: Props<T>) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { openDialog } = useDialog();

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // 清空值，讓使用者再次選擇同一個檔案時也會觸發 onChange。
    event.target.value = "";
    if (!selectedFile) return;

    if (preview === "image") {
      selectAndCropImage({
        file: selectedFile,
        openDialog,
        allowedTypes,
        allowedExtensions,
        cropAspectRatio,
        cropRadius,
        onComplete: (selected) => onChange(selected, fieldKey, extra),
      });
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
    </>
  );
}
