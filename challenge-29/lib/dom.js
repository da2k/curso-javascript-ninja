(function() {
    'use strict';

    function DOM(elements) {
        if (!(this instanceof DOM))
            return new DOM(elements);

        this.element = document.querySelectorAll(elements);
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

    DOM.prototype.get = function get(index) {
        if (!index)
            return this.element[0];

        return this.element[index];
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
    DOM.isArray = function isArray(element) {
        return Object.prototype.toString.call(element) === '[object Array]';
    };

    DOM.isObject = function isObject(element) {
        return Object.prototype.toString.call(element) === '[object Object]';
    };

    DOM.isFunction = function isFunction(element) {
        return Object.prototype.toString.call(element) === '[object Function]';
    };

    DOM.isNumber = function isNumber(element) {
        return Object.prototype.toString.call(element) === '[object Number]';
    };

    DOM.isString = function isString(element) {
        return Object.prototype.toString.call(element) === '[object String]';
    };

    DOM.isBoolean = function isBoolean(element) {
        return Object.prototype.toString.call(element) === '[object Boolean]';
    };

    DOM.isNull = function isNull(element) {
        return Object.prototype.toString.call(element) === '[object Null]'
        || Object.prototype.toString.call(element) === '[object Undefined]';
    };
    window.DOM = DOM;
})();
