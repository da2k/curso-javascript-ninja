(function() {

  'use strict';

    function DOM(elements) {
      if (!(this instanceof DOM))
        return new DOM(elements);
      this.element = this.getElements(elements);
    }

    DOM.prototype.on = function on(event, callback){
      Array.prototype.forEach.call(this.element, function(element) {
          element.addEventListener(event, callback, false);
        });
      };

      DOM.prototype.off = function off(event, callback){
      Array.prototype.forEach.call(this.element, function(element) {
          element.removeEventListener(event, callback, false);
        });
      };

      DOM.prototype.getElements = function getElements(element) {
        return document.querySelectorAll(element);
      };

      DOM.prototype.substituteElements = function substituteElements(newElement, oldElement) {
        return oldElement.replaceWith(newElement);
      };

      DOM.prototype.get = function get(index){
        if (!index)
          return this.element[0];
        return this.element[index];
      };

      DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.element, arguments);
      };

      DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
      };

      DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
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

      DOM.prototype.getObjType = function getObjType(obj) {
        return Object.prototype.toString.call(obj);
      };

      DOM.prototype.isObjectOfGivenType = function isObjectOfGivenType(obj, typeExpected) {
        return this.getObjType(obj) === '[object '+typeExpected+']';
      }


    window.DOM = DOM;
})(window, document);
