(function(win, doc){
  'use strict';
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

  function DOM(node) {
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

  DOM.prototype.get = function () {
    return this.element;
  }

  DOM.prototype.forEach = function forEach(callback) {
    return Array.prototype.forEach.call(this.element, callback);
  }

  DOM.prototype.map = function map(callback) {
    return Array.prototype.map.call(this.element, callback);
  }

  DOM.prototype.filter = function filter(callback) {
    return Array.prototype.filter.call(this.element, callback);
  }

  DOM.prototype.reduce = function reduce(callback) {
    return Array.prototype.reduce.call(this.element, callback);
  }

  DOM.prototype.reduceRight = function reduceRight(callback) {
    return Array.prototype.reduceRight.call(this.element, callback);
  }

  DOM.prototype.every = function every(callback) {
    return Array.prototype.every.call(this.element, callback);
  }

  DOM.prototype.some = function some(callback) {
    return Array.prototype.some.call(this.element, callback);
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

  console.log(DOM.isArray([1, 2, 3])); // true
  console.log(DOM.isFunction(function() {})); // true
  console.log(DOM.isNumber('numero')); // false

})(window, document);
