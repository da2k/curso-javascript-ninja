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

  function DOM(elements) {
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

  DOM.prototype.get = function get() {
    return this.element;
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

  var $a = new DOM('[data-js="link"]');
  var array = $a.map( function(item) {
      return item;
  });

  console.log(DOM.isArray(array));
  console.log(DOM.isNumber(1));
  console.log(DOM.isNull(null));


})(window, document);
