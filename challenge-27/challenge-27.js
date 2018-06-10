'use strict';
(function() {
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
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    Array.prototype.some.apply(this.element, arguments);
  };


  DOM.getType = function getType(item) {
    return Object.prototype.toString.call(item);
  }

  DOM.isArray = function isArray(item) {
    return this.getType(item) === '[object Array]';
  }

  DOM.isObject = function isObject(item) {
    return this.getType(item) === '[object Object]';
  }

  DOM.isFunction = function isFunction(item) {
    return this.getType(item) === '[object Function]';
  }

  DOM.isNumber = function isNumber(item) {
    return this.getType(item) === '[object Number]';
  }

  DOM.isString = function isString(item) {
    return this.getType(item) === '[object String]';
  }

  DOM.isBoolean = function isBoolean(item) {
    return this.getType(item) === '[object Boolean]';
  }

  DOM.isNull = function isNull(item) {
    return this.getType(item) === '[object Null]';
  }

  var $a = new DOM('[data-js="link"]');
  console.log($a);

  console.log('ForEach Method');
  $a.forEach(function(item, index) {
    console.log('item:', item.firstChild.nodeValue, '- index:', index);
  });

  console.log('Is array?', DOM.isArray([1, 2, 3]));
  console.log('Is object?', DOM.isObject({}));
  console.log('Is function?', DOM.isFunction(function() {}));
  console.log('Is number?', DOM.isNumber(1));
  console.log('Is string?', DOM.isString('string'));
  console.log('Is boolean?', DOM.isBoolean(false));
  console.log('Is null?', DOM.isNull(null));
})();
