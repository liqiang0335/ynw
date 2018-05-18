const { request, attach } = require("./lib/axios");
const { setter, logger } = require("./lib/vuex");

module.exports = {
  request,
  attach,
  setter,
  logger
};
