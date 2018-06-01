const path = require("path");
module.exports = context => option => {
  const { publicPath, envPublicPath, distPath, env } = context;
  const handler = {
    dev: envPublicPath || publicPath || distPath,
    pro: publicPath || distPath,
    hot: "/dist/"
  };
  option.output.publicPath = handler[env];
  return option;
};
