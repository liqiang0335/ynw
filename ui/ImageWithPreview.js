import React from "react";
import previewImage from "../script/previewImage";
const WIDTH = 270;
const HEIGHT = 150;

export default function ImageWithPreview({ src, width, height }) {
  const onClick = () => {
    previewImage(src);
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
