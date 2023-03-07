// 在。。。之后；after

// 在调用某个函数三次之后再去执行


let newSay = after(3,function say() {
    console.log('jlw');
})

function after(times,fn) {
    return function () {
        if(!(--times)){
            fn()
        }
    }
}

newSay()
newSay()
newSay()


// 异步并发问题： 同时发送多个请求，等到所有请求成功之后才执行


