const fs = require('fs')
// node.js 中的api，读取文件，异步操作


// 异步操作，并发执行，两个操作互不影响
// fs.readFile('age.txt', 'utf8', function (err, data) {
//     e.emit()
// })
//
// fs.readFile('4、name.txt', 'utf8', function (err, data) {
//     e.emit()
// })

// 发布和订阅
// 订阅，将要执行的事情存储好；发布，让订阅好的事情依次执行

let e = {
    arr:[],
    on(key,fn){
        if(!this.arr[key]){
            this.arr[key] = []
        }
        this.arr[key].push(fn)
    },
    emit(key,...args){
        if(!this.arr[key]){
            return
        }
        this.arr[key].forEach(fn => fn(...args))
    },
    remove(key,fn){
        if(!this.arr[key]){
            return
        }
        this.arr[key].forEach((item,index) => {
            if(item === fn){
                this.arr[key].splice(index,1)
            }
        })
    }
}

function one(a){
    console.log('名字是'+ a);
}

function two(a){
    console.log(a+'是帅比');
}

e.on('name',one)

e.on('name',two)


e.on('age',(b)=>{
    console.log('年龄是'+b)
})

e.emit('name','jlw')
e.remove('name',one)
e.remove('name',two)
e.emit('name','jlw')

e.emit('age',23)

