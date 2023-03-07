let express = require('express')

let app = express()

app.use(express.static(__dirname)) // 中间件

app.get('/say',function (req,res) {
    console.log(req.query);
    res.end(`${req.query.cb}('ok')`)
})

app.listen(3000)