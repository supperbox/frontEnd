Array.prototype.reduce = function (cb,val) {
    if(!Array.isArray(this)){
        throw new TypeError('this error')
    }
    if(typeof cb !== 'function'){
        throw new TypeError('cb is not a function')
    }
    const arr = this
    let res = 0
    if(val){
        res = val
    }else {
        res = arr.shift()
    }
    for (let i = 0; i < arr.length; i++) {
        res += cb(res,arr[i],i,arr)
    }
    return res
};


console.log([].reduce((a, item) => {
    return item
}, 1));