const colors = require("colors");
const path = require("path");

module.exports = context => {
  const pack = path.join(__dirname, "../../package.json");
  const config = require(pack);
  const { version } = config;
  console.log(`>> version : ${version}`.green);
};
