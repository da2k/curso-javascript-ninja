(function (win, doc) {
  'use strict';

   function DOM(elements) {
      if(!(this instanceof DOM))
        return new DOM(elements);

      this.element = doc.querySelectorAll(elements);

    }

    DOM.prototype.on = function on(action, func) {
      Array.prototype.map.call(this.element, function (item) {
        item.addEventListener(action, func, false);
      })
    }

    DOM.prototype.off = function off(action, func) {
       Array.prototype.map.call(this.element, function (item) {
        item.removeEventListener(action, func, false);
      })
    }

    DOM.prototype.get = function get(index) {
      if(!index)
        return this.element[0];

      return this.element[index];
    }

    DOM.prototype.map = function map(func) {
      return Array.prototype.map.call(this.element, func);
    }

    DOM.prototype.forEach = function forEach(func) {
      return Array.prototype.forEach.call(this.element, func);
    }

    DOM.prototype.some = function some(func) {
      return Array.prototype.some.call(this.element, func);
    }

    DOM.prototype.every = function every(func) {
      return Array.prototype.every.call(this.element, func);
    }

    DOM.prototype.reduce = function reduce(func) {
      return Array.prototype.reduce.call(this.element, func);
    }

    DOM.prototype.reduceRight = function reduceRight(func) {
      return Array.prototype.reduceRight.call(this.element, func);
    }

    DOM.prototype.filter = function filter(func) {
      return Array.prototype.filter.call(this.element, func);
    }

    DOM.isArray = function isArray(element) {
      return Object.prototype.toString.call(element) === '[object Array]';
    }

    DOM.isNumber = function isNumber(element) {
      return Object.prototype.toString.call(element) === '[object Number]';
    }

    DOM.isObject = function isObject(element) {
      return Object.prototype.toString.call(element) === '[object Object]';
    }

    DOM.isFunction = function isFunction(element) {
      return Object.prototype.toString.call(element) === '[object Function]';
    }

    DOM.isString = function isString(element) {
      return Object.prototype.toString.call(element) === '[object String]';
    }


    DOM.isBoolean = function isBoolean(element) {
      return Object.prototype.toString.call(element) === '[object Boolean]';
    }

    DOM.isNull = function isNull(element) {
      return Object.prototype.toString.call(element) === '[object Null]'
       || Object.prototype.toString.call(element) === '[object Undefined]';

    }

    win.DOM = DOM;
})(window, document);
