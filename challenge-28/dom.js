(function(win, document) {
    'use strict';

    function DOM(element) {
        this.element = element;
    }

    DOM.prototype.on = function on(event, callback) {
        document.addEventListener(event, callback);
    };

    DOM.prototype.off = function off(event, callback) {
        document.removeEventListener(event, callback);
    };

    DOM.prototype.get = function get(element) {
        return this.element;
    };

    DOM.prototype.foreach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.prototype.every.some.apply(this.element, arguments);
    };

    DOM.prototype.isString = function isBoolean(param) {
        return Object.prototype.toString.call(param) === '[Object String]';
    };

    DOM.prototype.isBolean = function isBoolean(param) {
        return Object.prototype.toString.call(param) === '[Object Boolea]n';
    };

    DOM.prototype.isNumber = function isNumber(param) {
        return Object.prototype.toString.call(param) === '[Object Number]';
    };

    DOM.prototype.isFunction = function isFunction(param) {
        return Object.prototype.toString.call(param) === '[Object Function]';
    };

    DOM.prototype.isObject = function isFunction(param) {
        return Object.prototype.toString.call(param) === '[Object Object]';
    };

    DOM.prototype.isArray = function isArray(param) {
        return Object.prototype.toString.call(param) === '[Object Array]';
    }

    DOM.prototype.isNull = function isNull(param) {
        return Object.prototype.toString.call(param) === '[Object Null]' ||
            Object.prototype.toString.call(param) === '[Object undefined]';
    }

    window.DOM = DOM;
})(window, document);