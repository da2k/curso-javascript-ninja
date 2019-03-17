(function(window , document ){

  function DOM( str ){
    if(!(this instanceof DOM))
      return new DOM( str );

    this.element = document.querySelectorAll( str );
  }

   DOM.isArray = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Array]';
  };

  DOM.isObject = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Object]';
  };

  DOM.isFunction = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Function]';
  };

  DOM.isNumber = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Number]';
  };

  DOM.isString = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object String]';
  };

  DOM.isBoolean = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Boolean]';
  };

  DOM.isNull = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Null]' || Object.prototype.toString.call( obj ) === '[object Undefined]';
  };

  DOM.prototype.on = function( event , callback ){
    Array.prototype.forEach.call( this.element, function( element ){
      element.addEventListener( event , callback, false );
    } );
  };

  DOM.prototype.off = function( event , callback  ){
    Array.prototype.forEach.call( this.element, function( element ){
      element.removeEventListener( event, callback );
    });
  };

  DOM.prototype.get = function(index){
    if(!index)
      return this.element[0];
    return this.element[index];
  };

  DOM.prototype.forEach = function(){
    return Array.prototype.forEach.apply( this.element, arguments );
  };

  DOM.prototype.map = function(){
    return Array.prototype.map.apply( this.element, arguments );
  };

  DOM.prototype.filter = function(){
    return Array.prototype.filter.apply( this.element, arguments );
  };

  DOM.prototype.reduce = function(){
    return Array.prototype.reduce.apply( this.element, arguments );
  };

  DOM.prototype.reduceRight = function(){
    return Array.prototype.reduceRight.apply( this.element, arguments );
  };

  DOM.prototype.every = function(){
    return Array.prototype.every.apply( this.element, arguments );
  };

  DOM.prototype.some = function(){
    return Array.prototype.some.apply( this.element, arguments );
  };



  window.DOM = DOM;

})( window , document );
