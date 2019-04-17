function fun() {
    var val = document.getElementById('total').value;
    var x = document.querySelector('.progress-circle-prog');
    x.style.strokeDasharray = (val * 10) + ' 999';

    var val1 = document.getElementById('real').value;
    var x = document.querySelector('.progress-circle-prog1');
    x.style.strokeDasharray = (val1 * 10) + ' 999';

    var val2 = document.getElementById('virtual').value;
    var x = document.querySelector('.progress-circle-prog2');
    x.style.strokeDasharray = (val2 * 10) + ' 999';
  }
  
setTimeout(fun, 200);