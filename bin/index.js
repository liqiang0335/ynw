#!/usr/bin/env node

const path = require("path");
const cwd = process.cwd();
const fns = require("./fns");
const context = {
  fns,
  commands: fns.getParams(process.argv),
  paths: {
    cwd,
    package: path.resolve(cwd, "package.json")
  }
};

/**
 * Commands Handler
 */
const setDep = require("./plugins/dep");
setDep(context);
