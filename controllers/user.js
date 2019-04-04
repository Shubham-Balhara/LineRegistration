const userModel = require('../models/user');
var Sequelize = require('sequelize');

exports.login = function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  var user = userModel(sequelize,Sequelize);
  user.findOne({where:{username:username}}).then(user=>{
    if(!user || user.password != password){
      res.redirect('/user');
    }
    USER = user;
    res.redirect('/');
  }).catch(err=>{
    console.log("error occured: "+err);
  });
}

exports.register = function(req,res){
  var userName = req.body.userName;
  var password = req.body.password;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var user = userModel(sequelize,Sequelize);
  user.create({userName:userName,password:password,mobile:mobile,email:email}).then(()=>{
    console.log("user created !!!");
  }).catch(err=>{
    console.log("unable to add user: "+err);
  });
  res.redirect('/users/login');
}

exports.logout = function(req,res){
  if(USER != null)
    USER = null;
  res.redirect('/users');
}