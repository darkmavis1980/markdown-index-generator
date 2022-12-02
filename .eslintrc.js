module.exports = {
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx'
      ],
      rules: {
        'no-console': ["error", { allow: ["warn", "error"] }],
      },
      "parser": "@typescript-eslint/parser",
      "plugins": [
        "@typescript-eslint"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:n@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
    },
  ],
}
