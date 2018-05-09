(function (window, document) {
  'use strict';


  function AJAX() {

    function get(url, callback) {
      var ajax = new XMLHttpRequest();
      ajax.open('GET', url);
      ajax.send(null);

      ajax.addEventListener('readystatechange', function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
          try {
            var data = JSON.parse(ajax.responseText);
            callback(data);
          } catch (err) {
            console.error(err);
            callback({ err: true, msg: err, status: ajax.status });
          }
        }

        if (ajax.readyState === 4 && ajax.status !== 200) {
          callback({ err: true, msg: '', status: ajax.status });
        }
      }, false);
    }

    return {
      get: get
    };
  }

  window.AJAX = AJAX();

})(window, document);
