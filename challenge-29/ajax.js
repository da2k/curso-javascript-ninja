var AJAX = (function () {
  var AJAX = function AJAX(uri) {
    if (!(this instanceof AJAX)) {
      return new AJAX(uri);
    }
    this.uri = uri;
    this.xhr = new XMLHttpRequest();
  }

  AJAX.prototype.get = function (callbackSuccess, callbackError = (function () { })) {
    this.xhr.open('GET', this.uri);
    this.xhr.send();
    this.xhr.onreadystatechange = (function () {
      if (this.isReady()) {
        var response = JSON.parse(this.xhr.responseText);
        return this.isSuccess() ? callbackSuccess(response) : callbackError();
      }
    }).bind(this);
  }

  AJAX.prototype.post = function (jsonData, callbackSuccess, callbackError = (function () { })) {
    this.xhr.open('POST', this.uri);
    this.xhr.send(this.toFormData(jsonData));
    this.xhr.onreadystatechange = (function () {
      if (this.isReady()) {
        var response = JSON.parse(this.xhr.responseText);
        return this.isSuccess() ? callbackSuccess(response) : callbackError()
      }
    }).bind(this);;
  }

  AJAX.prototype.toFormData = function (json) {
    var formData = new FormData();
    Object.keys(json).forEach(function (key) {
      formData.append(key, json[key]);
    })
    return formData;
  }

  AJAX.prototype.isReady = function () {
    return this.xhr.readyState === 4;
  }

  AJAX.prototype.isSuccess = function () {
    return this.xhr.status === 200;
  }

  return AJAX;
})();
