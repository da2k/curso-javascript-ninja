( function(wind , doc){

	'use strict';
 /*
 Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
 métodos semelhantes aos que existem no array, mas que sirvam para os
 elementos do DOM selecionados.
 Crie os seguintes métodos:
 - forEach, map, filter, reduce, reduceRight, every e some.

 Crie também métodos que verificam o tipo do objeto passado por parâmetro.
 Esses métodos não precisam depender de criar um novo elmento do DOM, podem
 ser métodos estáticos.

 Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
 no objeto, como nos exemplos abaixo:
 DOM.isArray([1, 2, 3]); // true
 DOM.isFunction(function() {}); // true
 DOM.isNumber('numero'); // false

 Crie os seguintes métodos para verificação de tipo:
 - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
 O método isNull deve retornar `true` se o valor for null ou undefined.
 */

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
 
 var $p = new DOM('[data-js="text"]');

 console.log( $p )

 $p.forEach( function(element){
 	 console.log(element)
 } )

 console.log( DOM.typeOfObject( 1 ) ) //=> [object Number]
 console.log( DOM.isArray([1,2,3]) ) //=>true
 console.log( DOM.isArray(1)) //=>false
 console.log( DOM.isObject({}) ) // =>true
 console.log( DOM.isFunction(()=>{})) //=> true
 console.log( DOM.isNull(null)) // => true
 console.log( DOM.isNull(undefined)) //=>true
 console.log( DOM.isNull(12)) //=>false
 
} )(window , document )