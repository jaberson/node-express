var request = require('request')

var proxy = function () {}

/*
 * 向服务器发送request请求
 * @params {String} method: request请求的方法
 * @params {String} baseUrl: 请求的ip地址
 * @params {String} url: 请求的详细路径
 * @params {Object} data: 请求的参数
 */
proxy.request = function (method, baseUrl, url, data) {
    return new Promise(function(resolve, reject) {
        let options = {
            baseUrl: baseUrl,
            url: url,
            headers: {'Content-type': 'application/json'},
            json: data
        }
        let requestInfo = 'url：' + baseUrl + url + (data ? ' & param: ' + JSON.stringify(data) : '')
        console.log(requestInfo)
        request[method](options, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                if (typeof body === 'string') {
                    body = JSON.parse(body);
                }
                resolve(body)
            } else {
                reject(error)
            }
        })
    })
}

module.exports = proxy