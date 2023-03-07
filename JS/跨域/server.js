let express = require('express')

let app = express();

app.get('/say',function (req,res) {
    let {wd,cb} = req.query
    console.log(wd,cb)
    res.send(`${cb}('我也爱你')`)
})

app.listen(3000);