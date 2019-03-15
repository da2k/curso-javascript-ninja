(function(window , document ){

  function DOM( str ){
    this.element = document.querySelectorAll( str );
  }

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

  DOM.prototype.get = function(){
    return this.element;
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

  DOM.prototype.isArray = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Array]';
  };

  DOM.prototype.isObject = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Object]';
  };

  DOM.prototype.isFunction = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Function]';
  };

  DOM.prototype.isNumber = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Number]';
  };

  DOM.prototype.isString = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object String]';
  };

  DOM.prototype.isBoolean = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Boolean]';
  };

  DOM.prototype.isNull = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Null]' || Object.prototype.toString.call( obj ) === '[object Undefined]';
  };

  window.DOM = DOM;

})( window , document );
