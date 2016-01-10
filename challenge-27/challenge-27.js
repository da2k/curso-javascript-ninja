

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
DOM.is = function is(obj) {
  return Object.prototype.toString.call(obj);
};

DOM.isArray = function isArray(obj) {
  return this.is(obj) === '[object Array]';
};

DOM.isFunction = function isFunction(obj) {
  return this.is(obj) === '[object Function]';
};

DOM.isObject = function isObject(obj) {
  return this.is(obj) === '[object Object]';
};

DOM.isNumber = function isNumber(obj) {
  return this.is(obj) === '[object Number]';
};

DOM.isBoolean = function isBoolean(obj) {
  return this.is(obj) === '[object Boolean]';
};

DOM.isString = function isString(obj) {
  return this.is(obj) === '[object String]';
};

DOM.isNull = function isNull(obj) {
  return this.is(obj) === '[object Null]' || this.is(obj) === '[object Undefined]';
};

function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    });
  };

DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
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
})(window, document);
