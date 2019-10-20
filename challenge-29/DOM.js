( function(wind , doc){

 'use strict';


function DOM( noDom ){
    this.element = doc.querySelectorAll( noDom );
 };

 DOM.prototype.on  = function( event , callback ){
    this.forEach(  function( element ){
        element.addEventListener( event ,callback , false )
    } )
 };

 DOM.prototype.off = function(event ,callback){
    this.forEach(  function( element ){
       element.removeEventListener(  event ,callback , false )
    } )
 };

 DOM.prototype.get = function(){
   return this.element;
 };

 DOM.prototype.forEach = function( callback){
   return Array.prototype.forEach.call(  this.element , callback );
 };

 DOM.prototype.map = function(callback){
   return Array.prototype.map.call( this.element ,callback );
 };

 DOM.prototype.filter = function(callback){
   return Array.prototype.filter.call( this.element , callback );
 };

 DOM.prototype.reduce = function(callback){
   return Array.prototype.reduce.call( this.element ,callback );
 };

 DOM.prototype.reduceRight = function(callback){
   return Array.prototype.reduceRight.call( this.element , callback );
 };

 DOM.prototype.every = function(callback){
   return Array.prototype.every.call(this.element , callback );
 };

 DOM.prototype.some = function( callback){
   return Array.prototype.some.call(this.element , callback );
 };

 DOM.typeOfObject =  function(  object ){
   return Object.prototype.toString.call( object );
 };

 DOM.isArray = function(object){
  return (/Array/g).test( this.typeOfObject(object)  )
 };

 DOM.isObject = function(object){
   return (/Object/g).test( this.typeOfObject(object)  )
 };

 DOM.isFunction =  function(object){
  return (/Function/g).test( this.typeOfObject(object)  )
 };

 DOM.isNumber =  function( object ){
   return (/Number/g).test( this.typeOfObject(object)  )
 };

 DOM.isString =  function(object){
   return (/String/g).test( this.typeOfObject(object)  )
 };

 DOM.isBoolean = function(object){
   return (/Boolean/g).test( this.typeOfObject(object)  )
 };

 DOM.isNull = function(object){
 	return (/Null|Undefined/g).test( this.typeOfObject(object)  )
 };


 wind.DOM = DOM; 



} )( window , document )