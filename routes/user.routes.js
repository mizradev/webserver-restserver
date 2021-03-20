const { Router } = require('express');

const router = Router();

const userCtr = require('../controllers/userCtrl');

router.get('/', userCtr.showUser);

module.exports = router;