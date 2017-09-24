(function(window, document){
  'use strict';

  function DOM(elemento){
    if(!(this instanceof DOM))
      return new DOM(elemento);

    this.element = document.querySelectorAll(elemento);
  }

  DOM.prototype.on = function on(evento, callback){
    Array.prototype.forEach.call(this.element, function(item){
      item.addEventListener(evento, callback, false);
    });
  };

  DOM.prototype.off = function off(evento, callback){
    Array.prototype.forEach.call(this.element, function(item){
      item.removeEventListener(evento, callback, false);
    });
  };

  DOM.prototype.get = function get(index){
    if(index === undefined)
      return this.element;
    return this.element[index]
  };

  DOM.prototype.forEach = function forEach(callback){
    return Array.prototype.forEach.call(this.element, callback);
  }

  DOM.prototype.map = function map(callback){
    return Array.prototype.map.call(this.element, callback);
  }

  DOM.prototype.filter = function filter(callback){
    return Array.prototype.filter.call(this.element, callback);
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every(callback){
    return Array.prototype.every.call(this.element, callback);
  }

  DOM.prototype.some = function some(callback){
    return Array.prototype.some.call(this.element, callback);
  }

  DOM.isArray = function isArray(valor){
    return Object.prototype.toString.call(valor) === '[object Array]';
  }

  DOM.isObject = function isObject(valor){
    return Object.prototype.toString.call(valor) === '[object Object]';
  }

  DOM.isFunction = function isFunction(valor){
    return Object.prototype.toString.call(valor) === '[object Function]';
  }

  DOM.isNumber = function isNumber(valor){
    return Object.prototype.toString.call(valor) === '[object Number]';
  }

  DOM.isString = function isString(valor){
    return Object.prototype.toString.call(valor) === '[object String]';
  }

  DOM.isBoolean = function isBoolean(valor){
    return Object.prototype.toString.call(valor) === '[object Boolean]';
  }

  DOM.isNull = function isNull(valor){
    return Object.prototype.toString.call(valor) === '[object Undefined]' ||
            Object.prototype.toString.call(valor) ==='[object Null]';
  }

  window.DOM = DOM;
})(window, document);