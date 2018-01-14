( function( win, doc ) {
  'use strict';

  function DOM( query ) {
    if( !( this instanceof DOM ) ) return new DOM( query );
    this.element = doc.querySelectorAll( query );
  }

  DOM.isArray = function isArray( object ) {
    return Object.prototype.toString.call( object ) === '[object Array]';
  }

  DOM.isFunction = function isFunction( object ) {
    return Object.prototype.toString.call( object ) === '[object Function]';
  }

  DOM.isNumber = function isNumber( object ) {
    return Object.prototype.toString.call( object ) === '[object Number]';
  }

  DOM.isString = function isString( object ) {
    return Object.prototype.toString.call( object ) === '[object String]';
  }

  DOM.isBoolean = function isBoolean( object ) {
    return Object.prototype.toString.call( object ) === '[object Boolean]';
  }

  DOM.isNull = function isNull( object ) {
    return
      Object.prototype.toString( object ) === '[object Null]' ||
      Object.prototype.toString( object ) === '[object Undefined]';
  }

  DOM.prototype.on = function on( eventName, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.addEventListener( eventName, callback, false );
    } );
  }

  DOM.prototype.off = function off( eventName, callback ) {
    Array.prototype.forEach.call( this.element, function( element ) {
      element.removeEventListener( eventName, callback, false );
    } );
  }

  DOM.prototype.get = function get( index ) {
    if( !index ) return this.element[ 0 ];
    return this.element[ index ];
  }

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply( this.element, arguments );
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply( this.element, arguments );
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

  win.DOM = DOM;
}( window, document ) );
