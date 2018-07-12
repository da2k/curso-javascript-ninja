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
  function DOM(str){
    this.element = doc.querySelectorAll(str);
  }

  DOM.forEach = function forEach( arr, func ) {
    return Array.prototype.forEach.call( arr, func );
  }

  DOM.map = function map( arr, func ) {
    return Array.prototype.map.call( arr, func );
  }

  DOM.filter = function filter( arr, func ) {
    return Array.prototype.filter.call( arr, func );
  }

  DOM.reduce = function reduce( arr, func ) {
    return Array.prototype.reduce.call( arr, func );
  }

  DOM.reduceRight = function reduceRight( arr, func ) {
    return Array.prototype.reduceRight.call( arr, func );
  }

  DOM.every = function every( arr, func ) {
    return Array.prototype.every.call( arr, func );
  }

  DOM.some = function some( arr, func ) {
    return Array.prototype.some.call( arr, func );
  }

  function transformType(a){
    return Object.prototype.toString.call(a);
  }

  DOM.isArray = function isArray(obj){
    return transformType(obj) === '[object Array]';
  }

  DOM.isObject = function isObject(obj){
    return transformType(obj) === '[object Object]';
  }

  DOM.isFunction = function isFunction(obj){
    return transformType(obj) === '[object Function]';
  }

  DOM.isNumber = function isNumber(obj){
    return transformType(obj) === '[object Number]';
  }

  DOM.isString = function isString(obj){
    return transformType(obj) === '[object String]';
  }

  DOM.isBoolean = function isBoolean(obj){
    return transformType(obj) === '[object Boolean]';
  }

  DOM.isNull = function isNull(obj){
    return transformType(obj) === '[object Null]' || '[object Undefined]';
  }

  console.log (DOM.isArray([1, 2, 3]));
  console.log (DOM.isFunction(function() {}));
  console.log (DOM.isNumber('numero'));

})();