(function(win, doc) {
  'use strict';

  var DOM = function(selector) {
    if(!(this instanceof DOM))
      return new DOM(selector);

    this.element = doc.querySelectorAll(selector);
  };

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function($el) {
      $el.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function($el) {
      $el.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get(index) {
    if(!index)
      return this.element[0];
    return this.element[index];
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.getParamType = function(param) {
    return Object.prototype.toString.call(param);
  };

  DOM.isArray = function(param) {
    return this.getParamType(param) === '[object Array]';
  };

  DOM.isObject = function(param) {
    return this.getParamType(param) === '[object Object]';
  };

  DOM.isFunction = function(param) {
    return this.getParamType(param) === '[object Function]';
  };

  DOM.isNumber = function(param) {
    return this.getParamType(param) === '[object Number]';
  };

  DOM.isString = function(param) {
    return this.getParamType(param) === '[object String]';
  };

  DOM.isBoolean = function(param) {
    return this.getParamType(param) === '[object Boolean]';
  };

  DOM.isNull = function(param) {
    return this.getParamType(param) === '[object Null]' || this.getParamType(param) === '[object Undefined]';
  };

  DOM.newElement = function(element) {
    return doc.createElement(element);
  };

  // Pendura um método DOM no objeto Window
  win.DOM = DOM;
})(window, document);
