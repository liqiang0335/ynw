import React, { useState, lazy, Suspense } from "react";
import styles from "./CropBox.scss";

// async load
const Crop = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(importName("./Crop", "crop"));
      }, 1000);
    })
);

export default Cropper;

/**
 * 在cropperJS基础上添加了UI, 方便一键调用
 *
 * @param {String} src - 图片回显路径
 * @param {Function} onSubmit(base64) - 裁切完成回调, 参数中包含base64格式图片
 * @param {String,Optional} name - 按钮文字,默认为"选择图片"
 * @param {Number,Optional} width - 图片的宽度, 默认260
 * @param {Object,Optional} cropper - cropper选项, 默认值 { aspectRatio: 16/9, viewMode:2, ...}
 */
function Cropper(props) {
  const { name, onSubmit, src, ...rest } = props;
  const [file, setfile] = useState(null);

  function submit(value) {
    onSubmit && onSubmit(value);
  }

  const onChange = e => {
    const file = e.nativeEvent.target.files[0];
    setfile(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label className={styles.label}>
          {name || "选择图片"}
          <input type="file" onChange={onChange} style={{ display: "none" }} />
        </label>
      </div>
      <img src={src} className={styles.img} />
      <Suspense fallback={null}>
        <Crop file={file} onSubmit={submit} width={260} {...rest} />
      </Suspense>
    </div>
  );
}
