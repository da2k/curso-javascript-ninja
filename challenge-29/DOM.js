(function(window, document){
  'use strict';

  function DOM(elements){
    this.element = document.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(event, callback);
    });
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map(){
    Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter(){
    Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce(){
    Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight(){
    Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every(){
    Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some(){
    Array.prototype.some.apply(this.element, arguments);
  };

  function is(param){
    return Object.prototype.toString.call(param);
  };

  DOM.isArray = function isArray(param){
    return is(param) === '[object Array]';
  };

  DOM.isObject = function isObject(param){
    return is(param) === '[object Object]';
  };

  DOM.isFunction = function isFunction(param){
    return is(param) === '[object Function]';
  };

  DOM.isNumber = function isNumber(param){
    return is(param) === '[object Number]';
  };

  DOM.isString = function isString(param){
    return is(param) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(param){
    return is(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull(param){
    return is(param) === '[object Null]' || is(param) === '[object Undefined]';
  };

  window.DOM = DOM;
})(window, document);
