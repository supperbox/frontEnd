const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
const path = require('path')
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    let isDev = env.development
    const base = {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist')
        },

        module: {
            // 转化文件 用什么去转化 使用哪些loader
            // use：数组、对象、字符串
            // 处理样式的前缀 postcss
            // 解析css的时候不能渲染dom
            // css 可以并行和css一同加载 mini-css-extract-plugin
            rules: [

                { // 解析js文件，默认调用@babel/core
                    test: /\.js$/,
                    use: 'babel-loader',
                },

                {
                    test: /\.css$/,
                    use: [
                        // 判断是不是开发环境
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                // 如果css文件引入其他文件，执行后面的两个loader
                                importLoaders: 2
                            }
                        }, 'postcss-loader', 'sass-loader'] // 从右向左执行
                },

                {
                    // 匹配scss文件，使用sass-loader调用node-sass来处理sass文件
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },

                { //图片的转化
                    test: /\.(jpe?g|png|gif)$/,
                    // use:'file-loader', // 默认拷贝作用
                    // 将比较小的图片转化为base64 ，比以前大，但是不用发请求
                    use: {
                        loader: 'url-loader',
                        options: {
                            name: 'image/[name].[ext]',
                            limit: 1024
                        }
                    }

                },

                { // 图表的转化
                    test: /\.(woff|ttf|eot|svg)$/,
                    use: 'file-loader'
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: 'index.html',
                minify: !isDev && {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true
                }
            }),


            // 如果是开发模式不使用抽离样式的插件
            !isDev && new MiniCssExtractPlugin({
                filename: 'css/extract.css'
            })
        ].filter(Boolean)
    }
    // 合并配置
    if (isDev) {
        return merge(base, dev)
    } else {
        return merge(base, prod)
    }
}
