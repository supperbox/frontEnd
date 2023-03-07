function debounce(fn,delay) {
    let timer = null
    return function (...args) {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
          return  fn(...args)
        },delay)
    }
}


function throttle(fn,delay) {
    let last = Date.now()
    return function (...args) {
        let now = Date.now()
        // 我只会在时间合适的时候启动，同时我一旦启动就把启动时间赋值给last，开启限制
        if(now - last > delay){
            last = now
            setTimeout(()=>{
               return  fn(...args)
            },delay)
        }
    }
}

function combine(fn,delay) {
    let timer = null
    let last = Date.now()
    return function (...args) {
        let now = Date.now()
        // 当在延时范围内重复触发时，取最后一次触发，防抖
        if(now - last < delay){
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(()=>{
                return fn(...args)
            },delay)
        }
        // 当超出延时范围内时，立即执行，保证最大延时
        else {
            fn(...args)
            last = now
        }
    }
}