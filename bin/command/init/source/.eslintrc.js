module.exports = {
  extends: ["eslint:recommended", "plugin:vue/essential"],
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    importName: true,
    log: true,
    __dirname: true,
    importVueComps: true,
    process: true,
    path: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: 2,
    "no-irregular-whitespace": "off",
    "no-console": "off"
  }
};
