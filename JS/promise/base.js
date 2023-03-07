// const Promise = require('./promise')
const fs = require('fs')

// let promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{},1000)
// })
//
// promise.then(res=>{
//     console.log(res,'then')
// },error=>{
//     console.log(error,'reject')
// })

function read(...args) {
    return new Promise((resolve,rejected)=>{
        fs.readFile(...args,function (err,data) {
            if(err){
                rejected(err)
            }
            resolve(data)
        })
    })
}

read('./age.txt','utf8').then(data=>{
    console.log(data);
}).then(data=>{
    return Promise.reject()
},err=>{

}).then(data=>{
    console.log(data);
},error =>{
    console.log(error,'err');
    throw new Error('失败')
}).catch(err=>{
    return 1
}).then(res =>{
    console.log(res);
})








// then之后也要返回一个promise，也会让这个promise执行，采用他的状态，将成功或失败的结果传递给外层的下一个then中















