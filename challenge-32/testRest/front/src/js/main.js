(function() {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', 'http://localhost:4000/user/da');
  ajax.send();
  ajax.addEventListener('readystatechange', function(e){
    if (ajax.readyState === 4 && ajax.status === 200){
      console.log(ajax.responseText, ajax.status);
    }
  },false)
})()
