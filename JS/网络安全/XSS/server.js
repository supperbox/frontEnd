// 用户登录后返回一个标识 cookie

let express = require('express')

let app = express()

let path = require('path') // 帮我们拼接路径

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname)))

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

let userList = [{username:'zfpx',password:'zfpx'},{username: 'jlw',password: "jlw"}]
let SESSION_ID = 'connect.sid';
let session = {}

app.post('/api/login',function (req,res) {
    let {username,password} = req.body;
    let user = userList.find(user => {
        return  (user.username === username)&&(user.password === password)
    });
    if(user){
        // 登录成功后,传递唯一的cookie
        let cardId = Math.random() + Date.now();
        session[cardId] = {user} // 服务器上设置 cookie和用户的对应
        res.cookie(SESSION_ID,cardId)//{httpOnly: true}
        res.json({code:0})
    }else {
        res.json({
            code:1,error:'用户不存在'
        })
    }
})
// 反射型XSS http://localhost:3000/welcome?type=<script>alert(1)</script>
// chrome 发现路径异常会有XSS屏蔽功能
app.get('/welcome',function (req,res) {
    res.send(`${encodeURIComponent(req.query.type)}`)
})

app.get('/api/list',function (req,res) {
    res.json()

})



app.listen(3000)
