(function (win, doc) {
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

  function DOM(el) {
    if (typeof el === 'string') {
      this.elements = document.querySelectorAll(el);
      return;
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

  DOM.isNull = function isNull(value) {
    return DOM._verifier(value) === '[object Null]' || DOM._verifier(value) === '[object Undefined]';
  }

  DOM.prototype.forEach = function forEach(callback) {
    Array.prototype.forEach.call(this.elements, callback);
  }

  DOM.prototype.map = function map(callback) {
    return Array.prototype.map.call(this.elements, callback);
  }

  DOM.prototype.reduce = function reduce(callback) {
    return Array.prototype.reduce.call(this.elements, callback);
  }

  DOM.prototype.reduceRight = function reduceRight(callback) {
    return Array.prototype.reduceRight.call(this.elements, callback);
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

  console.log('isArray []', DOM.isArray([]));
  console.log('isObject {}', DOM.isObject({}));
  console.log('isFunction function() {}', DOM.isFunction(function() {}));
  console.log('isNumber 1', DOM.isNumber(1));
  console.log('isString "hello world"', DOM.isString('Hello World'));
  console.log('isNUll null', DOM.isNull(null));
  console.log('isUndefined undefined', DOM.isNull(undefined));


  var $p = new DOM('p');
  var textAllP = $p.map(function(p) {
    return p.textContent;
  });
  console.log(textAllP);

})(window, document);
