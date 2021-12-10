module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'object-curly-newline': 0,
    'no-console': 0,
    'no-debugger': 0,
    'react/jsx-no-bind': 0,
    'no-param-reassign': [2, { props: false }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 0,
    'jsx-a11y/label-has-associated-control': ['error', {
      'required': {
        'some': ['nesting', 'id']
      }
    }],
    'jsx-a11y/label-has-for': ['error', {
      'required': {
        'some': ['nesting', 'id']
      }
    }],
  },
};
