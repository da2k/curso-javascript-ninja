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
(function() {
    'use strict';

    function DOM(element) {
        this.element = document.querySelectorAll(element);
    }

    // DOM Methods
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

    // Array Methods
    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    };

    // Type Checking Methods
    DOM.prototype.isArray = function isArray(element) {
        return Object.prototype.toString.call(element) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(element) {
        return Object.prototype.toString.call(element) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(element) {
        return Object.prototype.toString.call(element) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(element) {
        return Object.prototype.toString.call(element) === '[object Number]';
    };

    DOM.prototype.isString = function isString(element) {
        return Object.prototype.toString.call(element) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean(element) {
        return Object.prototype.toString.call(element) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(element) {
        return Object.prototype.toString.call(element) === '[object Null]'
        || Object.prototype.toString.call(element) === '[object Undefined]';
    };
})();
