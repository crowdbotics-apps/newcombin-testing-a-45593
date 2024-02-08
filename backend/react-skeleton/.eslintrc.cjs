module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  overrides: [
    {
      files: ["src/components/ui/*"],
      rules: {
        "react-refresh/only-export-components": "off",
      },
    },
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowExportNames: ["loader", "action"],
        allowConstantExport: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error", // or "error"
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    // The following rules are disabled, because there are use cases for these things
    "@typescript-eslint/no-explicit-any": 0, // Only use any when unknown or a more defined value can't solve the problem
    "@typescript-eslint/no-non-null-assertion": 0, // Only assert a null when you have already checked and the TS compiler fails to identify it
    "@typescript-eslint/ban-ts-comment": 0, // Only use ts-ignore comments for a single line at a time, when the ts-compiler error is incorrect or not useful
    "@typescript-eslint/no-empty-function": 0, // Empty functions are valid, but prefer undefined and/or optional chaining function calls when applicable
  },
};
