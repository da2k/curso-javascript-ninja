(function (window, document) {
  'use strict';


  function AJAX() {

    return {
      get: function get(url, callback) {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', url, true);
        ajax.send();

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
    };
  }

  window.AJAX = AJAX();

})(window, document);
