function filter(callback,thisArg) {
    const res = []
    if(typeof this !== 'object' && Array.isArray(this)){
        return new TypeError('error')
    }
    const arr = this

    for(let i of arr){
        if(callback.call(thisArg,arr[i],i,arr)){
            res.push(arr[i])
        }
    }

    return res
}


let a = [1,2,3]

console.log(filter.call(a, (item, index) => {
    return item > 1
}));

