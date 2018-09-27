const path = require("path");
const load = require("./build/middleware/load");

module.exports = context => {
  const pack = path.join(__dirname, "../package.json");
  const config = require(pack);
  const { version } = config;
  console.log(`>> version : ${version}`);
};
