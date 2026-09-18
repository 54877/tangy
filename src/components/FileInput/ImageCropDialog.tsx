import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Button } from "@mui/material";
import {
  Actions,
  Controls,
  CropArea,
  CropImage,
  Dialog,
  Overlay,
} from "./ImageCropDialog.styled";

const OUTPUT_WIDTH = 1600;
const OUTPUT_HEIGHT = 900;

type Props = {
  readonly file: File;
  readonly onCancel: () => void;
  readonly onComplete: (file: File) => void;
};

type Position = { x: number; y: number };
type Size = { width: number; height: number };

function clampPosition(
  position: Position,
  imageWidth: number,
  imageHeight: number,
  areaWidth: number,
  areaHeight: number,
): Position {
  const maxX = Math.max(0, (imageWidth - areaWidth) / 2);
  const maxY = Math.max(0, (imageHeight - areaHeight) / 2);

  return {
    x: Math.max(-maxX, Math.min(maxX, position.x)),
    y: Math.max(-maxY, Math.min(maxY, position.y)),
  };
}

function getBaseImageSize(cropAreaSize: Size, naturalSize: Size): Size | null {
  if (
    !cropAreaSize.width ||
    !cropAreaSize.height ||
    !naturalSize.width ||
    !naturalSize.height
  ) {
    return null;
  }

  const scale = Math.max(
    cropAreaSize.width / naturalSize.width,
    cropAreaSize.height / naturalSize.height,
  );

  return {
    width: naturalSize.width * scale,
    height: naturalSize.height * scale,
  };
}

function calculateImageSize(baseSize: Size | null, zoom: number): Size | null {
  if (!baseSize) return null;

  return {
    width: baseSize.width * zoom,
    height: baseSize.height * zoom,
  };
}

export function ImageCropDialog({ file, onCancel, onComplete }: Props) {
  const imageRef = useRef<HTMLImageElement>(null);
  const dragStart = useRef<{
    pointer: Position;
    position: Position;
  } | null>(null);

  const [cropAreaElement, setCropAreaElement] = useState<HTMLDivElement | null>(
    null,
  );
  const [naturalSize, setNaturalSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  const [cropAreaSize, setCropAreaSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [imageUrl, setImageUrl] = useState("");

  const baseImageSize = getBaseImageSize(cropAreaSize, naturalSize);

  useEffect(() => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageUrl(typeof reader.result === "string" ? reader.result : "");
    });
    reader.readAsDataURL(file);

    return () => reader.abort();
  }, [file]);

  useEffect(() => {
    if (!cropAreaElement) return;

    const updateSize = () => {
      const { width, height } = cropAreaElement.getBoundingClientRect();
      setCropAreaSize({ width, height });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(cropAreaElement);

    return () => observer.disconnect();
  }, [cropAreaElement]);

  const getImageSize = (nextZoom = zoom) =>
    calculateImageSize(baseImageSize, nextZoom);

  const constrainPosition = (
    nextPosition: Position,
    nextZoom = zoom,
  ): Position => {
    const imageSize = getImageSize(nextZoom);
    if (!imageSize) return nextPosition;

    return clampPosition(
      nextPosition,
      imageSize.width,
      imageSize.height,
      cropAreaSize.width,
      cropAreaSize.height,
    );
  };

  const handleZoom = (nextZoom: number) => {
    setZoom(nextZoom);
    setPosition((current) => constrainPosition(current, nextZoom));
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      pointer: { x: event.clientX, y: event.clientY },
      position,
    };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;

    const { pointer, position: startPosition } = dragStart.current;

    setPosition(
      constrainPosition({
        x: startPosition.x + event.clientX - pointer.x,
        y: startPosition.y + event.clientY - pointer.y,
      }),
    );
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragStart.current = null;
  };

  const handleComplete = () => {
    const image = imageRef.current;
    const imageSize = getImageSize();
    if (!image || !imageSize || !cropAreaSize.width) return;

    const canvas = document.createElement("canvas");
    canvas.width = OUTPUT_WIDTH;
    canvas.height = OUTPUT_HEIGHT;

    const context = canvas.getContext("2d");
    if (!context) return;

    const outputScale = OUTPUT_WIDTH / cropAreaSize.width;
    const drawWidth = imageSize.width * outputScale;
    const drawHeight = imageSize.height * outputScale;
    const drawX = (OUTPUT_WIDTH - drawWidth) / 2 + position.x * outputScale;
    const drawY = (OUTPUT_HEIGHT - drawHeight) / 2 + position.y * outputScale;

    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;

        const filename = file.name.replace(/\.[^.]+$/, "") + "-cropped.jpg";
        onComplete(new File([blob], filename, { type: "image/jpeg" }));
      },
      "image/jpeg",
      0.92,
    );
  };

  return (
    <Overlay role="presentation">
      <Dialog role="dialog" aria-modal="true" aria-labelledby="crop-title">
        <h2 id="crop-title">調整封面圖片</h2>
        <p>拖曳圖片選擇顯示範圍，並用縮放調整裁切比例。</p>

        <CropArea
          ref={setCropAreaElement}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {imageUrl && (
            <CropImage
              ref={imageRef}
              src={imageUrl}
              alt="封面圖片裁切預覽"
              draggable={false}
              onLoad={(event) =>
                setNaturalSize({
                  width: event.currentTarget.naturalWidth,
                  height: event.currentTarget.naturalHeight,
                })
              }
              style={{
                width: baseImageSize ? `${baseImageSize.width}px` : undefined,
                height: baseImageSize ? `${baseImageSize.height}px` : undefined,
                maxWidth: "none",
                maxHeight: "none",
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${zoom})`,
                transformOrigin: "center center",
              }}
            />
          )}
        </CropArea>

        <Controls>
          <span>縮小</span>
          <input
            aria-label="縮放圖片"
            type="range"
            min="1"
            max="3"
            step="0.01"
            value={zoom}
            onChange={(event) => handleZoom(Number(event.target.value))}
          />
          <span>放大</span>
        </Controls>

        <Actions>
          <Button type="button" variant="outlined" onClick={onCancel}>
            取消
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={handleComplete}
            disabled={!baseImageSize}
          >
            套用裁切
          </Button>
        </Actions>
      </Dialog>
    </Overlay>
  );
}
