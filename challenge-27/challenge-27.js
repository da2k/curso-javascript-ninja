(function (win, doc) {
  'use strict'
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
  function DOM(string) {
    this.dom = doc.querySelectorAll(string);
  }

  DOM.prototype.on = function (event, callback) {
    Array.prototype.forEach.call(this.dom, function (element) {
      element.addEventListener(event, callback, false);
    })
  }

  DOM.prototype.off = function (event, callback) {
    Array.prototype.forEach.call(this.dom, function (element) {
      element.removeEventListener(event, callback, false);
    })
  }

  DOM.prototype.get = function () {
    return this.dom;
  }

  DOM.prototype.forEach = function forEach(callbackFunc) {
    return Array.prototype.forEach.call(this.dom, callbackFunc);
  }

  DOM.prototype.map = function map(callbackFunc) {
    return Array.prototype.map.call(this.dom, callbackFunc);
  }

  DOM.prototype.filter = function filter(callbackFunc) {
    return Array.prototype.filter.call(this.dom, callbackFunc);
  }

  DOM.prototype.reduce = function reduce(callbackFunc) {
    return Array.prototype.reduce.call(this.dom, callbackFunc);
  }

  DOM.prototype.reduceRight = function reduceRight(callbackFunc) {
    return Array.prototype.reduceRight.call(this.dom, callbackFunc);
  }

  DOM.prototype.every = function every(callbackFunc) {
    return Array.prototype.every.call(this.dom, callbackFunc);
  }

  DOM.prototype.some = function some(callbackFunc) {
    return Array.prototype.some.call(this.dom, callbackFunc);
  }

  DOM.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  DOM.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Function]'
  }

  DOM.isNumber = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
  }

  DOM.isObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }

  DOM.isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
  }
  DOM.isBoolean = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]'
  }
  DOM.isNull = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Null]' || Object.prototype.toString.call(obj) === '[object Undefined]'
  }

  var $a = new DOM('[data-js="link"]');
  console.log(DOM.isArray([1, 2, 3, 4]));
  console.log(DOM.isBoolean(true));
  console.log(DOM.isFunction(function () { }));
  console.log(DOM.isNull(null));
  console.log(DOM.isNumber(9));
  console.log(DOM.isObject({}));
  console.log(DOM.isString('asasdas'));

})(window, document)
