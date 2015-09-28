(function(window, document, undefined) {

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

  function DOM (elements) {
      this.element = doc.querySelectorAll(elements);
  }

    DOM.is = function (obj) {
      return Object.prototype.toString.call(obj);
    }

    DOM.isArray = function (obj) {
      return this.is(obj) === '[object Array]';
    }

    DOM.isObject = function (obj) {
      return this.is(obj) === '[object Object]';
    }

    DOM.isFunction = function (obj) {
      return this.is(obj) === '[object Function]';
    }

    DOM.isNumber = function (obj) {
      return this.is(obj) === '[object Number]';
    }

    DOM.isString = function (obj) {
      return this.is(obj) === '[object String]';
    }

    DOM.isBoolean = function (obj) {
      return this.is(obj) === '[object Boolean]';
    }

    DOM.isNull = function (obj) {
      return this.is(obj) === '[object Null]' || this.is(obj) === '[object Undefined]';
    }

    DOM.prototype.on = function on (event, callback) {
      Array.prototype.forEach.call(this.element, function (element) {
        element.addEventListener(event, callback, false);
      });
    }

    DOM.prototype.off = function off (event, callback) {
      Array.prototype.forEach.call(this.element, function (element) {
        element.removeEventListener(event, callback, false);
      });
    }

    DOM.prototype.get = function get () {
      return this.element;
    }

    DOM.prototype.forEach = function forEach (callback) {
      Array.protype.forEach.call(this.element, callback);
    }

    DOM.prototype.map = function map (callback) {
      Array.protype.map.call(this.element, callback);
    }

    DOM.prototype.filter = function filter (callback) {
      Array.protype.filter.call(this.element, callback);
    }

    DOM.prototype.reduce = function reduce (callback) {
      Array.protype.reduce.call(this.element, callback);
    }

    DOM.prototype.reduceRight = function reduceRight (callback) {
      Array.protype.reduceRight.call(this.element, callback);
    }

    DOM.prototype.every = function every (callback) {
      Array.protype.every.call(this.element, callback);
    }

    DOM.prototype.some = function some (callback) {
      Array.protype.some.call(this.element, callback);
    }

})(window, document);
