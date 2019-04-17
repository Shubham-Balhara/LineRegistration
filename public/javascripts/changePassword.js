function check() {
    //alert('hello');
    if(document.getElementById('inputPassword').value =='' && document.getElementById('inputconfirmPassword').value == ''){
        document.getElementById('form1confirmPassword').innerHTML = '';
    }
    else if (document.getElementById('inputPassword').value == document.getElementById('inputconfirmPassword').value) {
        document.getElementById('form1confirmPassword').innerHTML = '';
    } else {
      document.getElementById('form1confirmPassword').innerHTML = 'Password didn\'t match';
    }
}

function validateForm(){
  var password = document.forms['form1']['password'].value;
  var upper = false;
  var num = false;
  var special = false;
  var lower = false;
  var i;
  for(i=0;i<password.length;i++){
    if(password.charCodeAt(i)<91 && password.charCodeAt(i)>64){
      upper = true;
      continue;
    }
    if(password.charCodeAt(i)<123 && password.charCodeAt(i)>96){
      lower = true;
      continue;
    }
    if(password.charCodeAt(i)<58 && password.charCodeAt(i)>47){
      num = true;
      continue;
    }
    if(password.charCodeAt(i)<123 && password.charCodeAt(i)>96){
      lower = true;
      continue;
    }
    if(password.charCodeAt(i)>32 && password.charCodeAt(i)<127){
      special = true;
    }
  }
  //alert(upper+" "+lower+" "+num+" "+special);
  if(upper==false || lower==false || special==false || num==false){
    document.getElementById('form1password').innerHTML = 'Password must contain 1 Uppercase, 1 number, 1 special character';
    return false;
  }
  
  return true;
}