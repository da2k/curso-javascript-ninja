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
  'use-strict';

  function DOM(nodes) {
    this.element = document.querySelectorAll(nodes);
  }

  DOM.prototype.on = function on(evt, func) {
    Array.prototype.forEach.call(this.element, function(element) {
        element.addEventListener(evt, function(e){ func(e) }, false);
    })
  }

  DOM.prototype.off = function off(evt, func) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(evt, function(e){ func(e) }, false);
    })
  }

  DOM.prototype.get = function get() {
    return this.element;
  }

  // Novos Métodos

  DOM.prototype.forEach = function forEach(func) {
    return Array.prototype.forEach.call(this.element, func);
  }

  DOM.prototype.map = function map(func) {
    return Array.prototype.map.call(this.element, func);
  }

  DOM.prototype.filter = function filter(func) {
    return Array.prototype.filter.call(this.element, func);
  }

  DOM.prototype.reduce = function reduce(func) {
    return Array.prototype.reduce.call(this.element, func);
  }

  DOM.prototype.reduceRight = function reduceRight(func) {
    return Array.prototype.reduceRight.call(this.element, func);
  }

  DOM.prototype.every = function every(func) {
    return Array.prototype.every.call(this.element, func);
  }

  DOM.prototype.some = function some(func) {
    return Array.prototype.some.call(this.element, func);
  }

  // isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

  DOM.prototype.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  }

  DOM.prototype.isString = function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(obj) {
    if (obj === null)
      return Object.prototype.toString.call(obj) === '[object Null]';
    if (obj === undefined)
      return Object.prototype.toString.call(obj) === '[object Undefined]';
  }

  var $a = new DOM('[data-js="link"]');

  $a.forEach(function(i, ind){console.log('forEach', i)});
  $a.map(function(i, ind){console.log('map', i)});

  var dom = new DOM();

  console.log("Array", dom.isArray([1, 2, 3, 4]));
  console.log("Object", dom.isObject({1: "lalala", 2: "kakaka"}));
  console.log("Function", dom.isFunction(()=> "ok"));
  console.log("Number", dom.isNumber(1));
  console.log("String", dom.isString("Uma string"));
  console.log("Boolean", dom.isBoolean(false));
  console.log("Null", dom.isNull(null));
  console.log("Null", dom.isNull());

})()
