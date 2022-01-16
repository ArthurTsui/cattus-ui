const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')

const componentName = process.argv[2]
const ComponentName = uppercamelcase(componentName)
const componentPath = path.resolve(__dirname, '../components', componentName)
const files = [
  {
    //入口文件
    fileName: 'index.tsx',
    content: `import ${ComponentName} from './${componentName}'\n\nexport type { ${ComponentName}Props } from './${componentName}'\n\nexport default ${ComponentName}`
  },
  {
    fileName: `${componentName}.tsx`,
    content: `import React, { FC, ReactNode } from 'react'\nimport classNames from 'classnames'\n\ninterface Base${ComponentName}Props{\n\tchildren?: ReactNode\n}\n\nexport type ${ComponentName}Props = Base${ComponentName}Props\n\nconst ${ComponentName}: FC<${ComponentName}Props> = (props:${ComponentName}Props) =>{\n\tconst classes = classNames()\n\n\treturn <div className={classes}></div>\n}\n\nexport default ${ComponentName}`
  },
  {
    fileName: `__tests__/${componentName}.test.tsx`,
    content: `import React from 'react';`
  }
]

files.forEach((file) => {
  fileSave(path.join(componentPath, file.fileName)).write(file.content, 'utf-8').end('\n')
})
