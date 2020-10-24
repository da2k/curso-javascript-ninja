( function( win, doc ) {
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

    function DOM( selector ) {
        this.element = doc.querySelectorAll( selector );
    }

    DOM.prototype.on = function( eventType, callback ) {
        this.forEach( function( elem ) {
            elem.addEventListener( eventType, callback, false );
        } );
    };

    DOM.prototype.off = function( eventType, callback ) {
        this.forEach( function( elem ) {
            elem.removeEventListener( eventType, callback, false );
        } );
    };
    
    DOM.prototype.get = function() {
        return this.element;
    };

    [ 'forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some' ].forEach( function( fn ) {
        DOM.prototype[fn] = function( callback ) {
            return Array.prototype[fn].call( this.element, callback );
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

    var $a = new DOM( 'a' );
    $a.on( 'click', function handlerClick() {
        console.log('clicou');

        $a.off( 'click', handlerClick );
    } );


    var result = $a.filter( function( elem ) {
        return /link/gi.test( elem.textContent );
    } );

    console.log( result );

    console.log( DOM.isArray( [ 1, 2, 3 ] ) );
    console.log( DOM.isFunction( function() {} ) );
    console.log( DOM.isNumber( '100' ) );
    console.log( DOM.isNumber( 100 ) );
    console.log( DOM.isObject( { name: 'Wellington', age: 38 } ) );
    console.log( DOM.isNull( 'null' ) );
    
} )( window, document );






















