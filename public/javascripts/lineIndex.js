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
            document.getElementById('lineDirection').value = result.lineDirection;
            document.getElementById('lane').value = result.lane;
            document.getElementById('type').value = result.type;
            document.getElementById('reset').value = result.lineId;
            //document.getElementById('lineId').disabled = disabled;
         }
   }
   xmlhttp.open("GET",url, true);
   xmlhttp.send();
}

function regex(lineId){ 
   var pattern = /\w\d\d\d/i;
   var result = lineId.match(pattern);
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
   if(lineID.length != 4 || !regex(lineID)){
      idMsg = 'Please enter valid Data';
   }
   if(lineName.length<4 || lineName.length>10){
      nameMsg = 'Please enter valid Data';
   }
   if(width <1 || width > 100){
      widthMsg = 'Please enter valid Data';
   }
   if(height <1 || height > 100){
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
