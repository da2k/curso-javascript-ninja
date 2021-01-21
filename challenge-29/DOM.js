( function( win, doc ) {
    function DOM( selector ) {
        if ( !( this instanceof DOM ) ) {
            return new DOM( selector );
        }
        this.element = doc.querySelectorAll( selector );
    }

    DOM.prototype.on = function on( eventType, callback ) {
        this.forEach( function( elem ) {
            elem.addEventListener( eventType, callback, false );
        } );
    };

    DOM.prototype.off = function off( eventType, callback ) {
        this.forEach( function( elem ) {
            elem.removeEventListener( eventType, callback, false );
        } );
    };
    
    DOM.prototype.get = function get( index ) {
        if ( this.element.length === 1 )
            return this.element[ 0 ];
            
        return index !== undefined ? this.element[ index ] : this.element;
    };

    [ 'forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some' ].forEach( function( fn ) {
        DOM.prototype[fn] = function() {
            return Array.prototype[fn].apply( this.element, arguments );
        }
    } );

    [ 'isArray', 'isObject', 'isFunction', 'isNumber', 'isString', 'isBoolean' ].forEach( function( fn ) {
        DOM[fn] = function( arg ) {
            return Object.prototype.toString.call( arg ) === '[object ' + fn.replace('is', '') + ']';
        };
    } );

    DOM.isNull = function( arg ) {
        return Object.prototype.toString.call( arg ) === '[object Null]' || Object.prototype.toString.call( arg ) === '[object Undefined]';
    }

    win.DOM = DOM;
} ) ( window, document );