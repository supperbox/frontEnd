// 函数柯里化

// 判断一个变量类型

function checkType(type,content) {
        return Object.prototype.toString.call(content) === `[object ${type}]`
}

// 函数柯里化，把函数范围缩小，让函数变得更加具体

// 通过函数柯里化，实现参数的分开传递

// 等到传入足够数量的参数才会执行函数
const curring = (fn, arr = []) => {
    let len = fn.length
    // 剩余运算符，将传入的参数转换为一个数组
    return (...args) => {
        // 合并参数数组
        arr = [...arr, ...args]
        if (arr.length === len) {
            // 展开参数数组
            return fn(...arr)
        } else {
            return curring(fn, arr)
        }
    }
}

let types = {};

['String','Number','Boolean'].forEach(item => {
    types['is'+item] = curring(checkType)(item)
})

console.log(types.isString('hello'));

// 函数反柯里化 让一个函数的范围变大