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

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    })
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, false);
    })
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.prototype.isArray = function isArray(value) {
    return Object.prototype.toString.call( value ) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(value) {
    return Object.prototype.toString.call( value ) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction(value) {
    return Object.prototype.toString.call( value ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber(value) {
    return Object.prototype.toString.call( value ) === '[object Number]';
  }

  DOM.prototype.isString = function isString(value) {
    return Object.prototype.toString.call( value ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(value) {
    return Object.prototype.toString.call( value ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(value) {
    return Object.prototype.toString.call( value ) === '[object Null]'
    || Object.prototype.toString.call( value ) === '[object Undefined]';
  }

  var $a = new DOM ('[data-js="link"]');

  $a.forEach(function(item) {
    console.log(item.firstChild.nodeValue); // Pegando somente o texto dentro de cada "a".
  })

  var $aMAP = $a.map(function(item) {
    return item.getAttribute('data-js'); // Pegando os "a" com atributo 'data-js'.
  })
  console.log( $aMAP );

  console.log( DOM.prototype.isArray( [45, 78] ) );
  console.log( DOM.prototype.isObject({ name: 'Maria' }) );
  console.log( DOM.prototype.isNumber( 96675 ) );
  console.log( DOM.prototype.isString( 'Pai nosso' ) );
  console.log( DOM.prototype.isBoolean(false) );
  console.log( DOM.prototype.isNull( undefined ) );
})();
