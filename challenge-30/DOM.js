(function( window ){

  function DOM( selector ) {
    if (!(this instanceof DOM)) return new DOM( selector );

    this.element = document.querySelectorAll( selector );
    if ( this.element.length === 1 )
      return this.element = document.querySelector( selector );
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

    get: function( index ) {
      if ( !DOM.isNull( +index ) && +index >= 0 )
        return this.element[ +index ];
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

  DOM.isArray = function( parameter ) {
    return DOM.getType( parameter ) === '[object Array]';
  };

  DOM.isObject = function( parameter ) {
    return DOM.getType( parameter ) === '[object Object]';
  };

  DOM.isFunction = function( parameter ) {
    return DOM.getType( parameter ) === '[object Function]';
  };

  DOM.isNumber = function( parameter ) {
    return DOM.getType( parameter ) === '[object Number]';
  };

  DOM.isString = function( parameter ) {
    return DOM.getType( parameter ) === '[object String]';
  };

  DOM.isBoolean = function( parameter ) {
    return DOM.getType( parameter ) === '[object Boolean]';
  };

  DOM.isNull = function( parameter ) {
    return DOM.getType( parameter ) === '[object Null]' || DOM.getType( parameter ) === '[object Undefined]';
  };

  DOM.getType = function( parameter ) {
    return Object.prototype.toString.call( parameter );
  };

  window.DOM = DOM;

}( window ));
