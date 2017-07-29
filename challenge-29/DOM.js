(function(win) {

  function DOM(elements) {
   if(!(this instanceof DOM))
    return new DOM(elements);

    this.element = document.querySelectorAll(elements);
  }

  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  }

  DOM.isObject = function(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  }

  DOM.isFunction = function(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  }

  DOM.isNumber = function(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  }

  DOM.isString = function(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  }

  DOM.isBollean = function(param) {
    return Object.prototype.toString.call(param) === '[object Bollean]';
  }


  DOM.isNull = function(param) {
    return Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]';
  }


  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.get = function(index) {
    if (!index)
      return this.element[0];
    return this.element[index];
  }

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments)
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  win.DOM = DOM;

})(window)
