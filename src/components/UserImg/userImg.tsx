import type { CSSProperties } from "styled-components";
import img from "../../assets/icon_tangy/userImgDefault.png";

type ImgType = {
  imageUrl?: string | null;
  width?: string;
  height?: string;
  style?: CSSProperties;
};

export const UserImg = ({
  imageUrl,
  style,
  width = "40px",
  height = "40px",
}: ImgType) => {
  return (
    <img
      style={{
        ...style,
        backgroundColor: "white",
        width: width,
        height: height,
        borderRadius: "100px",
        objectFit: "contain",
      }}
      src={imageUrl || img}
      alt="使用者照片"
    />
  );
};
