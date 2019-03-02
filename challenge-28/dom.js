(function() {
  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    })
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, false);
    })
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
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

  DOM.prototype.isArray = function isArray(value) {
    return Object.prototype.toString.call( value ) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(value) {
    return Object.prototype.toString.call( value ) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(value) {
    return Object.prototype.toString.call( value ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(value) {
    return Object.prototype.toString.call( value ) === '[object Number]';
  }

  DOM.prototype.isString = function isString(value) {
    return Object.prototype.toString.call( value ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(value) {
    return Object.prototype.toString.call( value ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(value) {
    return Object.prototype.toString.call( value ) === '[object Null]'
    || Object.prototype.toString.call( value ) === '[object Undefined]';
  }

  window.DOM = DOM;
})();
