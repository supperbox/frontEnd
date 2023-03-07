let express = require('express')

let app = express()
let whiteList = ['http://localhost:3000']

app.use(express.static(__dirname)) // 中间件

app.use(function (req,res,next) {
    let origin = req.headers.origin
    if(whiteList.includes(origin)){
        // 设置哪个源可以访问
        res.setHeader('Access-Control-Allow-Origin',origin)
        // 允许携带哪个头
        res.setHeader('Access-Control-Allow-Headers','name')
        // 允许那些方法访问
        res.setHeader('Access-Control-Allow-Methods','PUT')
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true)
        // 检测存活时间
        res.setHeader('Access-Control-Max-Age',6000)
        // 允许返回的头
        res.setHeader('Access-Control-Expose-Headers','name')
    }
    next()
})

app.put('/getData',function (req,res) {
    console.log(req.headers);
    res.setHeader('name','')
    res.end('我也爱你')
})

app.listen(4000)