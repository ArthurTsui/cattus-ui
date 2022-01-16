const path = require('path')
const fileSave = require('file-save')

const componentName = process.argv[2]
const componentPath = path.resolve(__dirname, '../components/styles', componentName)
const files = [
  {
    //入口文件
    fileName: 'index.tsx',
    content: `import './index.scss'`
  },
  {
    fileName: `index.scss`,
    content: `@import "../resetDefaultStyles";\n@import "../_variables/index.scss";\n@import "../_function/index.scss";\n@import "../_mixins/index.scss";\n@import "./${componentName}";`
  },
  {
    fileName: `_${componentName}.scss`,
    content: ``
  }
]

files.forEach((file) => {
  fileSave(path.join(componentPath, file.fileName)).write(file.content, 'utf-8').end('\n')
})
