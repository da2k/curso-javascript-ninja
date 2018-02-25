(function(win, document){
    'use strict';

    function DOM(elements){
        this.element = this.getDOMElements(elements);
    }

    DOM.prototype.getDOMElements = function getDOMElements(elements){
        return document.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(eventType, callback){
        Array.prototype.forEach.call(this.element, element => {
            element.addEventListener(eventType, callback, false);
        });
    }

    DOM.prototype.off = function off(event, callback){
        Array.prototype.forEach.call(this.element, element => {
            element.removeEventListener(eventType, callback, false);
        });
    }

    DOM.prototype.get = function get(){
        return this.element;
    }

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function filter(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    }

    DOM.prototype.is = function is(param, objectName){
        return Object.prototype.toString.call(param) === '[object ' + objectName + ']';
    }

    DOM.prototype.isArray = function isArray(param){
        return this.is(param, 'Array');
    }

    DOM.prototype.isObject = function isObject(param){
        return this.is(param, 'Object');
    }

    DOM.prototype.isFunction = function isFunction(param){
        return this.is(param, 'Function');
    }

    DOM.prototype.isNumber = function isNumber(param){
        return this.is(param, 'Number');
    }

    DOM.prototype.isString = function isString(param){
        return this.is(param, 'String');
    }

    DOM.prototype.isBoolean = function isBoolean(param){
        return this.is(param, 'Boolean');
    }

    DOM.prototype.isNull = function isNull(param){
        return  this.is(param, 'Null') || this.is(param, 'Undefined');
    }

    win.DOM = DOM;
    
})(window, document);