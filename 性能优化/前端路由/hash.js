class Routers {
    constructor() {
        this.routes = {};
        this.currentUrl = '';
        this.refresh = this.refresh.bind(this);
        window.addEventListener('load', this.refresh, false);
        window.addEventListener('hashchange', this.refresh, false);
    }

    route(path, callback) {
        this.routes[path] = callback || function () {
        };
    }

    refresh() {
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl] && this.routes[this.currentUrl]();
    }
}

let hash = new Routers()

// 改写innerHTML
let res = document.getElementById('content')

// 绑定路径对应的回调函数
hash.route('/red', () => {
    res.innerHTML = `<div><p>jlw</p><p>is</p><p>god</p></div>`
})

hash.route('/blue', () => {
    res.innerHTML = `<div><p>jlw</p><p>is</p><p>good boy</p></div>`
})


