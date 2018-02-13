(function () {
  function DOM(elements) {
    if (!(this instanceof DOM)) {
      return new DOM(elements);
    }
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function (eventName, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function (eventName, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function (index) {
    if (!index) {
      return this.element[0];
    }
    return this.element[index];
  };

  DOM.prototype.forEach = function () {
    return Array.prototype.forEach.apply(this.element, arguments);
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

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.isArray = function (obj) {
    return is(obj) === '[object Array]';
  };

  DOM.isObject = function (obj) {
    return is(obj) === '[object Object]';
  };

  DOM.isFunction = function (obj) {
    return is(obj) === '[object Function]';
  };

  DOM.isNumber = function (obj) {
    return is(obj) === '[object Number]';
  };

  DOM.isString = function (obj) {
    return is(obj) === '[object String]';
  };

  DOM.isBoolean = function (obj) {
    return is(obj) === '[object Boolean]';
  };

  DOM.isNull = function (obj) {
    return is(obj) === '[object Null]' || is(obj) === '[object Undefined]';
  };

  window.DOM = DOM;
}());
