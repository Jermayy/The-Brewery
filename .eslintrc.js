module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:flowtype/recommended',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
      },
    ],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '^.*React\\$AbstractComponent.*',
    }],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    camelcase: 0,
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: true }],
    'flowtype/no-weak-types': [2, {
      any: false,
      Object: true,
      Function: true,
    }],
    'flowtype/delimiter-dangle': [
      2,
      'always-multiline',
    ],
    'flowtype/semi': [2, 'always'],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'import/no-named-as-default': 0,
    'react/function-component-definition': 0,
    'import/no-extraneous-dependencies': 0, // Turn off to allow mono-repo to import without defining common deps in respective package.json
    'import/prefer-default-export': 0,
  },
};
