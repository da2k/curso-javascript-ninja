(function (win, doc) {
    'use strict';
    function DOM(seletorCSS) {
        this.elements = doc.querySelectorAll(seletorCSS);
    };

    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.elements, function (element) {
            element.addEventListener(eventType, callback, false);
        })
    };

    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.elements, function (element) {
            element.removeEventListener(eventType, callback, false);
        })
    };

    DOM.prototype.get = function get() {
        return this.elements;
    };

    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.elements, arguments);
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.elements, arguments);
    };

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.elements, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.elements, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.elements, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.elements, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.elements, arguments);
    };

    DOM.prototype.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    };

    DOM.prototype.isString = function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(obj) {
        return Object.prototype.toString.call(obj) === '[object Null]'
            || Object.prototype.toString.call(obj) === '[object Undefined]';
    };

    //export DOM
    win.DOM = DOM
})(window, document);
