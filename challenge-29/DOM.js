(function (window, document) {
  function DOM(element) {
    this.element = DOM.prototype.getElement(element);
  }

  DOM.prototype.getElement = function (element) {
    return document.querySelectorAll(element);
  };

  DOM.prototype.on = function (event, listener) {
    Array.prototype.forEach.call(this.element, function (item) {
      item.addEventListener(event, listener, false);
    });
  };

  DOM.prototype.off = function (event, listener) {
    Array.prototype.forEach.call(this.element, function (item) {
      item.removeEventListener(event, listener, false);
    });
  };

  DOM.prototype.get = function () {
    return this.element;
  };

  DOM.prototype.forEach = function () {
    Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function () {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function () {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function () {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function () {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function () {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function () {
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.prototype.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  DOM.prototype.isObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };

  DOM.prototype.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  };

  DOM.prototype.isNumber = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  };

  DOM.prototype.isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  DOM.prototype.isBoolean = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
  };

  DOM.prototype.isNull = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Null]' ||
      Object.prototype.toString.call(obj) === '[object Undefined]';
  };

  window.DOM = DOM;
})(window, document);
