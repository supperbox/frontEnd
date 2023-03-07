class History {
    constructor() {
        this.path = {}
        this.aBind()
    }

    register(path, fn = () => {
    }) {
        this.path[path] = fn
    }

    refresh(path) {
        if (this.path[path]) {
            this.path[path]()
            window.history.pushState(null, null, path)
        }
    }

    aBind() {
        window.addEventListener('click', (e) => {
            if (e.target.nodeName && e.target.nodeName === 'A') {
                e.preventDefault()
                this.refresh(e.target.attributes.href.value)
            }
        })
    }
}


let his = new History()

his.register('/red', () => {
    document.getElementById('content').innerHTML = `<div>i am a good boy</div>`
})

his.register('/blue', () => {
    document.getElementById('content').innerHTML = `<div>yeah</div>`
})
