( function (doc) {
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

  function DOM ( element ) {
    this.element = doc.querySelectorAll( element );
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

  /** exercício */
  var $a = new DOM('[data-js="link"]');
  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });


  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

  $a.forEach( function ( item ) {
    console.log( item.firstChild.nodeValue )
  } );

  $a.map( function ( item ) {
    $text = document.createTextNode('Um pouco de texto');
    $paragraph = document.createElement('p');

    $paragraph.appendChild($text);
    return item.appendChild($paragraph)
  } );

  $result = $a.map( function ( item ) {
    return item.getAttribute('data-js');
  } );

  $b = $a.filter( function ( item ) {
    return item.href === 'http://localhost:3000/';
  } );

  $reduceResult = $a.reduce( function ( acum , actual , index ) {
    return acum + ' ' + actual.getAttribute('data-js') + index;
  } , 0 );

  console.log( 'DOM.filter' , $b );
  console.log( 'DOM.reduce' , $reduceResult );
  console.log( 'DOM.map' , $result )
  console.log( 'DOM.is(null)' , DOM.is(null) );
  console.log( 'DOM.is(false)' , DOM.is(false) );
  console.log( 'DOM.isArray( [1, 2, 3] )' , DOM.isArray( [1, 2, 3] ) );
  console.log( 'DOM.isArray( "[1, 2, 3]" )' , DOM.isArray( '[1, 2, 3]' ) );
  console.log( 'DOM.isFunction( function () {} )' , DOM.isFunction( function () {} ) );
  console.log( 'DOM.isString( function () {} )' , DOM.isString( function () {} ) );
  console.log( 'DOM.isString( "3" )' , DOM.isString( '3' ) );
  console.log( 'DOM.isNumber( "3" )' , DOM.isNumber( '3' ) );
  console.log( 'DOM.isNumber( 3 )' , DOM.isNumber( 3 ) );
  console.log( 'DOM.isObject( 3 )' , DOM.isObject( 3 ) );
  console.log( 'DOM.isObject( {number: 3} )' , DOM.isObject( {number: 3} ) );
  console.log( 'DOM.isBoolean( false )' , DOM.isBoolean( false ) );
  console.log( 'DOM.isNull( null )' , DOM.isNull( null ) );
  console.log( 'DOM.isNull( undefined )' , DOM.isNull( undefined ) );
  console.log( 'DOM.isNull( 1 )' , DOM.isNull( 1 ) );
  console.log( $a.every(function( item ) {
    return item.getAttribute('data-js')
  } ) )

} )(document)
