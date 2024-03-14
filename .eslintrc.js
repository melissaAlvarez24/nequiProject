module.exports = {
  root: true,
  parserOptions: {
    requireConfigFile: false,
  },
  extends: '@react-native',
  rules: {
    "react-native/no-inline-styles": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
};
