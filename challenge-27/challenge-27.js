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

(function() {

  'use strict';

  function DOM(elements) {
    this.element = this.getElements(elements);
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.getElements = function getElements(element) {
    return document.querySelectorAll(element);
  };

  DOM.prototype.substituteElements = function substituteElements(newElement, oldElement) {
    return oldElement.replaceWith(newElement);
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
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

  DOM.prototype.getObjType = function getObjType(obj) {
    return Object.prototype.toString.call(obj);
  };

  DOM.prototype.isObjectOfGivenType = function isObjectOfGivenType(obj, typeExpected) {
    return this.getObjType(obj) === '[object '+typeExpected+']';
  }

//Tests can be found below this line
var dom = new DOM();

var link = new DOM('[data-js="link"]');
link.map(function(item ){
  console.log(item);
});

console.log(dom.isObjectOfGivenType(true, 'Boolean')); //true
console.log(dom.isObjectOfGivenType(2, 'Number')); // true
console.log(dom.isObjectOfGivenType(null, 'Null')); // true
console.log(dom.isObjectOfGivenType(undefined, 'Undefined')); // true
console.log(dom.isObjectOfGivenType(1, 'String')); // false
console.log(dom.isObjectOfGivenType(null, 'Function')); // false
console.log(dom.isObjectOfGivenType(1, 'Object')); // false
})();
