/*
 * @Date: 2023-03-28 15:01:54
 */
// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有配置信息都应该写到 module.exports 中
module.exports = {
  mode: 'production',
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的文件
    filename: "bundle.js",
    // 告诉webpack不适用箭头函数
    environment: {
      arrowFunction: false
    },
  },
  // 指定webpack打包要用到的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    targets: {
                      "chrome": "88",
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },
  // 配置Webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      title: "hello ts",
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  // 用来设置引入模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}