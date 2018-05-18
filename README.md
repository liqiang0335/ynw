# 命令行参数

* `ynw --version` 版本号
* `ynw --init` : 添加配置文件
* `ynw --dep`: 追加 NPM 依赖
* `ynw build=index env=dev` : 开发环境构建
* `ynw build=index env=hot` : 开发环境构建 + 热替换
* `ynw build=index env=pro` : 生产环境构建

### 使用方法

```shell
#首先添加配置文件
ynw --init

#装依赖包
cnpm i

#配置路径
yn.config.js

#构建打包
ynw build=index env=dev
```

# 工作中常用的函数

> 以下函数多来自于 [30-seconds-of-cod](https://github.com/Chalarangelo/30-seconds-of-code)

### 🔌 Adapter

### 📚 Array

<details>
<summary>View contents</summary>

* [`differenceBy`](#differenceby)

</details>

### 🌐 Browser

<details>
<summary>View contents</summary>

* [`UUIDGeneratorBrowser`](#uuidgeneratorbrowser)

</details>

### ⏱️ Date

<details>
<summary>View contents</summary>

* [`formatDuration`](#formatduration)
* [`getColonTimeFromDate`](#getcolontimefromdate)
* [`getDaysDiffBetweenDates`](#getdaysdiffbetweendates)
* [`getMeridiemSuffixOfInteger`](#getmeridiemsuffixofinteger)
* [`tomorrow`](#tomorrow)

</details>

### 🎛️ Function

### ➗ Math

### 📦 Node

### 🗃️ Object

### 📜 String

### 📃 Type

### 🔧 Utility

<details>
<summary>View contents</summary>

* [`httpGet`](#httpget)
* [`httpPost`](#httppost)

</details>
