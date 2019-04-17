function getLine(id){
    var xmlhttp = new XMLHttpRequest();
    var url = "../line/edit/"+id;
    xmlhttp.onreadystatechange=function(){
         if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var result = JSON.parse(this.responseText);
            document.getElementById('lineId').value = result.lineId;
            document.getElementById('lineName').value = result.lineName;
            document.getElementById('width').value = result.width;
            document.getElementById('height').value = result.height;
            if(result.lineDirection == 'R2L'){
               document.getElementById('customRadio11').checked = true;
            }else{
               document.getElementById('customRadio21').checked = true;
            }
            if(result.lane == 'SINGLE'){
               document.getElementById('customRadio31').checked = true;
            }else{
               document.getElementById('customRadio41').checked = true;
            }
            if(result.type == 'REAL'){
               document.getElementById('customRadio51').checked = true;
            }else{
               document.getElementById('customRadio61').checked = true;
            }
            document.getElementById('reset').value = result.lineId;
            document.getElementById('form2lineName').innerHTML = '';
            document.getElementById('form2width').innerHTML = '';
            document.getElementById('form2height').innerHTML = '';
         }
   }
   xmlhttp.open("GET",url, true);
   xmlhttp.send();
}

function regex(lineId){ 
   var pattern = /^\w\d+$/i;
   var result = lineId.match(pattern);
   return result;
}

function numRegex(val){
   var pattern = /^\d+$/i;
   var result = val.match(pattern);
   return result;
}
function floatRegex(val){
   var pattern = /^\d+\.\d+$/i;
   var result = val.match(pattern);
   return result;
}

function validateForm(name){
   var lineID = document.forms[name]['lineId'].value;
   var lineName = document.forms[name]['lineName'].value;
   var width = document.forms[name]['width'].value;
   var height = document.forms[name]['height'].value;
   var idMsg='';
   var nameMsg='';
   var widthMsg='';
   var heightMsg='';
   if(lineID.length < 4 || !regex(lineID)){
      idMsg = 'Line Id should be minimum 4 character and format LXXX....';
   }
   if(lineName.length<4 || lineName.length>10){
      nameMsg = 'Please enter valid Data';
   }
   if((numRegex(width)==null && floatRegex(width)==null) || (width <1 || width > 100)){
      widthMsg = 'Please enter valid Data';
   }
   if((numRegex(height)==null && floatRegex(height)==null) || (height <1 || height > 100)){
      heightMsg = 'Please enter valid Data';
   }
   if(idMsg!='' || nameMsg!='' || widthMsg!='' || heightMsg!=''){
      document.getElementById(name+'height').innerHTML = heightMsg;
      document.getElementById(name+'lineId').innerHTML = idMsg;
      document.getElementById(name+'lineName').innerHTML = nameMsg;
      document.getElementById(name+'width').innerHTML = widthMsg;
      return false;
   }
   return true;
}

function deleteLine(id){
   var link = document.getElementById('modalDeleteBtn');
   link.setAttribute('href','/line/delete/'+id);
   document.getElementById('modalDeleteMsg').innerHTML = "Do you want to delete "+id+" ?";
   
}

$(document).ready(function() {
   $('#addLineModal').on('hidden.bs.modal', function (e) {
       $(this).find('input[type=text], input[type=password], input[type=number], input[type=email]').val('');
       document.getElementById('form1lineId').innerHTML = '';
       document.getElementById('form1lineName').innerHTML = '';
       document.getElementById('form1width').innerHTML = '';
       document.getElementById('form1height').innerHTML = '';
     });
});

$(document).ready(function() {
   $('#updateLineModal').on('hidden.bs.modal', function (e) {
       $(this).find('input[type=text], input[type=password], input[type=number], input[type=email]').val('');
       var id = document.getElementById('form1lineName').value;
       getLine(id);
     });
});

function resetForm1(){
   document.getElementById('form1lineId').innerHTML = '';
   document.getElementById('form1lineName').innerHTML = '';
   document.getElementById('form1width').innerHTML = '';
   document.getElementById('form1height').innerHTML = '';
 } 
 
function checkid(){
   var lineID = document.forms['form1']['lineId'].value;
   var idMsg='';
   if(lineID.length < 4 || !regex(lineID)){
      idMsg = 'Line Id should be minimum 4 character and format LXXX....';
   }
   document.getElementById('form1lineId').innerHTML = idMsg;
}

function checkname(){
   var form = 'form2';
   if(document.forms['form1']['lineName'].value != ''){
      form = 'form1';
   }
   var lineName = document.forms[form]['lineName'].value;
   var nameMsg='';
   if(lineName.length<4 || lineName.length>14){
      nameMsg = 'Please enter valid Data';
   }
   document.getElementById(form+'lineName').innerHTML = nameMsg;
}

function checkwidth(){
   var form = 'form2';
   if(document.forms['form1']['width'].value != ''){
      form = 'form1';
   }
   var width = document.forms[form]['width'].value;
   var widthMsg='';
   if((numRegex(width)==null && floatRegex(width)==null) || (width <1 || width > 100)){
      widthMsg = 'Please enter valid Data';
   }
   document.getElementById(form+'width').innerHTML = widthMsg;
}

function checkheight(){
   var form = 'form2';
   if(document.forms['form1']['height'].value != ''){
      form = 'form1';
   }
   var height = document.forms[form]['height'].value;
   var heightMsg='';
   if((numRegex(height)==null && floatRegex(height)==null) || (height <1 || height > 100)){
      heightMsg = 'Please enter valid Data';
   }
   document.getElementById(form+'height').innerHTML = heightMsg;
}