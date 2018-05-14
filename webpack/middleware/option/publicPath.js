/**
 *处理 publicPath
 */
module.exports = ({ params, values }) => option => {
  const { publicPath, envPublicPath } = values;
  if (publicPath && params.env === "production") {
    option.output.publicPath = publicPath;
  } else {
    option.output.publicPath = envPublicPath || publicPath;
  }
  return option;
};
