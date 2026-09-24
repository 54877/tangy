import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Button } from "@mui/material";
import {
  Actions,
  CropImage,
  CropStage,
  Dialog,
  Overlay,
  ResizeHandle,
  RotationControls,
  Selection,
} from "./ImageCropDialog.styled";
import { useActiveDialog } from "../../utils/dialogLayer";
import { useDialog } from "../../context/dialog/useDialog";
import { Flex } from "../Input/Input.styled";

type Point = { x: number; y: number };
type Rect = { x: number; y: number; width: number; height: number };
const OUTPUT_WIDTH = 1600;

// 根據旋轉方向計算照片在預覽區內的完整顯示尺寸。
function getImageLayout(
  stageWidth: number,
  stageHeight: number,
  image: HTMLImageElement,
  rotation: number,
): Rect {
  const isSideways = rotation % 180 !== 0;
  const sourceWidth = isSideways ? image.naturalHeight : image.naturalWidth;
  const sourceHeight = isSideways ? image.naturalWidth : image.naturalHeight;
  const scale = Math.min(
    stageWidth / sourceWidth,
    stageHeight / sourceHeight,
  );
  const width = sourceWidth * scale;
  const height = sourceHeight * scale;

  return {
    x: (stageWidth - width) / 2,
    y: (stageHeight - height) / 2,
    width,
    height,
  };
}

// 依照設定比例，在照片中央建立初始裁切框。
function getInitialSelection(imageBox: Rect, aspectRatio: number): Rect {
  const width = Math.min(
    imageBox.width * 0.8,
    imageBox.height * 0.8 * aspectRatio,
  );
  const height = width / aspectRatio;

  return {
    x: imageBox.x + (imageBox.width - width) / 2,
    y: imageBox.y + (imageBox.height - height) / 2,
    width,
    height,
  };
}

// 只把旋轉後的選取區繪到暫存 Canvas，避免建立整張旋轉大圖。
function createRotatedCropCanvas(
  image: HTMLImageElement,
  rotation: number,
  crop: Rect,
): HTMLCanvasElement {
  const isSideways = rotation % 180 !== 0;
  const rotatedWidth = isSideways ? image.naturalHeight : image.naturalWidth;
  const rotatedHeight = isSideways ? image.naturalWidth : image.naturalHeight;
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(crop.width);
  canvas.height = Math.ceil(crop.height);

  const context = canvas.getContext("2d");
  if (!context) return canvas;

  context.translate(-crop.x, -crop.y);
  context.translate(rotatedWidth / 2, rotatedHeight / 2);
  context.rotate((rotation * Math.PI) / 180);
  context.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
  return canvas;
}

