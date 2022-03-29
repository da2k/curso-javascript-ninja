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

(function(){
  
  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);

    this.on = function(evento, func) {
      this.element.forEach(function(element) {
        element.addEventListener(evento, func, false);
      })
    };

    this.off = function() {
      this.element.forEach(function(element) {
        element.removeEventListener(evento, func, false);
      })
    };

    this.get = function() {
      return this.element;
    };
  }

  DOM.forEach = function() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.map = function() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.filter = function() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.reduce = function() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.reduceRight = function() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.every = function() {
    return Array.prototype.reduce.every(this.element, arguments);
  };

  DOM.some = function() {
    return Array.prototype.reduce.some(this.element, arguments);
  };

  DOM.is = function is(obj){
    return Object.prototype.toString.call(obj);
  };

  DOM.isArray = function(obj) {
    return DOM.is(obj) === '[object Array]'
  };

  DOM.isObject = function(obj) {
    return DOM.is(obj) === '[object Object]'
  };

  DOM.isFunction = function(obj) {
    return DOM.is(obj) === '[object Function]'
  };

  DOM.isNumber = function(obj) {
    return DOM.is(obj) === '[object Number]'
  };

  DOM.isString = function(obj) {
    return DOM.is(obj) === '[object String]'
  };

  DOM.isBoolean = function(obj) {
    return DOM.is(obj) === '[object Boolean]'
  };

  DOM.isNull = function(obj) {
    var result = DOM.is(obj);
    return result === '[object Null]' || result === '[object Undefined]';
  };

})();
