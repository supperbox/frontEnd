// function deepClone(obj, map = new WeakMap()) {
//     if (typeof obj === 'object' && obj !== null) {
//         let newObj = Array.isArray(obj) ? [] : {}
//         if (map.has(obj)) {
//             return map.get(obj)
//         }
//         map.set(obj, newObj)
//         if (obj.constructor !== Object && obj.constructor !== Array) {
//             newObj = new obj.constructor(obj)
//         } else {
//             for (let i in obj) {
//                 newObj[i] = deepClone(obj[i], map)
//             }
//         }
//         return newObj
//     } else {
//         return obj
//     }
// }

function deepClone(obj,map=new WeakMap()){
    if(typeof obj === 'object' && obj !== null){
        if(map.has(obj)){
            return map.get(obj)
        }
        let newObj = Array.isArray(obj)? []:{}
        if( obj.constructor !== Object && obj.constructor !== Array ) {
            newObj = new obj.constructor(obj)
        }else{
            for(let i in obj){
                newObj[i] = deepClone(obj[i])
            }
        }
        map.set(obj,newObj)
        return newObj
    }else{
        return obj
    }
}



