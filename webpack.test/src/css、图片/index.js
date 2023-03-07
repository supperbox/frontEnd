// webpack 默认支持commonJs和es6 esmodule


import a from './a-module'
import './index.css'
import './a.scss'

console.log(a);

// 获取打包后的图片路径

import me from './2.jpg'

let img = document.createElement('img')

img.src = me

document.body.appendChild(img)
