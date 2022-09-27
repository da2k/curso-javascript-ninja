(function(window, document) {
    'use strict'

    function DOM(elements) {
        if(!(this instanceof DOM)) 
            return new DOM(elements)

        this.element = document.querySelectorAll(elements)
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

    DOM.prototype.get = function get(index) {
        if(!index)
            return this.element[0]
        return this.element[index]
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

    DOM.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]'
    }

    DOM.isObject = function isObject(obj) {
        return  Object.prototype.toString.call(obj) === '[object Object]'
    }

    DOM.isFunction = function isFunction(obj) {
        return  Object.prototype.toString.call(obj) === '[object Function]'
    }

    DOM.isNull = function isFunction(obj) {
        return  Object.prototype.toString.call(obj) === '[object Null]' || Object.prototype.toString.call(obj) === '[object Undefined]'
    }

    DOM.isNumber = function isNumber(data) {
        return typeof data === 'number'
    }

    DOM.isString = function isString(data) {
        return typeof data === 'string'
    }

    DOM.isBoolean = function isBoolean(data) {
        return typeof data === 'boolean'
    }
    
    window.DOM = DOM
    
})(window, document)
