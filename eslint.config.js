import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Warn on any usage of 'any', even when not explicitly declared
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn", // Warn about console statements
      "eqeqeq": "warn", // Enforce strict equality checks
      "@typescript-eslint/no-implicit-any": "warn", // Warn for implicit 'any' types
      "@typescript/prefer-const": "error", // Prefer 'const' over 'let' when possible
      // Enforce 'unknown' instead of 'any' where possible
      "@typescript-eslint/no-object-literal-type-assertion": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Require explicit return types for functions
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { "argsIgnorePattern": "^_" } // Ignore unused args starting with _
      ],
      // Enforce stricter typing conventions
      "@typescript-eslint/explicit-function-return-type": "warn", // Enforce function return types
      "@typescript-eslint/explicit-member-accessibility": ["warn", { "accessibility": "explicit" }], // Ensure explicit member accessibility
    },
  },
);
