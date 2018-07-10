(function() {

	'use strict';

  function DOM(elementos) {
    this.elements = this.getDOMElements(elementos);
  }

  DOM.prototype.getDOMElements = function getDOMElements(elementos) {
    return document.querySelectorAll(elementos);
  }

  DOM.prototype.on = function on(evento, callback) {
    Array.prototype.forEach.call(this.elements, function(item) {
      item.addEventListener(evento, callback, false);
    });
  }

  DOM.prototype.off = function off(evento, callback) {
    Array.prototype.forEach.call(this.elements, function(item) {
      item.removeEventListener(evento, callback, false);
    });
  }

  DOM.prototype.get = function get() {
    return this.elements;
  }

  //- forEach, map, filter, reduce, reduceRight, every e some.

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.elements, arguments);
  }

  DOM.prototype.map = function map() {
    Array.prototype.map.apply(this.elements, arguments);
  }

  DOM.prototype.filter = function filter() {
    Array.prototype.filter.apply(this.elements, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    Array.prototype.reduce.apply(this.elements, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    Array.prototype.reduceRight.apply(this.elements, arguments);
  }

  DOM.prototype.every = function every() {
    Array.prototype.every.apply(this.elements, arguments);
  }

  DOM.prototype.some = function some() {
    Array.prototype.some.apply(this.elements, arguments);
  }

  //- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  DOM.prototype.isArray = function isArray( value ) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject( value ) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction( value ) {
    return Object.prototype.toString.call(value) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber( value ) {
    return Object.prototype.toString.call(value) === '[object Number]';
  }
  
  DOM.prototype.isString = function isString( value ) {
    return Object.prototype.toString.call(value) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean( value ) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull( value ) {
    return Object.prototype.toString.call(value) === '[object Null]' || 
         Object.prototype.toString.call(value) === '[object Undefined]';
  }

  window.DOM = DOM;

})();