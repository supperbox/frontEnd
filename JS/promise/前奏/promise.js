// Promise是一个类，只需要new一下，解决回调地狱问题，以及多个请求的并发问题


new Promise(()=>{
    console.log(1);
})

console.log(2);