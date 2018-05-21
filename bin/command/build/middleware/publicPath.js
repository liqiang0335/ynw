module.exports = context => option => {
  const { publicPath, envPublicPath, isDev } = context;
  if (isDev) {
    option.output.publicPath = envPublicPath || publicPath || "/dist/";
  } else {
    option.output.publicPath = publicPath || "/dist/";
  }
  return option;
};
