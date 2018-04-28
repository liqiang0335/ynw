/**
 * rules
 */

const createRule = ({ params }) => {
  const { node_modules } = params;
  return [
    {
      test: /\.js$/,
      loader: "babel-loader",
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
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg)(\?.+)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10240,
            name: "assets/[name].[hash:6].[ext]"
          }
        }
      ]
    },
    {
      test: /\.scss/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }
  ];
};

module.exports = context => option => {
  option.module.rules = createRule(context);
  return option;
};
