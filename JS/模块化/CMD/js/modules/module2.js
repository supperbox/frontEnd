define(function (require, exports, module) {
    //引入依赖模块(同步)
    let module1 = require('./module1')

    let key = '没有key'

    function show() {
        console.log( module1.msg + key )
    }

    exports.show = show
    //引入依赖模块(异步)

    require.async('./module3', function (m3) {
        console.log('异步引入依赖模块3  ' + m3.API_KEY)
        key = m3.API_KEY
    })
})