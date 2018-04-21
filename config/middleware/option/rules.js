/**
 * rules
 */
const path = require("path");
const node_modules = path.join(__dirname, "../../../node_modules");
const rules = [
  {
    test: /\.js$/,
    exclude: [node_modules],
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: ["es2015", "stage-0"]
        }
      },
      {
        loader: "uglify-template-string-loader"
      }
    ]
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
