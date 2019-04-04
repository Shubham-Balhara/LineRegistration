var express = require('express');
var router = express.Router();
var lineController = require('../controllers/line');

router.get('/',lineController.index);

router.post('/add',lineController.add);

router.get('/delete/:id',lineController.delete);

router.get('/edit/:id',lineController.edit);

router.post('/edit',lineController.lineEdit);

module.exports = router;