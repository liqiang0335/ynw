module.exports = context => option => {
  const { publicPath, envPublicPath, isDev } = context;
  if (isDev) {
    option.output.publicPath = envPublicPath || publicPath;
  } else {
    option.output.publicPath = publicPath;
  }
  return option;
};
