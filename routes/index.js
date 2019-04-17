var express = require('express');
var router = express.Router();
var lineModel = require('../models/line');
var Sequelize = require('sequelize');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(USER == null){
    MSG = {value:'You must login first !',alert:1};
    res.redirect('/users');
  }
  else{
    if(MSG ==null || MSG.alert>1){
      MSG = null;
    }else{
      MSG.alert = 2;
    }
    var line = lineModel(sequelize,Sequelize);
    line.findAll().then((result)=>{
      var total=0;
      var virtual=0;
      var real=0;
      for(var val of result){
        total++;
        if(val.type=='REAL'){
          real++;
        }else{
          virtual++;
        }
      }
      res.render('index', { title: 'Line Registration',total:total,real:real,virtual:virtual });
    }).catch(err=>{
      console.log("Error occured: "+err);
    });
  }
});

module.exports = router;
