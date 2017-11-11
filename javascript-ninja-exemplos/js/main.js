(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.json'
  );
  ajax.send();

  var response = '';
  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      try {
        response = JSON.parse(ajax.responseText);
      }
      catch(e) {
        response = ajax.responseText;
      }
      console.log(response);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
