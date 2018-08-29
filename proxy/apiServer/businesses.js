var proxy = require('../config')
var Business = function () {}
var baseUrl = 'http://10.33.39.24:9801'

// 获取列表
Business.getBusinessList = function (data) {
    console.log('request')
    return proxy.request('get', baseUrl, '/businesses', data)
}

// 添加数据
Business.addBusiness = function (data) {
    console.log('request')
    return proxy.request('post', baseUrl, '/businesses', data)
}

module.exports = Business;