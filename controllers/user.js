const userModel = require('../models/user');
var Sequelize = require('sequelize');
var random = require('random-number');
var nodemailer = require('nodemailer');

exports.login = function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  var user = userModel(sequelize,Sequelize);
  user.findOne({where:{username:username}}).then(user=>{
    if(!user || user.password != password){
      MSG = {value:'Please, Enter correct Username and password !',alert:1};
      res.redirect('/users');
    }else{
      USER = user;
      MSG = {value:'Logged in successfully !',alert:1};
      res.redirect('/');
    }
  }).catch(err=>{
    console.log("error occured: "+err);
  });
}

exports.register = function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var user = userModel(sequelize,Sequelize);
  user.create({username:username,password:password,mobile:mobile,email:email}).then(()=>{
    console.log("user created !!!");
  }).catch(err=>{
    console.log("unable to add user: "+err);
  });
  res.redirect('/users/login');
}

exports.logout = function(req,res){
  if(USER != null)
    USER = null;
  MSG = {value:'Logged out successfully !',alert:1};
  res.redirect('/users');
}

exports.profile = function(req,res){
  if(USER == null){
    MSG = {value:'You must login first !',alert:1};
    res.redirect('/users');
  }else{
  if(MSG ==null || MSG.alert>1){
    MSG = null;
  }else{
    MSG.alert = 2;
  }
  res.render('profile',{});
}
}

exports.updatePassword = function(req,res){
  if(USER == null){
    MSG = {value:'You must login first !',alert:1};
    res.redirect('/users');
  }else{
  var oldPassword = req.body.oldPassword;
  var newPassword = req.body.newPassword;
  if(oldPassword != USER.password){
    MSG = {value:'Wrong user password !',alert:1};
    res.redirect('/users/profile');
  }
  else{
    var user = userModel(sequelize,Sequelize);
    user.update({  password:newPassword},{where:{username:USER.username}}).then(()=>{
      USER.password = newPassword;
      MSG = {value:'Successfully Updated password Login !',alert:1};
      res.redirect('/users');
    });
  }
}
}

exports.editProfile = function(req,res){
  if(USER == null){
    MSG = {value:'You must login first !',alert:1};
    res.redirect('/users');
  }else{
  MSG=null;
  var username = req.body.username;
  var mobile = req.body.mobile;
  var email = req.body.email;
  var user = userModel(sequelize,Sequelize);
    user.update({ username:username, mobile:mobile, email:email },{where:{ username:USER.username }}).then(()=>{
      USER.username = username;
      USER.mobile = mobile;
      USER.email = email;
      MSG = {value:'profile updated successfully !',alert:1};
      res.redirect('/users/profile');
    });
  }
}

exports.retrivePassword = function(req,res){
  var email = req.body.email;
  var user = userModel(sequelize,Sequelize);
  user.findOne({where:{email:email}}).then(result=>{
    if(result != null){
      var options = {
        min:10000,
        max:10000000,
        integer:true
      }
      var token = random(options);
      var url = req.protocol+'://'+req.hostname+':'+PORT+'/users/changePassword/'+token;
      //------------------node mailer
      // var transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     user: 'sbalhara007@gmail.com',
      //     pass: 'password'
      //   }
      // });

      // var mailOptions = {
      //   from: 'sbalhara007@gmail.com',
      //   to: email,
      //   subject: 'Password reset Link',
      //   text: 'You have requested to reset your password. please click on the below link to reset password.\n'+url
      // };

      // transporter.sendMail(mailOptions, function(error, info){
      //   if (error) {
      //     console.log("error occured ------------"+error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // });
      //---------------mailer end
      console.log(url);
      TOKEN = {
        username:result.username,
        value:token,
        timestemp:Date.now()
      };
      MSG = {value:'Password reset link is sent to your email !',alert:1};
      res.redirect('/users');
    }else{
      MSG = {value:'This email is not registered !',alert:1};
      res.redirect('/users');
    }
  });
}

exports.changePassword = function(req,res){
  if(req.params.token == TOKEN.value){
    res.render('changePassword',{username:TOKEN.username});
  }
  else{
    MSG = {value:'Invalid token Try again !',alert:1};
    res.redirect('/users');
  }
}

exports.passwordChanged = function(req,res){
  if(!TOKEN || Date.now()-TOKEN.timestemp>60000){
    MSG = {value:'Your Token has expired Try again !',alert:1};
    res.redirect('/users');
  }
  else{
    var username = req.body.username;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    if(password!=confirmPassword){
      MSG = {value:'Password didn\'t match Try again !',alert:1};
      res.redirect('/users');
    }else{
      var user = userModel(sequelize,Sequelize);
      user.update({password:password},{where:{username:username}}).then(()=>{
        console.log('password changed successfully');
      });
      MSG = {value:'Password changed successfully ! Login',alert:1};
      res.redirect('/users');
  }
}
}