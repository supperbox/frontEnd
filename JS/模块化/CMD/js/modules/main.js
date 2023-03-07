// main.js文件
define(function (require) {
    let m1 = require('./module1')
    let m2 = require('./module2')
    m1.show()
    m2.show()
    setTimeout(m2.show,1000)
})
