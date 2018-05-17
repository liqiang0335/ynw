#!/usr/bin/env node

const fns = require("./util/fns");
const commands = fns.getParams(process.argv);
const cwd = process.cwd();
const context = { fns, cwd, ...commands };
const handlers = {
  dep: require("./command/dep"),
  init: require("./command/init"),
  version: require("./command/version"),
  build: require("./command/build")
};
Object.keys(commands).forEach(key => {
  if (handlers[key]) {
    handlers[key](context);
  }
});
