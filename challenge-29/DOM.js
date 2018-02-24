(function (win, doc) {
    'use strict';
    function DOM(seletorCSS) {
        if (!(this instanceof DOM))
            return new DOM(seletorCSS);

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

    DOM.prototype.getFirst = function getFirst() {
        return this.elements[0];
    };

    // metodos array like
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

    // metodos estáticos, não dependem de "new DOM()"
    DOM.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    DOM.isObject = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    DOM.isFunction = function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    };

    DOM.isNumber = function isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    };

    DOM.isString = function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    };

    DOM.isBoolean = function isBoolean(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    };

    DOM.isNull = function isNull(obj) {
        return Object.prototype.toString.call(obj) === '[object Null]'
            || Object.prototype.toString.call(obj) === '[object Undefined]';
    };

    DOM.setValue = function setValue(seletorCSS, valor) {
        new DOM(seletorCSS).getFirst().value = valor;
    };

    DOM.setTextContent = function setTextContent(seletorCSS, valor) {
        new DOM(seletorCSS).getFirst().textContent = valor;
    };

    //export DOM
    win.DOM = DOM
})(window, document);
