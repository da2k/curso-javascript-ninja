(function( window ){

  function DOM( selector ) {
    this.element = document.querySelectorAll( selector );
  }

  DOM.prototype = {

    on: function( eventType, callback ) {
      Array.prototype.forEach.call( this.element, function( item, index ) {
        return item.addEventListener( eventType, callback, null );
      });
    },

    off: function( eventType ) {
      Array.prototype.forEach.call( this.element, function( item, index ) {
        return item.removeEventListener( eventType );
      });
    },

    get: function() {
      return this.element;
    },

    forEach: function() {
      return Array.prototype.forEach.apply( this.element, arguments );
    },

    map: function() {
      return Array.prototype.map.apply( this.element, arguments );
    },

    filter: function() {
      return Array.prototype.filter.apply( this.element, arguments );
    },

    reduce: function() {
      return Array.prototype.reduce.apply( this.element, arguments );
    },

    reduceRight: function() {
      return Array.prototype.filterRight.apply( this.element, arguments );
    },

    every: function() {
      return Array.prototype.every.apply( this.element, arguments );
    },

    some: function() {
      return Array.prototype.some.apply( this.element, arguments );
    }
  }

  DOM.isArray = function( obj ) {
    return DOM.getType( obj ) === '[object Array]';
  };

  DOM.isObject = function( obj ) {
    return DOM.getType( obj ) === '[object Object]';
  };

  DOM.isFunction = function( obj ) {
    return DOM.getType( obj ) === '[object Function]';
  };

  DOM.isNumber = function( obj ) {
    return DOM.getType( obj ) === '[object Number]';
  };

  DOM.isString = function( obj ) {
    return DOM.getType( obj ) === '[object String]';
  };

  DOM.isBoolean = function( obj ) {
    return DOM.getType( obj ) === '[object Boolean]';
  };

  DOM.isNull = function( obj ) {
    return DOM.getType( obj ) === '[object Null]' || DOM.getType( obj ) === '[object Undefined]';
  };

  DOM.getType = function( obj ) {
    return Object.prototype.toString.call( obj );
  };

  window.DOM = DOM;

}( window ));
