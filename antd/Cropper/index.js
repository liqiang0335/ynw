import React, { useState, Suspense } from "react";
import styles from "./index.scss";
import getSrcPrefix from "@script/getSrcPrefix";
import Cropper from "./_cropper";

/**
 * @param {String} value - 图片回显路径
 * @param {Function} onChange(base64) - 裁切完成回调, 参数中包含base64格式图片
 * @param {String,Optional} name - 按钮文字,默认为"选择图片"
 * @param {Number,Optional} width - 图片的宽度, 默认500
 * @param {Object,Optional} cropper - cropper选项, 默认值 { aspectRatio: 16/9, viewMode:2, ...}
 */
export default function CropperBox(props) {
  const { name, onChange, value, ...rest } = props;
  const [file, setfile] = useState(null);

  const onInputChange = e => {
    const file = e.nativeEvent.target.files[0];
    setfile(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label className={styles.label}>
          {name || "选择图片"}
          <input
            type="file"
            onChange={onInputChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <img
        src={getSrcPrefix(value)}
        className={styles.img}
        width="100%"
        style={{ maxWidth: props.width + "px" }}
      />
      <Suspense fallback={null}>
        <Cropper file={file} onSubmit={onChange} width={500} {...rest} />
      </Suspense>
    </div>
  );
}
