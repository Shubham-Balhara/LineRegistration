function check() {
    if(document.getElementById('newPassword').value.length>7){
      document.getElementById('form2newPassword').innerHTML = '';
    }
    if(document.getElementById('newPassword').value =='' && document.getElementById('confirmPassword').value == ''){
        document.getElementById('form2confirmPassword').innerHTML = '';
        document.getElementById('btnSubmit').disabled = true;
    }
    else if (document.getElementById('newPassword').value == document.getElementById('confirmPassword').value) {
        document.getElementById('form2confirmPassword').innerHTML = '';
        document.getElementById('btnSubmit').disabled = false;
    } else {
      document.getElementById('form2confirmPassword').innerHTML = 'Password didn\'t match';
      document.getElementById('btnSubmit').disabled = true;
    }
}

function checkmobile(){
  var mobile = document.forms['form1']['mobile'].value;
  var mobileMsg = '';
  if(mobile.length != 10 || numRegex(mobile)==null){
    mobileMsg = 'Please enter valid Data';
 }
 document.getElementById('form1mobile').innerHTML = mobileMsg;
}

function checkemail(){
  var email = document.forms['form1']['email'].value;
  var emailMsg = '';
  if(email.length < 6 || !regex(email)){
    emailMsg = 'Please enter valid Data';
 }
 document.getElementById('form1email').innerHTML = emailMsg;
}

$(document).ready(function() {
    $('#updatePasswordModal').on('hidden.bs.modal', function (e) {
        $(this).find('input[type=text], input[type=password], input[type=number], input[type=email]').val('');
        document.getElementById('form2confirmPassword').innerHTML = '';
        document.getElementById('form2newPassword').innerHTML = '';
      });
});

$(document).ready(function() {
  $('#editProfileModal').on('hidden.bs.modal', function (e) {
      document.forms['form1']['username'].value = document.getElementById('USERusername').innerHTML;
      document.forms['form1']['mobile'].value = document.getElementById('USERmobile').innerHTML;
      document.forms['form1']['email'].value = document.getElementById('USERemail').innerHTML;
      document.getElementById('form1username').innerHTML = '';
      document.getElementById('form1mobile').innerHTML = '';
      document.getElementById('form1email').innerHTML = '';
    });
});

function regex(lineId){ 
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
  var result = lineId.match(pattern);
  return result;
}

function numRegex(val){
  var pattern = /^\d+$/i;
  var result = val.match(pattern);
  return result;
}

function validateForm(name){
  var username = document.forms[name]['username'].value;
  var mobile = document.forms[name]['mobile'].value;
  var email = document.forms[name]['email'].value;
  var userMsg='';
  var mobileMsg='';
  var emailMsg='';
  if(username.length < 4){
    userMsg = 'Please enter valid Data';
  }
  if(mobile.length != 10 || numRegex(mobile)==null){
     mobileMsg = 'Please enter valid Data';
  }
  if(email.length < 6 || !regex(email)){
     emailMsg = 'Please enter valid Data';
  }
  if(userMsg!='' || mobileMsg!='' || emailMsg!=''){
     document.getElementById(name+'username').innerHTML = userMsg;
     document.getElementById(name+'mobile').innerHTML = mobileMsg;
     document.getElementById(name+'email').innerHTML = emailMsg;
     return false;
  }
  return true;
}

function validateForm1(name){
  var password = document.forms[name]['oldPassword'].value;
  var newPassword = document.forms[name]['newPassword'].value;
  var upper = false;
  var num = false;
  var special = false;
  var lower = false;
  var i;
  if(password == newPassword){
    document.getElementById(name+'newPassword').innerHTML = 'Enter a different password';
    return false;
 }
 if(newPassword.length<8){
  document.getElementById(name+'newPassword').innerHTML = 'Password must contain atleast 8 characters';
  return false;
 }
  for(i=0;i<newPassword.length;i++){
    if(newPassword.charCodeAt(i)<91 && newPassword.charCodeAt(i)>64){
      upper = true;
      continue;
    }
    if(newPassword.charCodeAt(i)<123 && newPassword.charCodeAt(i)>96){
      lower = true;
      continue;
    }
    if(newPassword.charCodeAt(i)<58 && newPassword.charCodeAt(i)>47){
      num = true;
      continue;
    }
    if(newPassword.charCodeAt(i)<123 && newPassword.charCodeAt(i)>96){
      lower = true;
      continue;
    }
    if(newPassword.charCodeAt(i)>32 && newPassword.charCodeAt(i)<127){
      special = true;
    }
  }
  //alert(upper+" "+lower+" "+num+" "+special);
  if(upper==false || lower==false || special==false || num==false){
    document.getElementById(name+'newPassword').innerHTML = 'Password must contain 1 Uppercase, 1 number, 1 special character';
    return false;
  }
  
  return true;
}

function resetForm1(){
  document.getElementById('form1username').innerHTML = '';
  document.getElementById('form1mobile').innerHTML = '';
  document.getElementById('form1email').innerHTML = '';
} 

function resetForm2(){
  document.getElementById('form2oldPassword').innerHTML = '';
  document.getElementById('form2newPassword').innerHTML = '';
  document.getElementById('form2confirmPassword').innerHTML = '';
}  