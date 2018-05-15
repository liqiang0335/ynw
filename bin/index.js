#!/usr/bin/env node

const path = require("path");
const cwd = process.cwd();
const fns = require("../fns");
const commands = fns.getParams(process.argv);
const package = path.resolve(cwd, "package.json");
const context = {
  fns,
  commands,
  paths: { cwd, package }
};
const handlers = {
  dep: require("./plugins/dep")
};
Object.keys(commands).forEach(key => {
  if (handlers[key]) {
    handlers[key](context);
  }
});
