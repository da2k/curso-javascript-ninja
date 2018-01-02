(function(doc) {
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */
  'use strict';

  var DOM = function(selector) {
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

  DOM.prototype.get = function get() {
    return this.element;
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
})(document);
