(function(DOM) {
    
  function DOM(elements) {
    if(!(this instanceof DOM)) 
      return new DOM(elements);
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.off = function(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function(index) {
    if(index)
      return this.element[index];
    return this.element[0];
  };

  DOM.prototype.forEach = function() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.isArray = function(element) {
    return Object.prototype.toString.call(element) === '[object Array]';
  }

  DOM.isObject = function(element) {
    return Object.prototype.toString.call(element) === '[object Object]';
  }

  DOM.isFunction = function(element) {
    return Object.prototype.toString.call(element) === '[object Function]';
  }

  DOM.isNumber = function(element) {
    return Object.prototype.toString.call(element) === '[object Number]';
  }

  DOM.isString = function(element) {
    return Object.prototype.toString.call(element) === '[object String]';
  }

  DOM.isBoolean = function(element) {
    return Object.prototype.toString.call(element) === '[object Boolean]';
  }

  DOM.isNull = function(element) {
    return Object.prototype.toString.call(element) === '[object Null]' 
    || Object.prototype.toString.call(element) === '[object Undefined]';
  }

  window.DOM = DOM;
})(window.DOM);