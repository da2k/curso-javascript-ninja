(function(win, doc) {
  'use strict';

  function DOM(elements) {
    if(!(this instanceof DOM))
      return new DOM(elements);

    this.element = this.getDOMElements(elements);
  }

  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.isObject = function isObject(param) {
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

  DOM.prototype.getDOMElements = function getDOMElements(elements) {
    return doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, cb){
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, cb, false);
    });
  };

  DOM.prototype.off = function off(event, cb){
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, cb, false);
    });
  };

  DOM.prototype.get = function get(index){
    if(!index)
      return this.element[0];
    return this.element[index];
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.protype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.protype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.protype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.protype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.protype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.protype.some.apply(this.element, arguments);
  };

  win.DOM = DOM;

})(window, document);
