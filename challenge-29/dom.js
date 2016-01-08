(function (doc, win) {
    'use strict';

    function DOM (elements) {
        if(!(this instanceof DOM))
            return new DOM(elements);
        this.element = doc.querySelectorAll(elements);
    }
    
 
    DOM.is = function (obj) {
        return Object.prototype.toString.call(obj);
    }

    DOM.isArray = function (obj) {
        return this.is(obj) === '[object Array]';
    }

    DOM.isObject = function (obj) {
        return this.is(obj) === '[object Object]';
    }

    DOM.isFunction = function (obj) {
        return this.is(obj) === '[object Function]';
    }

    DOM.isNumber = function (obj) {
        return this.is(obj) === '[object Number]';
    }

    DOM.isString = function (obj) {
        return this.is(obj) === '[object String]';
    }

    DOM.isBoolean = function (obj) {
        return this.is(obj) === '[object Boolean]';
    }

    DOM.isNull = function (obj) {
        return this.is(obj) === '[object Null]' || this.is(obj) === '[object Undefined]';
    }

    DOM.prototype.on = function on (event, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
           element.addEventListener(event, callback, false);
        });
    }

    DOM.prototype.off = function off (event, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.removeEventListener(event, callback, false);
        });
    }

    DOM.prototype.get = function get (index) {
        if (!index)
            return this.element[0];
        return this.element[index];
    }

    DOM.prototype.forEach = function forEach () {
        Array.protype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function map () {
        Array.protype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function filter () {
        Array.protype.filter.apply(this.element, arguments);
    }

    DOM.prototype.reduce = function reduce () {
        Array.protype.reduce.apply(this.element, arguments);
    }

    DOM.prototype.reduceRight = function reduceRight () {
        Array.protype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every () {
        Array.protype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function some () {
        Array.protype.some.apply(this.element, arguments);
    }

    window.DOM = DOM;

 })(document, window);