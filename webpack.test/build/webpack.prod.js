const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    mode:'production',
    optimization: {
        // 优化项目，压缩方案
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    },
    plugins: [
        // 清除dist原有的文件
        new CleanWebpackPlugin(),
    ]
}