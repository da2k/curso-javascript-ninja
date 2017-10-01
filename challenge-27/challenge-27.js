(function() {
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

  function DOM(selectedNode){
    this.element = document.querySelectorAll(selectedNode);
  }

  /* parte 1 - como eu tinha feito
  DOM.prototype.foreachDOM = function foreachDOM(callback) {
    Array.prototype.forEach.call(this.element, callback) // poderia ser feito assim também, mas do outro jeito podem se passar mais parâmteros
  };

  DOM.prototype.mapDOM = function mapDOM(callback) {
    Array.prototype.map.call(this.element, callback)
  };

  DOM.prototype.filterDOM = function filterDOM(callback) {
    Array.prototype.filter.call(this.element, callback)
  };

  DOM.prototype.reduceDOM = function reduceDOM(callback) {
    Array.prototype.reduce.call(this.element, callback)
  };

  DOM.prototype.reduceRightDOM = function reduceRightDOM(callback) {
    Array.prototype.reduceRight.call(this.element, callback)
  };

  DOM.prototype.everyDOM = function everyDOM(callback) {
    Array.prototype.every.call(this.element, callback)
  };

  DOM.prototype.someDOM = function someDOM(callback) {
    Array.prototype.some.call(this.element, callback)
  };
  */

  DOM.prototype.forEach = function forEach(callback) {
    return Array.prototype.forEach.apply(this.element, arguments)
  };

  DOM.prototype.map = function map(callback) {
    return Array.prototype.map.apply(this.element, arguments)
  };

  DOM.prototype.filter = function filter(callback) {
    return Array.prototype.filter.apply(this.element, arguments)
  };

  DOM.prototype.reduce = function reduce(callback) {
    return Array.prototype.reduce.apply(this.element, arguments)
  };

  DOM.prototype.reduceRight = function reduceRight(callback) {
    return Array.prototype.reduceRight.apply(this.element, arguments)
  };

  DOM.prototype.every = function every(callback) {
    return Array.prototype.every.apply(this.element, arguments)
  };

  DOM.prototype.some = function some(callback) {
    return Array.prototype.some.apply(this.element, arguments)
  };

  /* parte 2 - como eu tinha feito

  function checkObject(objToAnalise, objectType) {
    return Object.prototype.toString.call(objToAnalise) === objectType;
  }

  DOM.isArray = function(objToAnalise) {
    return checkObject(objToAnalise, '[object Array]');
  };
  console.log('DOM.isArray([1,2,3])',DOM.isArray([1,2,3]));

  DOM.isObject = function(objToAnalise) {
    return checkObject(objToAnalise, '[object Object]');
  };
  console.log('DOM.isObject({})',DOM.isObject({}));

  DOM.isFunction = function(objToAnalise) {
    return checkObject(objToAnalise, '[object Function]');
  };
  console.log('DOM.isFunction(function() {});',DOM.isFunction(function() {}));

  DOM.isNumber = function(objToAnalise) {
    return checkObject(objToAnalise, '[object Number]');
  };
  console.log('DOM.isNumber(\'numero\');',DOM.isNumber('numero'));
  console.log('DOM.isNumber(123);',DOM.isNumber(123));

  DOM.isString = function(objToAnalise) {
    return checkObject(objToAnalise, '[object String]');
  };
  console.log('DOM.isString(\'oi eu sou um texto\')',DOM.isString('oi eu sou um texto'));

  DOM.isBoolean = function(objToAnalise) {
    return checkObject(objToAnalise, '[object Boolean]');
  };
  console.log('DOM.isBoolean(true)',DOM.isBoolean(true));

  DOM.isNull = function(objToAnalise) {
    return checkObject(objToAnalise, '[object Null]') ? true : checkObject(objToAnalise, '[object Undefined]') ;
  };
  console.log('DOM.isNull(null);', DOM.isNull(null));
  console.log('DOM.isNull(undefined);', DOM.isNull(undefined));

  */

  DOM.prototype.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]'
    || Object.prototype.toString.call(param) === '[object Undefined]';
  };

  var dom = new DOM(); // para que o prototype funcione direto
  console.log(dom.isFunction(function(){}));


  DOM.prototype.on = function onDOM(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(event, callback, false);
    })
  };

  DOM.prototype.off = function offDOM(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(event, callback, false);
    })
  };

  DOM.prototype.get = function getDOM(){
    return this.element;
  };

  function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
  }

  var $a = new DOM('[data-js="link"]');
  $a.on('click', handleClick);

})();
