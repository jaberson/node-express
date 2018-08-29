var express = require('express');
var router = express.Router();
var co = require('co');

router.get('/s', function(req, res, next) {
    var query = req.body,
        model = req.params.model;
    console.log(query, model)
    co(function*() {
        res.send({
            code: 0,
            message: 'success',
            data: 'ok'
        });
    }).catch(err => {
        next(new Error(err))
    })
});

router.get('/st', function(req, res, next) {
    var query = req.body
    console.log(query)
    res.send({
        code: 0,
        message: 'success',
        data: 'ok'
    });
});

module.exports = router;