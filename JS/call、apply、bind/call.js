Function.prototype.theCall = function (context) {
    let obj = context || window
    obj.fn = this
    obj.fn()
}


let a = {
    age:23,
    name:'jlw'
}
let name = '1'

let func = function () {
    console.log(this.name);
}

func()

func.theCall(a)