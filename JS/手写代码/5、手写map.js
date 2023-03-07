Array.prototype.map = function(callBack,thisArg){
    if(typeof callBack !== 'function'){
        throw TypeError('callBack is not a function')
    }
    if(typeof this !== 'object' && !Array.isArray(this)){
        throw TypeError('this error')
    }
    const res = []
    const arr = this
    for(let i in arr){
        res.push(callBack.call(thisArg,arr[i],i,arr))
    }
    return res
};

console.log([1, 2, 3].map(item => item + 1));