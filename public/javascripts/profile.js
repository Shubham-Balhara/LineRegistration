function check() {
    if(document.getElementById('newPassword').value =='' && document.getElementById('confirmPassword').value == ''){
        document.getElementById('form2confirmPassword').innerHTML = '';
        document.getElementById('btnSubmit').disabled = true;
    }
    else if (document.getElementById('newPassword').value == document.getElementById('confirmPassword').value) {
        document.getElementById('form2confirmPassword').innerHTML = 'matched';
        document.getElementById('btnSubmit').disabled = false;
    } else {
      document.getElementById('form2confirmPassword').innerHTML = 'type same password';
      document.getElementById('btnSubmit').disabled = true;
    }
}

$(document).ready(function() {
    $('#updatePasswordModal').on('hidden.bs.modal', function (e) {
        $(this).find('input[type=text], input[type=password], input[type=number], input[type=email]').val('');
        document.getElementById('form2confirmPassword').innerHTML = '';
      });
});

function regex(lineId){ 
  var pattern = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}/i;
  var result = lineId.match(pattern);
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
  if(mobile.length !=10){
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