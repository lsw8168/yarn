module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'prettier'
    ],
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
    ignorePatterns: [
      'build/',
      'node_modules/',
      '.pnp.cjs',
      '.yarn/',
    ],
    overrides: [
      {
        extends: [
          'plugin:cypress/recommended',
        ],
        files: [
          'cypress/**/*.ts',
        ],
        rules: {},
      },
    ],
    rules: {},
  };