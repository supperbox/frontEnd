let express = require('express')

let app = express()

app.use(express.static(__dirname)) // 中间件

app.listen(4000)