export function ImageCropDialog() {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("ImageCropDialog");
  const file = activeDialog.cropFile;
  const imageUrl = activeDialog.cropImageUrl ?? "";
  const configuredAspectRatio = activeDialog.cropAspectRatio;
  const aspectRatio =
    configuredAspectRatio &&
    Number.isFinite(configuredAspectRatio) &&
    configuredAspectRatio > 0
      ? configuredAspectRatio
      : 16 / 9;
  const radius = activeDialog.cropRadius ?? 0;
  const imageRef = useRef<HTMLImageElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<{
    type: "move" | "resize";
    pointer: Point;
    rect: Rect;
  } | null>(null);
  const pendingRectRef = useRef<Rect | null>(null);
  const frameRef = useRef<number | null>(null);
  const revokeUrlTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const layoutKeyRef = useRef("");
  const [rotation, setRotation] = useState(0);
  const [imageBox, setImageBox] = useState<Rect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [rect, setRect] = useState<Rect>({ x: 0, y: 0, width: 0, height: 0 });

  // 延後釋放物件網址，避免 React Strict Mode 的 effect 重播過早撤銷網址。
  useEffect(() => {
    if (revokeUrlTimerRef.current) {
      clearTimeout(revokeUrlTimerRef.current);
      revokeUrlTimerRef.current = null;
    }

    return () => {
      if (!imageUrl) return;
      revokeUrlTimerRef.current = setTimeout(() => {
        URL.revokeObjectURL(imageUrl);
        revokeUrlTimerRef.current = null;
      }, 0);
    };
  }, [imageUrl]);

  // 將同一影格內多次的拖曳更新合併，降低 React 重繪頻率。
  const scheduleRectUpdate = (nextRect: Rect) => {
    pendingRectRef.current = nextRect;
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      if (pendingRectRef.current) setRect(pendingRectRef.current);
      pendingRectRef.current = null;
    });
  };

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  // 依預覽區大小重算照片位置，並重置置中的裁切框。
  const updateImageBox = useCallback(() => {
    const stage = stageRef.current;
    const image = imageRef.current;
    if (!stage || !image?.naturalWidth || !image.naturalHeight) return;
    const bounds = stage.getBoundingClientRect();
    const layoutKey = `${imageUrl}:${rotation}:${aspectRatio}:${bounds.width}:${bounds.height}`;
    if (layoutKeyRef.current === layoutKey) return;

    const next = getImageLayout(bounds.width, bounds.height, image, rotation);
    layoutKeyRef.current = layoutKey;
    setImageBox(next);
    setRect(getInitialSelection(next, aspectRatio));
  }, [aspectRatio, imageUrl, rotation]);

  // 視窗或旋轉方向改變時，重新計算預覽與初始裁切框。
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(updateImageBox);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [updateImageBox]);

  // 記錄裁切框拖曳起點，供移動或縮放時計算位移。
  const startAction = (
    type: "move" | "resize",
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    actionRef.current = {
      type,
      pointer: { x: event.clientX, y: event.clientY },
      rect,
    };
  };

  // 移動裁切框，或依固定比例調整右下角大小。
  const moveAction = (event: ReactPointerEvent<HTMLDivElement>) => {
    const action = actionRef.current;
    if (!action) return;
    const dx = event.clientX - action.pointer.x;
    const dy = event.clientY - action.pointer.y;
    if (action.type === "move") {
      scheduleRectUpdate({
        ...action.rect,
        x: Math.max(
          imageBox.x,
          Math.min(
            imageBox.x + imageBox.width - action.rect.width,
            action.rect.x + dx,
          ),
        ),
        y: Math.max(
          imageBox.y,
          Math.min(
            imageBox.y + imageBox.height - action.rect.height,
            action.rect.y + dy,
          ),
        ),
      });
      return;
    }
    const maxWidth = Math.min(
      imageBox.x + imageBox.width - action.rect.x,
      (imageBox.y + imageBox.height - action.rect.y) * aspectRatio,
    );
    const width = Math.min(
      maxWidth,
      Math.max(
        Math.min(48, maxWidth),
        action.rect.width +
          (dx + dy * aspectRatio) / (1 + aspectRatio * aspectRatio),
      ),
    );
    scheduleRectUpdate({ ...action.rect, width, height: width / aspectRatio });
  };

  // 拖曳結束時釋放指標控制。
  const endAction = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (pendingRectRef.current) {
      setRect(pendingRectRef.current);
      pendingRectRef.current = null;
    }
    actionRef.current = null;
  };

  // 將旋轉後照片的選取區域輸出成裁切檔案。
  const handleComplete = () => {
    const image = imageRef.current;
    if (!file || !image || !imageBox.width || !rect.width) return;
    const isSideways = rotation % 180 !== 0;
    const rotatedWidth = isSideways ? image.naturalHeight : image.naturalWidth;
    const rotatedHeight = isSideways ? image.naturalWidth : image.naturalHeight;
    const scaleX = rotatedWidth / imageBox.width;
    const scaleY = rotatedHeight / imageBox.height;
    const sourceX = (rect.x - imageBox.x) * scaleX;
    const sourceY = (rect.y - imageBox.y) * scaleY;
    const sourceWidth = rect.width * scaleX;
    const sourceHeight = rect.height * scaleY;
    const croppedCanvas = createRotatedCropCanvas(image, rotation, {
      x: sourceX,
      y: sourceY,
      width: sourceWidth,
      height: sourceHeight,
    });
    const outputHeight = Math.round(OUTPUT_WIDTH / aspectRatio);
    const canvas = document.createElement("canvas");
    canvas.width = OUTPUT_WIDTH;
    canvas.height = outputHeight;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(
      croppedCanvas,
      0,
      0,
      sourceWidth,
      sourceHeight,
      0,
      0,
      OUTPUT_WIDTH,
      outputHeight,
    );
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const filename = file.name.replace(/\.[^.]+$/, "") + "-cropped.jpg";
        activeDialog.onCropComplete?.(
          new File([blob], filename, { type: "image/jpeg" }),
        );
        closeDialog(activeLayer);
      },
      "image/jpeg",
      0.92,
    );
  };

  // 關閉裁切對話框，不套用變更。
  const cancel = () => {
    closeDialog(activeLayer);
  };

  return (
    <Overlay role="presentation">
      <Dialog role="dialog" aria-modal="true" aria-labelledby="crop-title">
        <h2 id="crop-title">
          {activeDialog.cropTitle ?? activeDialog.title ?? "裁切圖片"}
        </h2>
        <Flex $justify={"space-between"}>
          <p>拖曳裁切框移動位置，拖曳右下角調整大小。</p>
          {/* 以 90 度為單位旋轉照片。 */}
          <RotationControls>
            <Button
              type="button"
              size="small"
              onClick={() => setRotation((value) => (value + 270) % 360)}
              aria-label="向左旋轉 90 度"
            >
              向左旋轉
            </Button>
            <Button
              type="button"
              size="small"
              onClick={() => setRotation((value) => (value + 90) % 360)}
              aria-label="向右旋轉 90 度"
            >
              向右旋轉
            </Button>
          </RotationControls>
        </Flex>
        {/* 完整顯示照片，裁切框覆蓋在照片上供使用者操作。 */}
        <CropStage ref={stageRef}>
          {imageUrl && (
            <CropImage
              ref={imageRef}
              src={imageUrl}
              alt="照片裁切預覽"
              draggable={false}
              onLoad={updateImageBox}
              style={{
                position: "absolute",
                left: imageBox.x + imageBox.width / 2,
                top: imageBox.y + imageBox.height / 2,
                width: rotation % 180 === 0 ? imageBox.width : imageBox.height,
                height: rotation % 180 === 0 ? imageBox.height : imageBox.width,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                maxWidth: "none",
                maxHeight: "none",
              }}
            />
          )}
          {!!rect.width && (
            <Selection
              $radius={radius}
              style={{
                left: rect.x,
                top: rect.y,
                width: rect.width,
                height: rect.height,
              }}
              onPointerDown={(event) => startAction("move", event)}
              onPointerMove={moveAction}
              onPointerUp={endAction}
              onPointerCancel={endAction}
            >
              <ResizeHandle
                onPointerDown={(event) => startAction("resize", event)}
              />
            </Selection>
          )}
        </CropStage>
        <Actions>
          <Button type="button" variant="outlined" onClick={cancel}>
            取消
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={handleComplete}
            disabled={!rect.width}
          >
            套用裁切
          </Button>
        </Actions>
      </Dialog>
    </Overlay>
  );
}
