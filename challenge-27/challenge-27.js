(function(win, doc){
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
  function DOM(elementos){
   this.element = doc.querySelectorAll(elementos);
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element,function(item, index){
      item.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(item, index){
      item.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get(event, callback){
    return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.prototype.isArray = function isArray(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Number]';
  };

  DOM.prototype.isString = function isString(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(tipoObject){
    return Object.prototype.toString.call(tipoObject) === '[object Null]' ||
    Object.prototype.toString.call(tipoObject) === '[object Undefined]';
  };

  var a = null;
  console.log(DOM.prototype.isNull(a));

})(window, document);
