# Error

## `$export is not a function`

这个错误可能是 node_modules 路径不正确导致

```js
{
    test: /\.js$/,
    use: ["babel-loader", "uglify-template-string-loader"],
    exclude: [node_modules] //路径指向要正确
  }
```
