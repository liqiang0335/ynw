# 命令行参数

* `ynw --version` 版本号
* `ynw --init` : 添加配置文件
* `ynw --dep`: 追加 NPM 依赖
* `ynw build=index env=dev` : 开发环境构建
* `ynw build=index env=hot` : 开发环境构建 + 热替换
* `ynw build=index env=pro` : 生产环境构建

### 使用方法

```shell
# 添加配置文件
ynw --init

# 安装依赖包
cnpm i

# 配置打包路径
yn.config.js

# 构建
ynw build=index env=dev
```

# 工作中常用的函数

> 以下函数多来自于 [30-seconds-of-cod](https://github.com/Chalarangelo/30-seconds-of-code)

### Function

<details>
<summary>查看详情</summary>

* [`chainAsync`](#chainAsync)
* [`compose`](#compose)
* [`composeRight`](#composeRight)
* [`koa-compose`](#koa-compose)
* [`pipeAsync`](#pipeAsync)

</details>

### Array

<details>
<summary>查看详情</summary>

* [`differenceBy`](#differenceby)

</details>

### Browser

<details>
<summary>查看详情</summary>

* [`uuid`](#uuid)
* [`createEventHub`](#createEventHub)
* [`element`](#element)
* [`runInRaf`](#runInRaf)
* [`runInWorker`](#runInWorker)

</details>

### Util

<details>
<summary>查看详情</summary>

* [`registe`](#registe)
* [`httpPost`](#httppost)

</details>

### style

<details>
<summary>查看详情</summary>

* `reset.css`

</details>

### Vue

<details>
<summary>查看详情</summary>

* [`registeComp`](#registeComp)
* [`vuexHelper`](#vuexHelper)

</details>

---

# Function

### chainAsync

> 依次执行队列中的同步或异步函数。上一个函数可以控制下一个函数的执行时机。

```js
// a控制b的执行时机
const a = next => setTimeout(next, 1000);
const b = next => console.log("b");
chainAsync([a, b]);
```

---

# Vue

### registeComp

> 注册 VUE 组件

```js
// 注册components文件夹下的所有.vue文件为组件
// header.vue 注册为 "yn-header"

import registeComp from "ynw/vue/registeComp";
registeComp(Vue, "./components");
```

### vuexHelper

* setState : 使用通用的方法设置 store 中的 state 的值
* logger : 自定义控制台的输出值

```js
import { setState, logger } from "ynw/vue/vuexHelper";
new Vuex.Store({
  plugins: [logger],
  mutaions: {
    setState
  }
});
```
