const path = require("path");
const cwd = process.cwd();
const load = name => require(path.join(cwd, "node_modules", name));

module.exports = load;
