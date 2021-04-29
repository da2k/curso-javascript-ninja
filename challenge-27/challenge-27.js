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
function DOM(str){

  this.element = document.querySelectorAll(str);

  this.on = (event, fnc) => {
    Array.prototype.forEach.call(this.element, (element) => {
      element.addEventListener(event, fnc, false)
    })
  }
  this.off = (event, fnc) => {
    Array.prototype.forEach.call(this.element, (element) => {
      element.removeEventListener(event, fnc, false)
    })
  }
  this.get = () => {
    return this.element
  }

  this.forEach = () => {
    return Array.prototype.forEach.apply(this.element, arguments)
  }

  this.map = () => {
    return Array.prototype.map.apply(this.element, arguments)
  }

  this.filter = () => {
    return Array.prototype.filter.apply(this.element, arguments)
  }

  this.reduce = () => {
    return Array.prototype.reduce.apply(this.element, arguments)
  }

  this.reduceRight = () => {
    return Array.prototype.reduceRight.apply(this.element, arguments)
  }

  this.every = () => {
    return Array.prototype.every.apply(this.element, arguments)
  }

  this.some = () => {
    return Array.prototype.some.apply(this.element, arguments)
  }

  this.isArray = (param) => {
    return Object.prototype.toString.call(param) === '[object Array]';
  }

  this.isObject = (param) => {
    return Object.prototype.toString.call(param) === '[object Object]';
  }

  this.isString = (param) => {
    return Object.prototype.toString.call(param) === '[object String]';
  }

  this.isNull = (param) => {
    return Object.prototype.toString.call(param) === '[object Null]';
  }

  this.isNumber = (param) => {
    return Object.prototype.toString.call(param) === '[object Number]';
  }

  this.isFunction = (param) => {
    return Object.prototype.toString.call(param) === '[object Function]';
  }

  this.isBoolean = (param) => {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  }
}

let itens = new DOM('[data-js="item"]');
