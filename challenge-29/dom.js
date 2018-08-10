(function(win, document) {
    'use strict';

    function DOM(element) {
        this.element = document.querySelectorAll(element);
    }

    DOM.prototype.on = function on(eventName, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.addEventListener(eventName, callback, false);
        });
    };

    DOM.prototype.off = function off(eventName, callback) {
        Array.prototype.forEach.call(this.element, function(element) {
            element.removeEventListener(eventName, callback, false);
        });
    };

    DOM.prototype.get = function get(element) {
        return this.element;
    };

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

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    };

    window.DOM = DOM;
})(window, document);