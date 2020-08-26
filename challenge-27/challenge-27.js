(function(){
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
  function DOM(strNode){
    this.element = document.querySelectorAll(strNode);

    this.on = (trigger, fn) => {
    return addEventListener(trigger, fn);
    }

    this.get = () => {return this.element};

    this.off = (trigger, fn) => {
    return removeEventListener(trigger, fn);
    }

    // - forEach, map, filter, reduce, reduceRight, every e some.

    this.forEach = function forEach() {
      return Array.prototype.forEach.apply(this.element, arguments);
    }

    this.map = function map() {
      return Array.prototype.map.apply(this.element, arguments);
    }

    this.filter = function filter() {
      return Array.prototype.filter.apply(this.element, arguments);
    }

    this.reduce = function reduce() {
      return Array.prototype.reduce.apply(this.element, arguments);
    }

    this.reduceRight = function reduceRight() {
      return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    this.every = function every() {
      return Array.prototype.every.apply(this.element, arguments);
    }

    this.some = function some() {
      return Array.prototype.some.apply(this.element, arguments);
    }

    //- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

    this.isArray = function isArray(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

    this.isObject = function isObject(arg) {
      return Object.prototype.toString.call(arg) === '[object Object]';
    }

    this.isFunction = function isFunction(arg) {
      return Object.prototype.toString.call(arg) === '[object Function]';
    }

    this.isNumber = function isNumber(arg) {
      return Object.prototype.toString.call(arg) === '[object Number]';
    }

    this.isString = function isString(arg) {
      return Object.prototype.toString.call(arg) === '[object String]';
    }

    this.isBoolean = function isBoolean(arg) {
      return Object.prototype.toString.call(arg) === '[object Boolean]';
    }

    this.isNull = function isNull(arg) {
      return Object.prototype.toString.call(arg) === '[object Null]'
      || Object.prototype.toString.call(arg) === '[object Undefined]';
    }
  }

  var $a = new DOM('[data-js="link"]');
  $a.forEach((item) => console.log(item.firstChild.nodeValue) );
})()
