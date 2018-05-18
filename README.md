* [`registeComp`](#registeComp)

# 命令行参数

* `ynw --version` 版本号
* `ynw --init` : 添加配置文件
* `ynw --dep`: 追加 NPM 依赖
* `ynw build=index env=dev` : 开发环境构建
* `ynw build=index env=hot` : 开发环境构建 + 热替换
* `ynw build=index env=pro` : 生产环境构建

### 使用方法

```shell
#添加配置文件
ynw --init

#安装依赖包
cnpm i

#配置打包路径
yn.config.js

#构建
ynw build=index env=dev
```

# 工作中常用的函数

> 以下函数多来自于 [30-seconds-of-cod](https://github.com/Chalarangelo/30-seconds-of-code)

### Function

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

* [`registeComp`](#registeComp)
* [`httpPost`](#httppost)

</details>

### registeComp

```js
// 注册 VUE 组件
// 注册components文件夹下的所有.vue文件为组件
// header.vue 注册为 "yn-header"s

import registeComp from "ynw/util/registeComp";
registeComp(Vue, "./components");
```
