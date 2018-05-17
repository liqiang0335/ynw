const alias = require("./alias");
const rules = require("./rules");
const publicPath = require("./publicPath");
const devServer = require("./devServer");
const html = require("./html");
const plugins = require("./plugins");

module.exports = [plugins, devServer, alias, rules, publicPath, html];
