#!/usr/bin/env node

const fns = require("./util/fns");
const commands = fns.getParams(process.argv);
const cwd = process.cwd();
const context = {
  fns,
  cwd,
  ...commands
};
const handlers = {
  dep: require("./plugins/dep"),
  init: require("./plugins/init"),
  key: require("./plugins/build")
};
Object.keys(commands).forEach(key => {
  if (handlers[key]) {
    handlers[key](context);
  }
});
