# 命令行参数

- `ynw init=vue` : 添加配置文件 (支持 vue/react)
- `ynw brc=react` : 切换 babelrc 配置为 react/vue。
- `ynw build=index` : 开发环境构建
- `ynw build=index env=hot` : 开发环境构建 + 热替换
- `ynw build=index env=pro` : 生产环境构建
- `ynw build entry=demo/index` : 命令行中直接指定 entry, 而无需配置 keys 字段
- `ynw version` 版本号
- `ynw cros` : 打开禁用跨域选项的 Chrome
- `ynw template` 复制模板文件到项目目录(会覆盖已有文件, 仅在初始化项目时使用)

### 使用方法

```shell
# 添加配置文件
ynw init=vue

# 安装依赖包
cnpm i

# 配置打包路径
yn.config.js

# 构建
ynw build=index env=dev
```

# 文档

[点击这里](https://github.com/liqiang0335/ynw/tree/master/doc)
