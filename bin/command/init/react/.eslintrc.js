module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
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
    "no-console": "off"
  }
};
