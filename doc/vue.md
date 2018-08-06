# 辅助

## vuexHelper

```js
// 使用 setState 动态设置 state
import { setter, logger } from "ynw/vue/vuexHelper";

new Vuex.Store({
  mutations: {
    plugins: [loggoer],
    setState: setter
  }
});
```

## plugin

```js
/**
 * 成功提示: this.$success("保存成功")
 * 失败提示: this.$error("服务器错误")
 * 合并属性: this.$extend(this.form, initState())
 * 确认操作: this.$confirm("确定要删除吗") //promise
 */
import plugin from "ynw/vue/plugin/web";
Vue.use(plugin);
```

# VUE 组件

## 倒计时

- getCode : 点击获取验证码时

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

## 手机预览

```html
<iphone :visible.sync="showIphone">
  <div>使用Slot提供内容</div>
</iphone>
```

## 加载动画

- show : 显示/隐藏
- min : 至少显示毫秒数

```html
<loading :show="showLoading" min="200"/>
```

## 弹窗

```html
<yn-layer title="弹窗标题" box="width:400px;height:240px;"></yn-layer>
```
