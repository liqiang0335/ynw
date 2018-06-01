const load = require("./load");
const MiniCssExtractPlugin = load("mini-css-extract-plugin");
const colors = load("colors");

const getStyleLoader = context => {
  const { env, extractCSS } = context;
  const loader = extractCSS ? MiniCssExtractPlugin.loader : "vue-style-loader";
  const handler = {
    dev: loader,
    pro: loader,
    hot: "vue-style-loader"
  };
  return handler[env];
};

const createRule = context => {
  const { isDev, hot } = context;
  const exclude = hot
    ? /node_modules/
    : file => {
        if (/ynw/.test(file)) return false;
        return /node_modules/.test(file);
      };

  const styleLoader = getStyleLoader(context);
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
          options: { limit: 5000, name: "assets/[name].[hash:6].[ext]" }
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
