(function(win, doc) {
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
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.forEachDOM = function forEachDOM(callback) {
    Array.prototype.forEach.call(this.element, callback);
  };

  DOM.prototype.mapDOM = function mapDOM(callback) {
    Array.prototype.map.call(this.element, callback);
  };

  DOM.prototype.reduceDOM = function reduceDOM(callback) {
    Array.prototype.reduce.call(this.element, callback);
  };

  DOM.prototype.reduceRightDOM = function reduceRightDOM(callback) {
    Array.prototype.reduceRight.call(this.element, callback);
  };

  DOM.prototype.everyDOM = function everyDOM(callback) {
    Array.prototype.every.call(this.element, callback);
  };

  DOM.prototype.someDOM = function someDOM(callback) {
    Array.prototype.some.call(this.element, callback);
  };

  function isArray(el) {
    if (Object.prototype.toString.call(el) === '[object Array]')
      return true;
    return false;
  }

  function isObject(el) {
    if (Object.prototype.toString.call(el) === '[object Object]')
      return true;
    return false;
  }

  function isFunction(el) {
    if (Object.prototype.toString.call(el) === '[object Function]')
      return true;
    return false;
  }

  function isNumber(el) {
    if (Object.prototype.toString.call(el) === '[object Number]')
      return true;
    return false;
  }

  function isString(el) {
    if (Object.prototype.toString.call(el) === '[object String]')
      return true;
    return false;
  }

  function isBoolean(el) {
    if (Object.prototype.toString.call(el) === '[object Boolean]')
      return true;
    return false;
  }

  function isNull(el) {
    if (Object.prototype.toString.call(el) === '[object Null]' || '[object Undefined]')
      return true;
    return false;
  }
})(window, document);
