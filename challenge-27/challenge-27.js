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

    DOM.prototype.forEach = function() {
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function() {
        return Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function() {
        return Array.prototype.filter.apply(this.element, arguments);
    }

    DOM.prototype.reduce = function() {
        return Array.prototype.reduce.apply(this.element, arguments);
    }

    DOM.prototype.reduceRight = function() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function() {
        return Array.prototype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function() {
        return Array.prototype.some.apply(this.element, arguments);
    }

    DOM.isArray = function(element) {
        return Object.prototype.toString.call(element) === '[object Array]';
    }

    DOM.isObject = function(element) {
        return Object.prototype.toString.call(element) === '[object Object]';
    }

    DOM.isFunction = function(element) {
        return Object.prototype.toString.call(element) === '[object Function]';
    }

    DOM.isNumber = function(element) {
        return Object.prototype.toString.call(element) === '[object Number]';
    }

    DOM.isString = function(element) {
        return Object.prototype.toString.call(element) === '[object String]';
    }

    DOM.isBoolean = function(element) {
        return Object.prototype.toString.call(element) === '[object Boolean]';
    }

    DOM.isNull = function(element) {
        return Object.prototype.toString.call(element) === '[object Null]' 
        || Object.prototype.toString.call(element) === '[object Undefined]';
    }

})();