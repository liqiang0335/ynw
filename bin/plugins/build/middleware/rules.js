const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const createRule = ({ params }) => {
  const styleLoader = params.isDev
    ? "vue-style-loader"
    : MiniCssExtractPlugin.loader;
  return [
    {
      test: /\.css$/,
      use: [styleLoader, "css-loader"]
    },
    {
      test: /\.scss$/,
      use: [styleLoader, "css-loader", "sass-loader"]
    },
    {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: file => {
        if (/ynw/.test(file)) {
          return false;
        }
        return /node_modules/.test(file);
      }
    },
    {
      test: /\.vue$/,
      loader: "vue-loader"
    },

    {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg)(\?.+)?$/,
      use: [
        {
          loader: "url-loader",
          options: { limit: 10240, name: "assets/[name].[hash:6].[ext]" }
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
