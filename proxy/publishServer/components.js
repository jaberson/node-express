var proxy = require('../config')
var Components = function () {}
var baseUrl = 'http://10.33.39.22:9901'

// 获取列表
Components.getComponentsList = function (data) {
    return proxy.request('get', baseUrl, '/components', data)
}

module.exports = Components;