var proxy = require('../config')
var Server = function () {}
var baseUrl = 'http://10.33.39.24:9801'

// 根据id数组获取列表名称等信息
Server.queryById = function (data) {
    return proxy.request('post', baseUrl, '/services/actions/queryByIds', data)
}

module.exports = Server;