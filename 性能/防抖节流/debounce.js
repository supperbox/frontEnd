// 防抖
let debounce = (fn, delay) => {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)
    }
}


function send(i) {
}

// 节流
let throttle = (fn,delay) => {
    let valid = true
    return function () {
        if(valid){
            valid = false
            setTimeout(()=>{
                valid = true
                fn()
            },delay)
        }
    }
}

// 节流和防抖结合

document.addEventListener('click', throttle(send, 5000))
