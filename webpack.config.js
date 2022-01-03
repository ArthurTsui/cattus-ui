const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const pkg = require('./package.json')

const config = {
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? 'cattus.js' : 'cattus.min.js',
    library: 'cattus-ui',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   use: 'babel-loader',
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.ts(x)?$/,
      //   loader: 'ts-loader',
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
        test: /\.ts(x)?$/,
        use: [
          'babel-loader?cacheDirectory',
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // 抽取样式文件，将css样式文件用link标签引入，使用此loader就不需要用style-loader，即使用了也不会有效果
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 2 // 一个css中引入了另一个css，也会执行之前两个loader，即postcss-loader和sass-loader
            }
          },
          {
            // 使用 postcss 为 css 加上浏览器前缀
            loader: 'postcss-loader',
            options: {
              // options has an unknown property 'plugins';
              postcssOptions: {
                // PostCSS plugin autoprefixer requires PostCSS 8.将autoprefixer降到8.0.0版本
                plugins: [require('autoprefixer')]
              }
            }
          },
          {
            loader: 'sass-loader' // 使用 sass-loader 将 scss 转为 css
          }
        ]
      },
      {
        test: /(\.(eot|ttf|woff|woff2)|font)$/,
        loader: 'file-loader',
        options: { outputPath: 'dist/assets/fonts/' }
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'file-loader',
        options: { outputPath: 'dist/assets/images/' }
      }
    ]
  },
  devServer: {
    static: {
      directory: './dist'
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {}
  },
  plugins: [
    // 主要用于对打包好的js文件的最开始处添加版权声明
    new webpack.BannerPlugin(`cattus-ui ${pkg.version}`),
    // 将CSS提取到单独的文件中
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'cattus-ui.css' : 'cattus-ui.min.css',
      chunkFilename: '[id].css'
    })
  ],
  optimization: {
    minimizer: devMode
      ? []
      : [
          // 压缩js代码
          // webpack v5 使用内置的TerserJSPlugin替代UglifyJsPlugin，因为UglifyJsPlugin不支持ES6
          new TerserJSPlugin({
            // cache: true, // 启用文件缓存并设置缓存目录的路径
            parallel: true // 使用多进程并行运行
            // sourceMap: true // set to true if you want JS source maps
          }),
          // 用于优化或者压缩CSS资源
          new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'), // 用于优化\最小化 CSS 的 CSS 处理器，默认为 cssnano
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, // 传递给 cssProcesso
            canPrint: true // 布尔值，指示插件是否可以将消息打印到控制台，默认为 true
          })
        ],
    sideEffects: false
  }
}

module.exports = config