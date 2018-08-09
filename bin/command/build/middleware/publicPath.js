module.exports = context => option => {
  const { publicPath, envPublicPath, distPath, env, test } = context;
  const handler = {
    dev: () => envPublicPath || publicPath || distPath,
    pro: () => {
      if (test) {
        return envPublicPath;
      }
      return publicPath || distPath;
    },
    hot: () => "/dist/"
  };
  option.output.publicPath = handler[env]();
  return option;
};
