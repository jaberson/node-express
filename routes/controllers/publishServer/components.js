let router = require('express').Router();
let co = require('co')
var Components = require('../../../proxy/publishServer/components')
var Server = require('../../../proxy/apiServer/server');

// 获取列表(部分数据有apiserver获取)
router.get('/components', function(req, res, next) {
    co(function*() {
        let componentsData = yield Components.getComponentsList(); // 先获取列表
        if (componentsData.code === 0) {
            let componentsList = componentsData.data.rows
            if (componentsList.length > 0) {
                let ids = componentsList.map(item => item.id) // 根据ids查相关信息
                let infos = yield Server.queryById({ids: ids})
                componentsList.forEach(item => {
                    item.name = infos.data[item.id].name;
                    item.code = infos.data[item.id].code;
                })
            }
        }
        res.send(componentsData);
    }).catch(err => {
        next(new Error(err));
    })
})

module.exports = router;