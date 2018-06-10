module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {},
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
