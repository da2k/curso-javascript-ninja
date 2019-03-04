(function (window, document) {
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

  function DOM(element) {
    this.element = DOM.prototype.getElement(element);
  }

  DOM.prototype.getElement = function (element) {
    return document.querySelectorAll(element);
  };

  DOM.prototype.on = function (event, listener) {
    Array.prototype.forEach.call(this.element, function (item) {
      item.addEventListener(event, listener, false);
    });
  };

  DOM.prototype.off = function (event, listener) {
    Array.prototype.forEach.call(this.element, function (item) {
      item.removeEventListener(event, listener, false);
    });
  };

  DOM.prototype.get = function () {
    return this.element;
  };

  DOM.prototype.forEach = function (callback) {
    Array.prototype.forEach.call(this.element, callback);
  };

  DOM.prototype.map = function (callback) {
    return Array.prototype.map.call(this.element, callback);
  };

  DOM.prototype.filter = function (callback) {
    return Array.prototype.filter.call(this.element, callback);
  };

  DOM.prototype.reduce = function (callback, initialValue) {
    return Array.prototype.reduce.call(this.element, callback, initialValue);
  };

  DOM.prototype.reduceRight = function (callback, initialValue) {
    return Array.prototype.reduceRight.call(this.element, callback, initialValue);
  };

  DOM.prototype.every = function (callback) {
    return Array.prototype.every.call(this.element, callback);
  };

  DOM.prototype.some = function (callback) {
    return Array.prototype.some.call(this.element, callback);
  };

  DOM.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  DOM.isObject = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };

  DOM.isFunction = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  };

  DOM.isNumber = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  };

  DOM.isString = function(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  DOM.isBoolean = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
  };

  DOM.isNull = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Null]' ||
    Object.prototype.toString.call(obj) === '[object Undefined]';
  };

})(window, document);
