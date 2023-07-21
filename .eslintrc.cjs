module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended' // добавлено
  ],
  parser: '@typescript-eslint/parser', // добавлено
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json' // добавлено
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'], // добавлено '@typescript-eslint'
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off' // добавлено
  },
}

