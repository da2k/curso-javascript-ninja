(function(win, document) {
    'use strict';

    function DOM(element) {
        if (!(this instanceof DOM))
            return new DOM(element);
        this.element = document.querySelectorAll(element);

    }

    DOM.prototype.get = function get(index) {
        if (!index)
            return this.element[0];
        return this.element(index);
    };

    DOM.prototype.on = function on(eventName, callback) {
        this.element.forEach(function(element) {
            element.addEventListener(eventName, callback, false);
        });
    };

    DOM.prototype.off = function off(eventName, callback) {
        this.element.forEach(function(element) {
            element.removeEventListener(eventName, callback, false);
        });
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

    window.DOM = DOM;
})(window, document);