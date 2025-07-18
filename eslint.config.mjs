import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslintParser from '@typescript-eslint/parser'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ),
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never']
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin,
      react: reactPlugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true
        }
      ],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            ['^(@|components)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$']
          ]
        }
      ],
      'prettier/prettier': 'error'
    }
  }
]

export default eslintConfig
