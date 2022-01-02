const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')

const componentName = process.argv[2]
const componentUpper = componentName.replace(/^\S/, (s) => s.toUpperCase())
const ComponentName = uppercamelcase(componentName)
const componentPath = path.resolve(__dirname, '../src/components', componentName)
const files = [
  {
    //入口文件
    fileName: 'index.tsx',
    content: `import ${componentUpper} from './${componentName}'\n\nexport default ${componentUpper}`
  },
  {
    fileName: `${componentName}.tsx`,
    content: `import * as React from 'react'\n\nexport interface I${componentUpper}Props{}\n\nconst ${componentUpper}: React.FC<I${componentUpper}Props> = (props:I${componentUpper}Props) =>{\n\treturn <></>\n}\n\nexport default ${componentUpper}`
  },
  {
    fileName: `__tests__/${componentName}.test.tsx`,
    content: `import React from 'react';`
  }
]

files.forEach((file) => {
  fileSave(path.join(componentPath, file.fileName)).write(file.content, 'utf-8').end('\n')
})
