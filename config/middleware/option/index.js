const alias = require("./alias");
const rules = require("./rules");
const publicPath = require("./publicPath");
const split = require("./split");
const devServer = require("./devServer");
const html = require("./html");

module.exports = [devServer, alias, rules, publicPath, split, html];
