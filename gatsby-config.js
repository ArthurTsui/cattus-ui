const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass')
      }
    }
  ]
}

// // 定制化 Webpack 配置
// exports.onCreateWebpackConfig = (args) => {
//   args.actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         // 配置后就可以使用 import Button from `@/Button` 来引入组件了
//         '@': path.resolve(__dirname, '../src/components/')
//       }
//     }
//   })
// }
