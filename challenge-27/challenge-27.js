(function() {
    'use strict'

    function DOM(elements) {
        this.element = document.querySelectorAll(elements)

        this.off = function(event, callback) {
            Array.prototype.forEach.call(this.element, function(element) {
                element.removeEventListener(event, callback)
            });
        }
    }

    DOM.prototype.on = function on(event, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
                element.addEventListener(event, callback, false)
            });
    }

    DOM.prototype.off = function off(event, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
                element.removeEventListener(event, callback, false)
            });
    }

    DOM.prototype.get = function get() {
        return this.element
    }

    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments)
    }

    DOM.prototype.map = function map(callback) {
        return Array.prototype.map.call(this.element, callback)
    }
    
    DOM.prototype.filter = function filter(callback) {
        return Array.prototype.filter.call(this.element, callback)
    }

    DOM.prototype.reduce = function reduce(callback, initialValue) {
        return Array.prototype.reduce.call(this.element, callback, initialValue)
    }

    DOM.prototype.some = function some(callback) {
        return Array.prototype.some.call(this.element, callback)
    }

    DOM.prototype.every = function every(callback) {
        return Array.prototype.every.call(this.element, callback)
    }

    DOM.prototype.reduceRight = function reduceRight(callback, initialValue) {
        return Array.prototype.reduceRight.call(this.element, callback, initialValue)
    }

    DOM.prototype.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]'
    }

    DOM.prototype.isObject = function isObject(obj) {
        return  Object.prototype.toString.call(obj) === '[object Object]'
    }

    DOM.prototype.isFunction = function isFunction(obj) {
        return  Object.prototype.toString.call(obj) === '[object Function]'
    }

    DOM.prototype.isNull = function isFunction(obj) {
        return  Object.prototype.toString.call(obj) === '[object Null]' || Object.prototype.toString.call(obj) === '[object Undefined]'
    }

    DOM.prototype.isNumber = function isNumber(data) {
        return typeof data === 'number'
    }

    DOM.prototype.isString = function isString(data) {
        return typeof data === 'string'
    }

    DOM.prototype.isBoolean = function isBoolean(data) {
        return typeof data === 'boolean'
    }

    var $a = new DOM('[data-js="link"]');
    
    console.log(DOM.prototype.isArray([1, 2, 3])); // true
    console.log(DOM.prototype.isObject({prop1: 1}));
    console.log(DOM.prototype.isFunction(function() {}));
    console.log(DOM.prototype.isNull(undefined));
    console.log(DOM.prototype.isBoolean(false));
    console.log(DOM.prototype.isString('texto'));
    console.log(DOM.prototype.isNumber(10));
    
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
})()
