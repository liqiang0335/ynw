# 组件

## 倒计时

- getCode : 裁切完成携带 base64 参数

```html
<counter-down @getCode="getCodeEvent" />  
```

## 图片裁切

- @crop : 裁切完毕的回调函数, 参数为 base64 格式的图片
- layout : 裁切弹窗的宽高
- size : 裁切框的宽高

```html
<cropper :visible.sync="shwoCrop" @crop="onCrop" :layout="[700,500]" :size="[160,160]" />
```

- iphone : 手机预览
- loading : 加载动画
- plugin
  - web.js
