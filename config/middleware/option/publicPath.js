/**
 *处理 publicPath
 */
module.exports = context => option => {
  const { env, value, isPlain, config } = context;
  const { publicPath, envPublicPath } = config;
  if (publicPath && env === "production") {
    option.output.publicPath = publicPath;
  } else {
    option.output.publicPath = envPublicPath || publicPath;
  }
  return option;
};
