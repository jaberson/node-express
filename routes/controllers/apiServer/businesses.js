var express = require('express');
var router = express.Router();
var co = require('co');
var Business = require('../../../proxy/apiServer/businesses');

// 请求列表
router.get('/businesses', function(req, res, next) {
    co(function*() {
        let data = yield Business.getBusinessList();
        res.send(data);
    }).catch(err => {
        next(new Error(err));
    })
});

// 添加数据
router.post('/businesses', function(req, res, next) {
    let query = req.body
    console.log(query)
    console.log(typeof query)
    co(function*() {
        let data = yield Business.addBusiness(query);
        res.send(data);
    }).catch(err => {
        next(new Error(err));
    })
});

module.exports = router;