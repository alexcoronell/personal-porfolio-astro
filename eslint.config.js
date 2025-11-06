// eslint.config.js

import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // 1. Base configuration for JavaScript and TypeScript files
  {
    // Apply this config only to .js and .ts files
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2022, // Modern JS syntax support
      sourceType: 'module', // Enable ES modules (required for Astro)
      parser: tsParser, // Use TypeScript-aware parser
      parserOptions: {
        // Optional: enables project-wide type-aware linting (requires tsconfig.json)
        // project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Extend recommended TypeScript rules
      ...tsPlugin.configs.recommended.rules,
    },
  },

  // 2. Astro-specific configuration (handles .astro files automatically)
  // This includes the astro-eslint-parser and recommended rules for Astro syntax
  ...eslintPluginAstro.configs.recommended,

  // 3. Svelte-specific configuration (handles .svelte files automatically)
  // This includes the svelte-eslint-parser and recommended rules for Svelte syntax
  ...eslintPluginSvelte.configs.recommended,

  // 4. Global custom rules (applies to all files unless overridden)
  {
    rules: {
      // Example: warn about console.log usage (uncomment if desired)
      // 'no-console': 'warn',
      // Example: enforce consistent spacing in Astro expressions (optional)
      // 'astro/missing-scripts-attribute': 'error',
    },
  },
];
