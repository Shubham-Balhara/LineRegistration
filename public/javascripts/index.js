function fun() {
    var rand = document.getElementById('total').value;
      var x = document.querySelector('.progress-circle-prog');
    x.style.strokeDasharray = (rand * 4.65) + ' 999';
      var el = document.querySelector('.progress-text'); 
      var from = $('.progress-text').data('progress');
      $('.progress-text').data('progress', rand);
      var start = new Date().getTime();
      setTimeout(function() {
          var now = (new Date().getTime()) - start;
          var progress = now / 700;
            result = rand > from ? Math.floor((rand - from) * progress + from) : Math.floor(from - (from - rand) * progress);
          el.innerHTML = result;
          if (progress < 1) setTimeout(arguments.callee, 10);
      }, 10);
  }
  
  setTimeout(fun, 200);