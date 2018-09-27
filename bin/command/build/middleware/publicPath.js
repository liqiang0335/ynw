module.exports = context => option => {
  const {
    publicPath,
    envPublicPath,
    distPath,
    dpath,
    epath,
    env,
    test
  } = context;
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

  let target = handler[env]();
  if (dpath) {
    target = distPath;
  }
  if (epath) {
    target = envPublicPath;
  }
  option.output.publicPath = target;
  return option;
};
