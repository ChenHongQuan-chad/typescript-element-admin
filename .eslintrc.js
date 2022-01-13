/*
 * @Description:
 * @Author: Chad
 * @LastEditTime: 2022-01-06 15:05:29
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    "plugin:prettier/recommended",
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-tabs': 0,
    'prettier/prettier': 0,
    indent: ['off', 'tab'],
    'no-var': 2, // 禁用var，用let和const代替
    'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
    'no-trailing-spaces': 1, // 禁用行尾空格
    'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
    'no-unused-vars': [
        2,
        {
            vars: 'all',
            args: 'none'
        }
    ], // 禁止出现未使用过的变量

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'error',
    'vue/html-indent': [
        0,
        'tab'
    ],
    'vue/html-self-closing': [0],
    'vue/multiline-html-element-content-newline': [0],
    'vue/singleline-html-element-content-newline': [0],
    'vue/html-closing-bracket-newline': [0],
    'vue/no-v-html': [0]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
