( function( win, doc ) {
  'use strict';

  function DOM( query ) {
    this.element = doc.querySelectorAll( query );
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

  DOM.prototype.get = function get() {
    return this.element;
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

  DOM.prototype.isArray = function isArray( object ) {
    return Object.prototype.toString.call( object ) === '[object Array]';
  }

  DOM.prototype.isFunction = function isFunction( object ) {
    return Object.prototype.toString.call( object ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber( object ) {
    return Object.prototype.toString.call( object ) === '[object Number]';
  }

  DOM.prototype.isString = function isString( object ) {
    return Object.prototype.toString.call( object ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean( object ) {
    return Object.prototype.toString.call( object ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull( object ) {
    return
      Object.prototype.toString( object ) === '[object Null]' ||
      Object.prototype.toString( object ) === '[object Undefined]';
  }

  win.DOM = DOM;
}( window, document ) );
