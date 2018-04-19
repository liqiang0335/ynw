/**
 * rules
 */
const path = require("path");
const node_modules = path.join(__dirname, "../../../node_modules");
const rules = [
  {
    test: /\.js$/,
    use: ["babel-loader", "uglify-template-string-loader"],
    exclude: [node_modules]
  },
  {
    test: /\.vue$/,
    loader: "vue-loader"
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  },
  {
    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10240,
          name: "assets/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  {
    test: /\.scss/,
    use: ["style-loader", "css-loader", "sass-loader"]
  }
];

module.exports = context => option => {
  option.module = option.module || {};
  option.module.rules = rules;
  return option;
};
