function theNew(fn,...args) {
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }
    let obj = Object.create(fn.prototype)
    let res = fn.call(obj, ...args)
    if ((typeof res === 'object' || typeof res === 'function') && res !== null) {
        return res
    } else {
        return obj
    }
}

console.log(theNew(function(){
    this.name = 'jlw'
    return [1, 2, 3]
}));