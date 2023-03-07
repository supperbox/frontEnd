const fs = require('fs')
// node.js 中的api，读取文件，异步操作


// 异步操作，并发执行，两个操作互不影响
fs.readFile('age.txt', 'utf8', function (err, data) {
    out('age',data)
})

fs.readFile('4、name.txt', 'utf8', function (err, data) {
    out('name',data)
})


// 并发的执行，利用定时器等到条件成熟（调用达到次数）时，执行fn


const after = (times, fn) =>  {
    let renderObj = {}
    return (key,value)=>{
        renderObj[key] = value
        if(--times === 0){
            fn(renderObj)
        }
    }
}

let out = after(2, (a) => {
        console.log(a)
    }
)