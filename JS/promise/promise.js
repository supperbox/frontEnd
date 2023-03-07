// 手写promise

// 等待
const PENDING = 'PENDING'
// 成功
const FULFILLED = 'FULFILLED'
// 失败
const REJECTED = 'REJECTED'

// promise 自行创建的promise，res是返回值

// 用来处理 传入 resolve
const resolvePromise = (promise, res, resolve, reject) => {
    // 兼容性处理
    if (promise === res) {
        return new TypeError('失败')
    }
    if ((typeof res === 'object' && res !== null) || typeof res === 'function') {
        // 为了考虑别人的promise不够健壮，需要自行判断，状态只能有一次变化
        let called;
        // res 是一个对象或者函数
        try {
            let then = res.then
            // 存在then方法，判定为promise类
            if (typeof then === "function") {
                then.call(res, (x) => {
                    if (called) return
                    called = true
                    resolvePromise(promise, x, resolve, reject)
                }, (y) => {
                    if (called) return
                    called = true
                    reject(y)
                })
            } else {
                // then不存在或者是其他类型
                resolve(res)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    } else {
        // res不是函数或者方法
        resolve(res)
    }
}

class Promise {
    constructor(executor) {
        this.state = PENDING
        // 成功或失败的回调数组
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []
        this.value = undefined
        this.reason = undefined
        // 私有的resolve方法
        let resolve = (value) => {
            if(value instanceof Promise){
                return value.then(resolve,reject)
            }
            if (this.state === PENDING) {
                this.state = FULFILLED
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.state === PENDING) {
                this.state = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        // 执行的时候需要传入两个内部函数，用来给用户改变状态。
        // try...catch只能捕获同步异常
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onFulfilled : err => {
            throw new Error(err)
        };
        let promise = new Promise((resolve, reject) => {
            if (this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        // 用成功函数的返回值作为promise。resolve传递的参数
                        let res = onFulfilled(this.value)
                        resolvePromise(promise, res, resolve, reject)
                        console.log(promise);
                    } catch (e) {
                        // 如果失败则调用reject
                        reject(e)
                    }
                }, 0)
            } else if (this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        let res = onRejected(this.reason)
                        resolvePromise(promise, res, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.state === PENDING) {
                this.onRejectedCallbacks.push(() => {
                    try {
                        let res = onFulfilled(this.value)
                        resolvePromise(promise, res, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);

                this.onResolvedCallbacks.push(() => {
                    try {
                        let res = onRejected(this.reason)
                        resolvePromise(promise, res, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
        })
        return promise
    }
}

module.exports = Promise
