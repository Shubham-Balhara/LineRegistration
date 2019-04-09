var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

router.post('/login', userController.login);

router.post('/register',userController.register);

router.get('/logout',userController.logout);

router.get('/',function(req,res){
    if(MSG ==null || MSG.alert>1){
        MSG = null;
      }else{
        MSG.alert = 2;
    }
    USER = null;
    res.render('login',{title:'login page'});
});

router.get('/profile',userController.profile);

router.post('/updatePassword',userController.updatePassword);

router.post('/editProfile',userController.editProfile);

router.post('/retrivePassword',userController.retrivePassword);

router.get('/changePassword/:token',userController.changePassword);

router.post('/changePassword',userController.passwordChanged);

module.exports = router;
