// 发布订阅之间没有联系
// 观察者模式，内部基于发布订阅模式 ； 有一个观察者 有一个被观察者


// 被观察着
class Subject {
    constructor() {
        this.arr = []
        this.state = 'happy'
    }
    attach(observer){
        this.arr.push(observer)
    }
    notify(state){
        this.state = state
        this.arr.forEach(watcher => {
            watcher.update(this)
        })
    }
}

// 观察者
class Observer {
    constructor(cb) {
        if(typeof cb === 'function'){
            this.cb = cb
        }else {
            throw new Error('Observer需要传入函数类型')
        }
    }
    update(sub){
        this.cb(sub)
    }
}

let a = new Subject()
let b = new Observer(a=>{
    console.log(a.state);
})


// 注册关系，让观察者和被观察者绑定


a.attach(b)
a.notify('sad')