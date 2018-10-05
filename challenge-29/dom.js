(function(window) {
    'use strict';
  
    function DOM(selectorString) {
      this.element = document.querySelectorAll(selectorString);
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
      return Object.prototype.toString.call(element) === '[object Null]' || 
             Object.prototype.toString.call(element) === '[object Undefined]';
    }

    DOM.prototype.on = function(eventType, callback) {
      Array.prototype.forEach.call(this.element, function(element) {
        element.addEventListener(eventType, callback);
      });
    }
  
    DOM.prototype.off = function(eventType, callback) {
      Array.prototype.forEach.call(this.element, function(element) {
        element.removeEventListener(eventType, callback);
      });
    }
  
    DOM.prototype.get = function() {
      return this.element;
    }

    DOM.prototype.forEach = function(callback) {
      Array.prototype.forEach.call(this.element, callback);
    }

    DOM.prototype.map = function(callback) {
      Array.prototype.map.call(this.element, callback);
    }

    DOM.prototype.filter = function(callback) {
      Array.prototype.filter.call(this.element, callback);
    }

    DOM.prototype.reduce = function(callback) {
      Array.prototype.reduce.call(this.element, callback);
    }

    DOM.prototype.reduceRight = function(callback) {
      Array.prototype.reduceRight.call(this.element, callback);
    }

    DOM.prototype.every = function(callback) {
      Array.prototype.every.call(this.element, callback);
    }

    DOM.prototype.some = function(callback) {
      Array.prototype.some.call(this.element, callback);
    }

    window.DOM = DOM;
}(window));