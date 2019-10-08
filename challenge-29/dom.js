(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.elements = this.getElements(elements);
  }

  DOM.prototype.getElements = function getElements(elements) {
    return doc.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.elements, function(item) {
      item.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.elements, function(item) {
      item.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.elements;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.elements, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.elements, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.elements, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.elements, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.elements, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.elements, arguments);
  };

  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.isObject = function isObject( param ) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]'
    || Object.prototype.toString.call(param) === '[object Undefined]';
  };

  win.DOM = DOM;

})(window, document);
