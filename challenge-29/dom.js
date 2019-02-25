(function (doc) {
  var DOM = function DOM(querySelector) {
    if (!(this instanceof DOM))
      return new DOM(querySelector);
    this.element = doc.querySelectorAll(querySelector);
  }

  DOM.prototype.on = function (eventName, callback) {
    this.element.forEach(function (element) {
      element.addEventListener(eventName, callback, false);
    });
  }

  DOM.prototype.off = function (eventName, callback) {
    this.element.forEach(function (element) {
      element.removeEventListener(eventName, callback);
    });
  }

  DOM.prototype.get = function () {
    if (this.element.length === 1)
      return this.element[0];
    return this.element;
  }

  DOM.prototype.forEach = function (callback) {
    return Array.prototype.forEach.call(this.element, callback);
  }

  DOM.prototype.map = function (callback) {
    return Array.prototype.map.call(this.element, callback);
  }

  DOM.prototype.filter = function (callback) {
    return Array.prototype.filter.call(this.element, callback);
  }

  DOM.prototype.reduce = function (callback, initialValue) {
    return Array.prototype.reduce.call(this.element, callback, initialValue);
  }

  DOM.prototype.reduceRight = function (callback, initialValue) {
    return Array.prototype.reduceRight.call(this.element, callback, initialValue);
  }

  DOM.prototype.every = function (callback) {
    return Array.prototype.some.call(this.element, callback);
  }

  DOM.prototype.some = function (callback) {
    return Array.prototype.every.call(this.element, callback);
  }

  DOM.prototype.isArray = function (value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  DOM.prototype.isObject = function (value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  DOM.prototype.isFunction = function (value) {
    return Object.prototype.toString.call(value) === '[object Function]';
  }

  DOM.prototype.isNumber = function (value) {
    return Object.prototype.toString.call(value) === '[object Number]';
  }

  DOM.prototype.isString = function (value) {
    return Object.prototype.toString.call(value) === '[object String]';
  }

  DOM.prototype.isBoolean = function (value) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
  }

  DOM.prototype.isNull = function (value) {
    return value === null || value === undefined;
  }

  window.DOM = DOM;
})(document);
