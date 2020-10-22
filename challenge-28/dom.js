(function () {
  'use strict';


  function DOM ( element ) {
    this.element = document.querySelectorAll( element );
    this.callBack;
    this.forEach = function () {
      Array.prototype.forEach.apply( this.element , arguments );
    };
    this.map = function () {
      return Array.prototype.map.apply( this.element , arguments );
    };
    this.filter = function () {
      return Array.prototype.filter.apply( this.element , arguments );
    };
    this.reduce = function () {
      return Array.prototype.reduce.apply( this.element , arguments );
    };
    this.reduceRight = function () {
      return Array.prototype.reduceRight.apply( this.element , arguments );
    };
    this.every = function () {
      return Array.prototype.every.apply( this.element, arguments );
    };
    this.some = function () {
      return Array.prototype.some.apply( this.element , arguments )
    };
  }

  DOM.prototype.on = function ( event , callBack ) {
    this.callBack = callBack;
    callBack = this.callBack;
    Array.prototype.forEach.call( this.element , function ( item ) {
      item.addEventListener( event , callBack, false )
    } );
  }

  DOM.prototype.off = function ( event , callBack ) {
    callBack = !callBack ? this.callBack : callBack
    Array.prototype.forEach.call( this.element , function ( item ) {
      item.removeEventListener( event , callBack , false )
    } );
  }

  DOM.prototype.get = function () {
    return this.element;
  }

  DOM.is = function ( obj ) {
    return Object.prototype.toString.call( obj )
      .replace(/\[(?:\w+) (\w+)\]/g, '$1').toLowerCase()
  }

  DOM.isArray = function ( obj ) {
    return DOM.is( obj ) === 'array';
  }

  DOM.isFunction = function ( obj ) {
    return DOM.is( obj ) === 'function';
  }

  DOM.isNumber = function ( obj ) {
    return DOM.is( obj ) === 'number';
  }

  DOM.isString = function ( obj ) {
    return DOM.is( obj ) === 'string';
  }

  DOM.isObject = function ( obj ) {
    return DOM.is( obj ) === 'object';
  }

  DOM.isBoolean = function ( obj ) {
    return DOM.is( obj ) === 'boolean';
  }

  DOM.isNull = function ( obj ) {
    return DOM.is( obj ) === 'null' || DOM.is( obj ) === 'undefined';
  }

  window.DOM = DOM;

})();
