(function(win, document) {
    'use strict';

    //criando construtor DOM  e passando o elements como paramentro
    function DOM(elements) {
        if (!(this instanceof DOM))
        //retorna new DOM  eo valor que for passado por parametro no som
            return new DOM(elements);
        this.element = document.querySelectorAll(elements);

    }

    DOM.isArray = function isArray(param) {
        return Object.prototype.toString.call(param) === '[object Array]';
    };

    DOM.isObject = function isObject(param) {
        return Object.prototype.toString.call(param) === '[object Object]';
    };

    DOM.isFunction = function isFunction(param) {
        return Object.prototype.toString.call(param) === '[object Function]';
    };

    DOM.isNumber = function isNumber(param) {
        return Object.prototype.toString.call(param) === '[object Number]';
    };

    DOM.isString = function isString(param) {
        return Object.prototype.toString.call(param) === '[object String]';
    };

    DOM.isBoolean = function isBoolean(param) {
        return Object.prototype.toString.call(param) === '[object Boolean]';
    };

    DOM.isNull = function isNull(param) {
        return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[object Undefined]';
    };

    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.addEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.removeEventListener(eventTypeType, callback, false);
        });
    };

    DOM.prototype.get = function get(index) {
        //Se o index n for passado ele retorna o 1 elemento, senao ele retorna o indice passado.
        if (!index)
            return this.element[0];
        return this.element[index];
    };

    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function map() {
        return Array.protype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter() {
        return Array.protype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.protype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.protype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.protype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.protype.some.apply(this.element, arguments);
    };

    win.DOM = DOM;

})(window, document);