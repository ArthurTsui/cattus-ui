export default {
  title: 'cattus-ui', // 网站的标题
  typescript: true, // 如果需要在.mdx文件中引入Typescript组件，则使用此选项
  dest: 'side', // 指定docz构建的输出目录
  files: 'docs/*.mdx', // Glob模式用于查找文件。默认情况下，Docz会在源文件夹中找到所有扩展名为.mdx的文件。
  ignore: ['README.md', 'CHANGELOG.md'] // 用于忽略由docz解析的文件的选项
}
