module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/typescript',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'markdown', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  globals: {
    gtag: true
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止debugger

    '@typescript-eslint/no-explicit-any': [2], // 禁止any类型
    '@typescript-eslint/no-empty-function': [2], // 禁止空函数
    '@typescript-eslint/no-var-requires': [2],
    '@typescript-eslint/camelcase': ['off'], // 关闭词组下划线校验
    '@typescript-eslint/ban-ts-ignore': ['off'], // 允许使用ts-ignore
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }], // 禁止使用var
    '@typescript-eslint/no-unused-expressions': 2,

    'no-unused-expressions': 'off',

    'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ], // 强制箭头函数的箭头前后使用一致的空格
    'block-spacing': [2, 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ], // 强制在代码块中使用一致的大括号风格
    camelcase: [
      0,
      {
        properties: 'always'
      }
    ], // 强制使用骆驼拼写法命名约定
    'comma-dangle': [2, 'never'], // 要求或禁止末尾逗号
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ], // 强制在逗号前后使用一致的空格
    'comma-style': [2, 'last'], // 强制使用一致的逗号风格
    'constructor-super': 2, // 要求在构造函数中有 super() 的调用
    curly: [2, 'multi-line'], // 强制所有控制语句使用一致的括号风格
    'dot-location': [2, 'property'], // 强制在点号之前和之后一致的换行
    'eol-last': 2, // 要求或禁止文件末尾存在空行
    eqeqeq: [2, 'allow-null'], // 要求使用 === 和 !==
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ], // 强制 generator 函数中 * 号周围使用一致的空格
    'handle-callback-err': [2, '^(err|error)$'], // 要求回调函数中有容错处理
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ], // 强制使用一致的缩进
    'jsx-quotes': [2, 'prefer-single'], // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ], // 强制在关键字前后使用一致的空格
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ], // 要求构造函数首字母大写
    'new-parens': 2, // 要求调用无参构造函数时有圆括号
    'no-class-assign': 2, // 禁止修改类声明的变量
    'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
    'no-delete-var': 2, // 禁止删除变量
    'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, // 禁止出现重复的 case 标签
    'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
    'no-empty-pattern': 2, // 禁止使用空解构模式
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-eval': 2, // 禁用 eval()
    'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2, // 禁止扩展原生类型
    'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
    'no-fallthrough': 2, // 禁止 case 语句落空
    'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
    'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 2, // 禁止在字符串和注释之外不规则的空白
    'no-iterator': 2, // 禁用 __iterator__ 属性
    'no-label-var': 2, // 不允许标签与变量同名
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ], // 禁用标签语句
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-multi-str': 2, // 禁止使用多行字符串
    'no-multiple-empty-lines': [
      2,
      {
        max: 3,
        maxEOF: 3,
        maxBOF: 3
      }
    ], // 禁止出现多行空行（此处设置最多出现连续3个空行）
    'no-global-assign': 2, // 禁止对原生对象或只读的全局对象进行赋值，原no-native-reassign已被此替换
    'no-unsafe-negation': 2, // 禁止对关系运算符的左操作数使用否定操作符，原no-negated-in-lhs已被此替换
    'no-new-object': 2, // 禁用 Object 的构造函数
    'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
    'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2, // 禁止把全局对象作为函数调用
    'no-octal': 2, // 禁用八进制字面量
    'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 2, // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-proto': 2, // 禁用 __proto__ 属性
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-regex-spaces': 2,
    'no-self-assign': 2, // 禁止自我赋值
    'no-self-compare': 2, // 禁止自身比较
    'no-sequences': 2, // 禁用逗号操作符
    'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
    'func-call-spacing': 2, // 要求或禁止在函数标识符和其调用之间有空格，原no-spaced-func已被此替换
    'no-sparse-arrays': 2, // 禁用稀疏数组
    'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-throw-literal': 2, // 禁止抛出异常字面量
    'no-trailing-spaces': 1, // 禁用行尾空格
    'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
    'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unreachable': 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ], // 禁止出现未使用过的变量
    'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁用不必要的构造函数
    'no-useless-escape': 0, // 禁用不必要的转义字符
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'no-with': 2, // 禁用 with 语句
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ], // 强制函数中的变量要么一起声明要么分开声明
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ], // 强制操作符使用一致的换行符
    'padded-blocks': [0, 'never'], // 要求或禁止块内填充
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ], // 强制使用一致的反勾号、双引号或单引号
    semi: [2, 'never'], // 要求或禁止使用分号代替 ASI，分号设置：never 从不出现分号，always 必须分号结尾
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ], // 强制分号之前和之后使用一致的空格
    'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ], // 强制在注释中 // 或 /* 使用一致的空格
    'template-curly-spacing': [2, 'never'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], // 要求 IIFE 使用括号括起来
    'yield-star-spacing': [2, 'both'], // 强制在 yield* 表达式中 * 周围使用空格
    yoda: [2, 'never'], // 要求或禁止 “Yoda” 条件
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ], // 强制在大括号中使用一致的空格
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
    'no-confusing-arrow': 0, // 不允许箭头功能，在那里他们可以混淆的比较
    'no-restricted-imports': 0, // 允许指定模块加载时的进口
    'object-shorthand': 0, // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-arrow-callback': 0, // 要求使用箭头函数作为回调
    'prefer-reflect': 0, // 要求在合适的地方使用 Reflect 方法
    'prefer-spread': 0, // 要求使用扩展运算符而非 .apply()
    'prefer-template': 0, // 要求使用模板字面量而非字符串连接
    'prefer-rest-params': 0, // Suggest using the rest parameters instead of arguments
    'require-yield': 2, // 要求generator 函数内有 yield
    'linebreak-style': [2, 'unix'], // 强制使用一致的换行风格

    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-bind': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react/function-component-definition': 0,
    'react/no-unused-class-component-methods': 0,

    'import/extensions': 0,
    'import/no-cycle': 0,

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,

    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-continue': 0,
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,

    'jest/no-test-callback': 0,
    'jest/expect-expect': 0,
    'jest/no-done-callback': 0,
    'jest/valid-title': 0,
    'jest/no-conditional-expect': 0,

    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }]
  }
}
