// const Promise = require('./promise')

let a = new Promise((resolve, reject) => {
    resolve({
        then(onfulfilled, onrejected) {
            return 12
        }
    })
})


a.then((data)=>{
    console.log(data)
    return {
        then(onfulfilled, onrejected) {
            onfulfilled(11)
        }
    }
},err=>{
    console.log(err);
}).then((data) => {
    console.log(data);
})


























