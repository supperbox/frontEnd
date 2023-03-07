function parseURL(str) {
    let reg = /.*\?([^#]*)/.exec(str)
    let params = reg[1]
    params = params.split('&')
    let obj = {}
    params.forEach(item => {
        if(/=/.test(item)){
            let [key,value] = item.split('=')
            value = decodeURIComponent(value)
            obj[key] = obj[key] ? [].concat(obj[key],value) : value
        }else{
            obj['param'] = obj['param'] ? [].concat(obj['param'],item) : item
        }
    })
    return obj
}

console.log(parseURL('https://www.baidu.com/s?ie=UTF-8&wd=%E4%BB%80%E4%B9%88%E4%BA%8B%E9%B8%9F'));