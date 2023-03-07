//alerter.js文件
// 定义有依赖的模块,传入后面的回调函数
define(['dataService'], function(dataService) {
    let name = 'jlw'
    function showMsg() {
        alert(dataService.getMsg() + ', ' + name)
    }
    // 暴露模块
    return { showMsg }
})