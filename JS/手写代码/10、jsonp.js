function jsonp(url,params,callBack) {
    function getUrl(){
        let str = ''
        for(let i in params){
            str += `${i}=${params[i]}&`
        }
        str += `callback=${callBack}`
        return `${url}?${str}`
    }

    return new Promise((resolve,reject)=>{
        let scriptEle = document.createElement('script')
        scriptEle.src = getUrl()
        document.body.appendChild(scriptEle)
        window[callBack] = (res) => {
            resolve(res)
            document.removeChild(scriptEle)
        }
    })

}