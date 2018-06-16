const alias = require("./alias");
const rules = require("./rules");
const publicPath = require("./publicPath");
const devServer = require("./devServer");
const html = require("./html");
const plugins = require("./plugins");
const bablerc = require("./bablerc");

module.exports = [devServer, alias, rules, publicPath, html, plugins, bablerc];
