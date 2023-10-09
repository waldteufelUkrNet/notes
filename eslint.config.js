import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"], // js in html?
    ignores: ["node_modules/", ".git/"],
    languageOptions: {
      ecmaVersion: "latest",
      // "sourceType": "module",
      globals: {
        ...globals.browser // додати console.log() та інші браузерні фішки
      }
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: true
    },
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error"
    }
  }
];
