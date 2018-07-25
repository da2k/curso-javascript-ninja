(function() {
  'use strict';
   //lib DOM
   function DOM(str){
    if( !(this instanceof DOM) )
      return new DOM(str);

    this.element = document.querySelectorAll(str);
    }

   DOM.prototype.on = function on (event, callback) {
     Array.prototype.forEach.call( this.element, function(btn) {
       btn.addEventListener(event, callback, false);
     });
   }

   DOM.prototype.off = function off () {
     Array.prototype.forEach.call( this.element, function(btn) {
       btn.removeEventListener(event, callback, false);
     });
   }

   DOM.prototype.get = function get(index) {
     if(!index)
       return this.element[0];
      return this.element[index];
   }
 //fim das funções do challenge 26

   DOM.prototype.forEach = function forEach() {
     return Array.prototype.forEach.apply( this.element, arguments );
   }

   DOM.prototype.map = function map() {
     return Array.prototype.map.call( this.element, arguments );
   }

   DOM.prototype.filter = function filter() {
     return Array.prototype.filter.call( this.element, arguments );
   }

   DOM.prototype.reduce = function reduce() {
     return Array.prototype.reduce.call( this.element, arguments );
   }

   DOM.prototype.reduceRight = function reduceRight() {
     return Array.prototype.reduceRight.call( this.element, arguments );
   }

   DOM.prototype.every = function every() {
     return Array.prototype.every.call( this.element, arguments );
   }

   DOM.prototype.some = function some() {
     return Array.prototype.some.call( this.element, arguments );
   }


   function transformType(a){
     return Object.prototype.toString.call(a);
   }

   DOM.prototype.isArray = function isArray(obj){
     return transformType(obj) === '[object Array]';
   }

   DOM.prototype.isObject = function isObject(obj){
     return transformType(obj) === '[object Object]';
   }

   DOM.prototype.isFunction = function isFunction(obj){
     return transformType(obj) === '[object Function]';
   }

   DOM.prototype.isNumber = function isNumber(obj){
     return transformType(obj) === '[object Number]';
   }

   DOM.prototype.isString = function isString(obj){
     return transformType(obj) === '[object String]';
   }

   DOM.prototype.isBoolean = function isBoolean(obj){
     return transformType(obj) === '[object Boolean]';
   }

   DOM.prototype.isNull = function isNull(obj){
     return transformType(obj) === '[object Null]' || '[object Undefined]';
   }

   window.DOM = DOM;
})();