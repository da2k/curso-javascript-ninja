(function (document) {
  "use strict";
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

  let myDom = new DOM("p");
  myDom.myForEach(function (elem) {
    return elem;
  });

  console.log(myDom.isNull(10));

  function DOM(nodeString) {
    this.element = document.querySelectorAll(nodeString);
    this.on = function (e, f) {
      this.element.forEach(function (elem) {
        elem.addEventListener(e, f);
      });
    };
    this.off = function (e, f) {
      this.element.forEach(function (elem) {
        elem.removeEventListener(e);
      });
    };
    this.get = function () {
      return this.element;
    };
    this.myForEach = function (func) {
      return this.element.forEach(func);
    };
    this.myMap = function (func) {
      return this.element.map(func);
    };
    this.myFilter = function (func) {
      return this.element.filter(func);
    };
    this.myReduce = function (func) {
      return this.element.reduce(func);
    };
    this.myReduceRight = function (func) {
      return this.element.reduceRight(func);
    };
    this.myEvery = function (func) {
      return this.element.every(func);
    };
    this.mySome = function (func) {
      return this.element.some(func);
    };

    this.isArray = function (item) {
      return Object.prototype.toString.call(item) === "[object Array]";
    };

    this.isObject = function (item) {
      return Object.prototype.toString.call(item) === "[object Object]";
    };

    this.isFunction = function (item) {
      return Object.prototype.toString.call(item) === "[object Function]";
    };

    this.isNumber = function (item) {
      return Object.prototype.toString.call(item) === "[object Number]";
    };

    this.isString = function (item) {
      return Object.prototype.toString.call(item) === "[object String]";
    };

    this.isBoolean = function (item) {
      return Object.prototype.toString.call(item) === "[object Boolean]";
    };

    this.isNull = function (item) {
      return (
        Object.prototype.toString.call(item) === "[object Null]" ||
        Object.prototype.toString.call(item) === "[object Undefined]"
      );
    };
  }
})(document);
