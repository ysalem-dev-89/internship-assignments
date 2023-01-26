/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['react', 'jest', 'cypress', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
