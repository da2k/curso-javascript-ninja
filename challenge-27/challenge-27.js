( function( win, doc ) {
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

  function DOM( query ) {
    this.element = doc.querySelectorAll( query );
  }

  DOM.prototype.on = function on( eventName, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.addEventListener( eventName, callback, false );
    } );
  }

  DOM.prototype.off = function off( eventName, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.removeEventListener( eventName, callback, false );
    } );
  }

  DOM.prototype.get = function get() {
    return this.element;
  }

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply( this.element, arguments );
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply( this.element, arguments );
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

  DOM.prototype.isArray = function isArray( object ) {
    return Object.prototype.toString.call( object ) === '[object Array]';
  }

  DOM.prototype.isFunction = function isFunction( object ) {
    return Object.prototype.toString.call( object ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber( object ) {
    return Object.prototype.toString.call( object ) === '[object Number]';
  }

  DOM.prototype.isString = function isString( object ) {
    return Object.prototype.toString.call( object ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean( object ) {
    return Object.prototype.toString.call( object ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull( object ) {
    return
      Object.prototype.toString( object ) === '[object Null]' ||
      Object.prototype.toString( object ) === '[object Undefined]';
  }
}( window, document ) );
