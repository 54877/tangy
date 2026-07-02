import img from "../../assets/icon_tangy/userImgDefault.png";

type ImgType = {
  width?: string;
  height?: string;
};

export const UserImg = ({ width = "40px", height = "40px" }: ImgType) => {
  return (
    <img
      style={{ width: width, height: height, borderRadius: "100px" }}
      src={img}
      alt="使用者照片"
    />
  );
};
