const load = require("./load");
const MiniCssExtractPlugin = load("mini-css-extract-plugin");

const createRule = context => {
  const { isDev, hot, extractCSS } = context;
  const exclude = hot
    ? /node_modules/
    : file => {
        if (/ynw/.test(file)) return false;
        return /node_modules/.test(file);
      };

  const styleLoader = extractCSS
    ? MiniCssExtractPlugin.loader
    : "vue-style-loader";

  return [
    { test: /\.css$/, use: [styleLoader, "css-loader"] },
    { test: /\.scss$/, use: [styleLoader, "css-loader", "sass-loader"] },
    {
      test: /\.js$/,
      loader: "babel-loader",
      exclude
    },
    { test: /\.vue$/, loader: "vue-loader" },
    {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg)(\?.+)?$/,
      use: [
        {
          loader: "url-loader",
          options: { limit: 3000, name: "assets/[name].[hash:6].[ext]" }
        }
      ]
    }
  ];
};

const postcssPipe = rules => {
  rules.forEach(item => {
    item.use.push("postcss-loader");
  });
};

module.exports = context => option => {
  const rules = createRule(context);
  if (!context.isDev) {
    postcssPipe([rules[0], rules[1]]);
  }
  option.module.rules = rules;
  return option;
};
