(function(win, doc){
  'use strict';

  function DOM(node) {
    if (!(this instanceof DOM)) {
      return new DOM(node);
    }
    this.element = doc.querySelectorAll(node);
  }

  DOM.prototype.on = function (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(event, callback, false);
    });
  }

  DOM.prototype.get = function (index) {
    if(!index)
      return this.element[0];
    return this.element[0];
  }

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

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.isArray = function isArray(obj) {
    return is(obj) === '[object Array]';
  }

  DOM.isObject = function isObject(obj) {
    return is(obj) === '[object Object]';
  }

  DOM.isFunction = function isFunction(obj) {
    return is(obj) === '[object Function]';
  }

  DOM.isNumber = function isNumber(obj) {
    return is(obj) === '[object Number]';
  }

  DOM.isString = function isString(obj) {
    return is(obj) === '[object String]';
  }

  DOM.isBoolean = function isBoolean(obj) {
    return is(obj) === '[object Boolean]';
  }

  DOM.isNull = function isNull(obj) {
    return is(obj) === '[object Null]' || is(obj) === '[object Undefined]';
  }

  win.DOM = DOM;

})(window, document);
