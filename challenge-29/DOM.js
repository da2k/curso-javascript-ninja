(function (win, doc) {

  function DOM(string) {
    this.dom = doc.querySelectorAll(string);
  }

  DOM.prototype.on = function (event, callback) {
    Array.prototype.forEach.call(this.dom, function (element) {
      element.addEventListener(event, callback, false);
    })
  }

  DOM.prototype.off = function (event, callback) {
    Array.prototype.forEach.call(this.dom, function (element) {
      element.removeEventListener(event, callback, false);
    })
  }

  DOM.prototype.get = function () {
    return this.dom;
  }

  DOM.prototype.forEach = function forEach(callbackFunc) {
    return Array.prototype.forEach.call(this.dom, callbackFunc);
  }

  DOM.prototype.map = function map(callbackFunc) {
    return Array.prototype.map.call(this.dom, callbackFunc);
  }

  DOM.prototype.filter = function filter(callbackFunc) {
    return Array.prototype.filter.call(this.dom, callbackFunc);
  }

  DOM.prototype.reduce = function reduce(callbackFunc) {
    return Array.prototype.reduce.call(this.dom, callbackFunc);
  }

  DOM.prototype.reduceRight = function reduceRight(callbackFunc) {
    return Array.prototype.reduceRight.call(this.dom, callbackFunc);
  }

  DOM.prototype.every = function every(callbackFunc) {
    return Array.prototype.every.call(this.dom, callbackFunc);
  }

  DOM.prototype.some = function some(callbackFunc) {
    return Array.prototype.some.call(this.dom, callbackFunc);
  }

  DOM.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  DOM.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]'
  }

  DOM.isNumber = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
  }

  DOM.isObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  DOM.isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
  }
  DOM.isBoolean = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]'
  }
  DOM.isNull = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Null]' || Object.prototype.toString.call(obj) === '[object Undefined]'
  }

  win.DOM = DOM;

})(window, document);
