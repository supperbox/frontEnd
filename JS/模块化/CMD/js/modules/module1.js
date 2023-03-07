// module1.js文件
define(function (require, exports, module) {
    //内部变量数据
    let data = 'jlw'
    //内部函数
    function show() {
        console.log('module1' + data)
    }
    //向外暴露
    module.exports = {
        show,
        msg:'已经获取到module1'
    }
})
