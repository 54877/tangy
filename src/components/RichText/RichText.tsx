import {
  useEffect,
  useRef,
  useState,
  type ClipboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import {
  Bold,
  Check,
  ImagePlus,
  Italic,
  List,
  ListOrdered,
  Palette,
  Underline,
} from "lucide-react";
import type { FormError, StringKeys } from "../../types/errorType";
import { DescriptionTitle } from "../dateTime/dateTime.style";
import { Flex } from "../Input/Input.styled";
import {
  Editor,
  EditorContainer,
  ColorPicker,
  HelperText,
  ResizeHandle,
  Toolbar,
} from "./RichText.styled";
import { sanitizeCourseContent } from "../../utils/sanitizeHtml";

type SelectedImage = {
  element: HTMLImageElement;
  left: number;
  top: number;
};

type Props<T> = {
  readonly title: ReactNode;
  readonly fieldKey: StringKeys<T>;
  readonly information: T;
  readonly onChange: (
    value: string,
    fieldKey: keyof T,
    extra?: Partial<T>,
  ) => void;
  readonly err?: FormError<T>;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly placeholder?: string;
  readonly minHeight?: number;
};

export function FromRichText<T>({
  title,
  fieldKey,
  information,
  onChange,
  err,
  required = false,
  disabled = false,
  placeholder = "請輸入課程內容",
  minHeight = 180,
}: Props<T>) {
  const editorRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const savedRangeRef = useRef<Range | null>(null);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(
    null,
  );
  const [imageError, setImageError] = useState("");
  const [pendingColor, setPendingColor] = useState("#232529");
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const value = sanitizeCourseContent(String(information[fieldKey] ?? ""));

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const syncValue = () => {
    const sanitizedValue = sanitizeCourseContent(
      editorRef.current?.innerHTML ?? "",
    );
    if (editorRef.current && editorRef.current.innerHTML !== sanitizedValue) {
      editorRef.current.innerHTML = sanitizedValue;
    }
    onChange(sanitizedValue, fieldKey);
  };

  const getRange = () => {
    const editor = editorRef.current;
    const selection = window.getSelection();
    const currentRange = selection?.rangeCount ? selection.getRangeAt(0) : null;
    const ranges = [currentRange, savedRangeRef.current];
    return (
      ranges.find(
        (range): range is Range =>
          !!editor && !!range && editor.contains(range.commonAncestorContainer),
      ) ?? null
    );
  };

  //儲存鼠標原始位置
  const saveSelection = () => {
    const range = getRange();
    if (range) savedRangeRef.current = range.cloneRange();
  };

  const restoreSelection = (range: Range) => {
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const applyInlineFormat = (
    tagName: "strong" | "em" | "u" | "font",
    color?: string,
  ) => {
    const range = getRange();
    if (!range || range.collapsed) return;

    const wrapper = document.createElement(tagName);
    if (tagName === "font" && color) wrapper.setAttribute("color", color);
    wrapper.append(range.extractContents());
    range.insertNode(wrapper);
    range.selectNodeContents(wrapper);
    restoreSelection(range);
    saveSelection();
    syncValue();
  };

  const findBlock = (node: Node) => {
    let element =
      node.nodeType === Node.ELEMENT_NODE
        ? (node as HTMLElement)
        : node.parentElement;
    while (element && element !== editorRef.current) {
      if (["P", "DIV", "H2", "H3"].includes(element.tagName)) return element;
      element = element.parentElement;
    }
    return null;
  };

  const applyBlockFormat = (tagName: "p" | "h2" | "h3") => {
    const range = getRange();
    if (!range) return;

    const block = findBlock(range.startContainer);
    if (!block) {
      const replacement = document.createElement(tagName);
      replacement.append(range.extractContents());
      range.insertNode(replacement);
      range.selectNodeContents(replacement);
      restoreSelection(range);
      saveSelection();
      syncValue();
      return;
    }

    if (block.tagName.toLowerCase() === tagName) return;

    const replacement = document.createElement(tagName);
    replacement.innerHTML = block.innerHTML;
    block.replaceWith(replacement);
    syncValue();
  };

  const applyList = (tagName: "ul" | "ol") => {
    const range = getRange();
    const block = range ? findBlock(range.startContainer) : null;
    if (!block) return;

    const list = document.createElement(tagName);
    const item = document.createElement("li");
    item.innerHTML = block.innerHTML;
    list.append(item);
    block.replaceWith(list);
    syncValue();
  };

  const selectImage = (image: HTMLImageElement) => {
    const container = editorRef.current?.parentElement;
    if (!container) return;
    const imageRect = image.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setSelectedImage({
      element: image,
      left: imageRect.right - containerRect.left - 7,
      top: imageRect.bottom - containerRect.top - 7,
    });
  };

  const insertImageSource = (source: string) => {
    const image = document.createElement("img");
    image.src = source;
    image.alt = "課程內容圖片";
    image.loading = "lazy";
    image.width = Math.min(560, editorRef.current?.clientWidth ?? 560);
    image.addEventListener("load", () => selectImage(image), { once: true });

    const range = getRange();
    if (range) {
      range.deleteContents();
      range.insertNode(image);
      range.setStartAfter(image);
      range.collapse(true);
      restoreSelection(range);
      saveSelection();
    } else {
      editorRef.current?.append(image);
    }

    setImageError("");
    syncValue();
  };

  const insertImageFile = (imageFile: File) => {
    if (
      !["image/png", "image/jpeg", "image/gif", "image/webp"].includes(
        imageFile.type,
      )
    ) {
      setImageError("僅支援 PNG、JPEG、GIF、WebP 圖片。");
      return;
    }
    if (imageFile.size > 5 * 1024 * 1024) {
      setImageError("圖片請小於 5MB。");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") insertImageSource(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };

  const startResize = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const image = selectedImage?.element;
    if (!image) return;

    const startX = event.clientX;
    const startWidth = image.getBoundingClientRect().width;
    const maximumWidth = editorRef.current?.clientWidth ?? 2000;

    const onPointerMove = (moveEvent: PointerEvent) => {
      const width = Math.min(
        maximumWidth,
        Math.max(80, Math.round(startWidth + moveEvent.clientX - startX)),
      );
      image.setAttribute("width", String(width));
      selectImage(image);
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      syncValue();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    const imageItem = Array.from(event.clipboardData.items).find(
      (item) =>
        item.kind === "file" &&
        ["image/png", "image/jpeg", "image/gif", "image/webp"].includes(
          item.type,
        ),
    );

    if (imageItem) {
      event.preventDefault();
      const imageFile = imageItem.getAsFile();
      if (imageFile) insertImageFile(imageFile);
      return;
    }

    event.preventDefault();
    const range = getRange();
    if (!range) return;

    const text = document.createTextNode(
      event.clipboardData.getData("text/plain"),
    );
    range.deleteContents();
    range.insertNode(text);
    range.setStartAfter(text);
    range.collapse(true);
    restoreSelection(range);
    saveSelection();
    syncValue();
  };

  return (
    <Flex $direction="column" $gap="sm" $align="flex-start">
      <DescriptionTitle required={required}>{title}</DescriptionTitle>
      <EditorContainer>
        <Toolbar>
          <select
            aria-label="文字大小"
            defaultValue="p"
            onMouseDown={saveSelection}
            onChange={(event) =>
              applyBlockFormat(event.target.value as "p" | "h2" | "h3")
            }
            disabled={disabled}
          >
            <option value="p">內文</option>
            <option value="h2">大標題</option>
            <option value="h3">小標題</option>
          </select>
          <button
            type="button"
            aria-label="粗體"
            onClick={() => applyInlineFormat("strong")}
            disabled={disabled}
          >
            <Bold size={16} />
          </button>
          <button
            type="button"
            aria-label="斜體"
            onClick={() => applyInlineFormat("em")}
            disabled={disabled}
          >
            <Italic size={16} />
          </button>
          <button
            type="button"
            aria-label="底線"
            onClick={() => applyInlineFormat("u")}
            disabled={disabled}
          >
            <Underline size={16} />
          </button>
          <button
            type="button"
            aria-label="項目清單"
            onClick={() => applyList("ul")}
            disabled={disabled}
          >
            <List size={16} />
          </button>
          <button
            type="button"
            aria-label="編號清單"
            onClick={() => applyList("ol")}
            disabled={disabled}
          >
            <ListOrdered size={16} />
          </button>
          <button
            type="button"
            aria-label="開啟文字顏色選取器"
            title="文字顏色"
            onMouseDown={saveSelection}
            onClick={() => setIsColorPickerOpen((open) => !open)}
            disabled={disabled}
          >
            <Palette size={16} />
          </button>
          <button
            type="button"
            aria-label="從相簿選取圖片"
            title="從相簿選取圖片"
            onMouseDown={saveSelection}
            onClick={() => imageInputRef.current?.click()}
            disabled={disabled}
          >
            <ImagePlus size={16} />
          </button>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/png,image/jpeg,image/gif,image/webp"
            hidden
            onChange={(event) => {
              const imageFile = event.target.files?.[0];
              if (imageFile) insertImageFile(imageFile);
              event.target.value = "";
            }}
          />
          {isColorPickerOpen && (
            <ColorPicker>
              <input
                type="color"
                aria-label="選擇文字顏色"
                value={pendingColor}
                onChange={(event) => setPendingColor(event.target.value)}
                disabled={disabled}
              />
              <button
                type="button"
                aria-label="確認文字顏色"
                title="確認"
                onMouseDown={saveSelection}
                onClick={() => {
                  applyInlineFormat("font", pendingColor);
                  setIsColorPickerOpen(false);
                }}
                disabled={disabled}
              >
                <Check size={16} />
              </button>
            </ColorPicker>
          )}
        </Toolbar>

        <Editor
          ref={editorRef}
          contentEditable={!disabled}
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label={typeof title === "string" ? title : "富文字內容"}
          data-placeholder={placeholder}
          $isError={!!err?.[fieldKey]}
          $minHeight={minHeight}
          onInput={syncValue}
          onBlur={syncValue}
          onKeyUp={saveSelection}
          onMouseUp={saveSelection}
          onPaste={handlePaste}
          onClick={(event: ReactMouseEvent<HTMLDivElement>) => {
            if (event.target instanceof HTMLImageElement)
              selectImage(event.target);
            else setSelectedImage(null);
          }}
        />
        {selectedImage && (
          <ResizeHandle
            type="button"
            aria-label="拖曳調整圖片大小"
            style={{ left: selectedImage.left, top: selectedImage.top }}
            onPointerDown={startResize}
          />
        )}
        {err?.[fieldKey] && <HelperText>{err[fieldKey]}</HelperText>}
        {imageError && <HelperText>{imageError}</HelperText>}
      </EditorContainer>
    </Flex>
  );
}
