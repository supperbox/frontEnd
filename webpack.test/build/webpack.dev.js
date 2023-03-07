const path = require('path')

module.exports = {
    mode:'development',
    devServer: { // 开发服务的配置
        port:3000,
        // gzip 可以提升返回页面的速度
        compress:true,
        contentBase:path.resolve(__dirname,'../dist'),
        // webpack 启动dist下的文件
    }
}