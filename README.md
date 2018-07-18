# 命令行参数

- `ynw --version` 版本号
- `ynw --init` : 添加配置文件
- `ynw build=index` : 开发环境构建
- `ynw build=index env=hot` : 开发环境构建 + 热替换
- `ynw build=index env=pro` : 生产环境构建
- `ynw brc=react` : 切换 babelrc 配置为 react/vue。

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

# 文档

[点击这里](https://github.com/liqiang0335/ynw/tree/master/api)
