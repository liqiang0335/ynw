import React from "react";
import showImage from "../script/previewImage";
const WIDTH = 270;
const HEIGHT = 150;

export default function CustomImage({ src, width, height }) {
  const onClick = () => {
    showImage(src);
  };
  return (
    <img
      width={width || WIDTH}
      height={height || HEIGHT}
      style={{ objectFit: "cover", cursor: "pointer" }}
      src={src}
      onClick={onClick}
      preview={true}
    />
  );
}
