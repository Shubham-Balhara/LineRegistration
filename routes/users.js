var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.post('/login', userController.login);

router.post('/register',userController.register);

router.get('/logout',userController.logout);

router.get('/',function(req,res){
    res.render('login',{title:'login page'});
});

module.exports = router;
