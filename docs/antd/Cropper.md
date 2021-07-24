# Cropper

> 图片裁切框

- [cropperjs](https://github.com/fengyuanchen/cropperjs/blob/master/README.md)

```js
/**
 * 语法
 * @param {String} value - 图片回显路径
 * @param {Function} onChange(base64) - 裁切完成回调, 参数中包含base64格式图片
 * @param {String,Optional} name - 按钮文字,默认为"选择图片"
 * @param {Number,Optional} width - 图片的宽度, 默认500
 * @param {Object,Optional} cropper - cropper选项, 默认值 { aspectRatio: 16/9, viewMode:2, ...}
 */
```

## 示例

```js
import Cropper from "ynw/antd/Cropper/index";

function Modal() {
  return (
    <Form>
      <Item label="上传头像" name="cover">
        <Cropper width={300} />
      </Item>
    </Form>
  );
}
```
