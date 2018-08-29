var express = require('express');
var router = express.Router();

// 登录模块
router.use('/login', require('./login/login'));

// api服务
router.use('/api', require('./apiServer/businesses'));

// publish服务
router.use('/publish', require('./publishServer/components'));


module.exports = router;