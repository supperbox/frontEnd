function flatten(arr) {
    return Array.prototype.flat.call(arr,Infinity)
}


console.log(String([1, 2, 3,[4,5]]).split(','));


function flatten(arr) {
    let res = []
    for(let i in arr){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]))
        }else {
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatten([1, [2, [3]]]));