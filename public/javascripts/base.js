var type = 'open';

function toggleNav() {
    if (type == 'open') {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        type = 'close';
    }
    else{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        type = 'open';
    }
  }