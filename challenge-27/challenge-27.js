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

(function(win, doc){
  'use strict';

  //funções do challenge 26
  function DOM(str){
    this.element = doc.querySelectorAll(str);
  }

  DOM.prototype.on = function on (event, callback) {
    Array.prototype.forEach.call( this.element, function(btn) {
      btn.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function off () {
    Array.prototype.forEach.call( this.element, function(btn) {
      btn.removeEventListener(event, callback, false);
    });
  }

  DOM.prototype.get = function get () {
       return this.element;
  }
//fim das funções do challenge 26

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply( this.element, arguments );
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.call( this.element, arguments );
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.call( this.element, arguments );
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.call( this.element, arguments );
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.call( this.element, arguments );
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.call( this.element, arguments );
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.call( this.element, arguments );
  }


  function transformType(a){
    return Object.prototype.toString.call(a);
  }

  DOM.prototype.isArray = function isArray(obj){
    return transformType(obj) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(obj){
    return transformType(obj) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(obj){
    return transformType(obj) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(obj){
    return transformType(obj) === '[object Number]';
  }

  DOM.prototype.isString = function isString(obj){
    return transformType(obj) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(obj){
    return transformType(obj) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(obj){
    return transformType(obj) === '[object Null]' || '[object Undefined]';
  }


  var DOM = new DOM();
  console.log (DOM.isArray([1, 2, 3]));
  console.log (DOM.isFunction(function() {}));
  console.log (DOM.isNumber('numero'));

})(window, document);