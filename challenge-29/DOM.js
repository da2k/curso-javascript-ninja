(function (window, document) {
  'use strict';

  function DOM(el) {
    if (typeof el === 'string') {
      this.elements = document.querySelectorAll(el);
      return this;
    }
    throw new Error('The element needs to be a string selector');
  }

  DOM._verifier = function _verifier(value) {
    return Object.prototype.toString.call(value);
  }

  DOM.isArray = function isArray(value) {
    return DOM._verifier(value) === '[object Array]';
  }

  DOM.isObject = function isObject(value) {
    return DOM._verifier(value) === '[object Object]';
  }

  DOM.isFunction = function isFunction(value) {
    return DOM._verifier(value) === '[object Function]';
  }

  DOM.isString = function isString(value) {
    return DOM._verifier(value) === '[object String]';
  }

  DOM.isNumber = function isNumber(value) {
    return DOM._verifier(value) === '[object Number]';
  }

  DOM.isBoolean = function isBoolean(value) {
    return DOM._verifier(value) === '[object Boolean]';
  }

  DOM.isNull = function isNull(value) {
    return DOM._verifier(value) === '[object Null]' || DOM._verifier(value) === '[object Undefined]';
  }

  DOM.prototype.forEach = function forEach(callback) {
    Array.prototype.forEach.call(this.elements, callback);
  }

  DOM.prototype.map = function map(callback) {
    return Array.prototype.map.call(this.elements, callback);
  }

  DOM.prototype.filter = function filter(callback) {
    return Array.prototype.filter.call(this.elements, callback);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.elements, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments);
  }

  DOM.prototype.every = function every(callback) {
    return Array.prototype.every.call(this.elements, callback);
  }

  DOM.prototype.some = function some(callback) {
    return Array.prototype.some.call(this.elements, callback);
  }

  DOM.prototype.on = function on(event, callback, useCapture) {
    this.forEach(function (el) {
      el.addEventListener(event, callback, useCapture || false);
    });
  }

  DOM.prototype.off = function off(event, callback, useCapture) {
    this.forEach(function (el) {
      el.removeEventListener(event, callback, useCapture || false);
    });
  }

  DOM.prototype.get = function get() {
    return this.elements;
  }

  DOM.prototype.getFirst = function getFirst() {
    return this.elements && this.elements[0] ? this.elements[0] : null;
  }

  window.DOM = DOM;

})(window, document);
