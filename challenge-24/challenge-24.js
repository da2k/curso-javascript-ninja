(function ( win , doc ) {
  'use strict';
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  var $view = doc.querySelector( '[data-js="view"]' );
  var $clear = doc.querySelector( '[data-js="ce"]' );
  var $totalButton = doc.querySelector( '[data-js="total"]' );
  var $buttonNumbers = doc.querySelectorAll( '[data-id="button-number"]' );
  var $buttonOperations = doc.querySelectorAll( '[data-id="button-operation"]' )
  var verifyOperators = /[+\-\/x]$/
  var isNumber = /\d+/;
  var mainExpression = [];
  var subExpression = [];
  
  function initialize () {
    initializeEvents()
  }

  function initializeEvents () {
    Array.prototype.forEach.call( $buttonNumbers , handleNumbers );
    Array.prototype.forEach.call( $buttonOperations , handleOperations );
    $clear.addEventListener( 'click' , handleClear , false );
    $totalButton.addEventListener( 'click' , handleTotal , false );
  }

  function handleNumbers ( item ) {
    item.addEventListener( 'click' , function () {
      $view.value = $view.value === '0' ? item.value : $view.value + item.value;
    }, false );
  }

  function handleOperations ( item ) {
    item.addEventListener( 'click' , function () {
      $view.value = handleValidateEndOfExpression( item.value );
    }, false );
  }

  function handleValidateEndOfExpression ( substitute ) {
    return verifyOperators.test($view.value) ?
      $view.value.replace( verifyOperators , substitute ) :
      $view.value + substitute
  }

  function handleClear () {
    $view.value = '0';
  }

  function handleTotal () {
    var mainExpression = reduceToFinalExpression();
    var total;

    if( !validateFullExpression() )
      return false;

    total = mainExpression.length === 1 ? String( mainExpression[0].toFixed(0) ) : 0;

    if ( mainExpression.length >= 3 ) {
      for ( var i = 2, j = 1; i < mainExpression.length; i += 2, j += 2 ) {
        if ( total === 0 ) {
          total = getMathOperation(mainExpression[ j ])( mainExpression[ total ], mainExpression[ i ] );
          continue;
        }
        total = getMathOperation(mainExpression[ j ])( total , mainExpression[ i ] );
      }
    }

    $view.value = typeof total !== 'string' ? String( total.toFixed(0) ) : total;
  }

  function getMathOperation(operation) {
    var operator = {
      '+' : function(value1, value2) { return value1 + value2 },
      '-' : function(value1, value2) { return value1 - value2 },
      '/' : function(value1, value2) { return value1 / value2 },
      'x' : function(value1, value2) { return value1 * value2 },
    };

    return operator[operation];
  }

  function reduceToFinalExpression () {
    var mainExpression = handleExpression();

    mainExpression = mainExpression.map( function ( item ) {
      if ( Array.isArray( item ) ) {
        for (var i = 2, j = 1, k = 0; i < item.length; i += 2, j += 2 ) {
          if( k === 0 ){
            k = getMathOperation( item[j] )( item[k] , item[i] );
            continue;
          }
          k = getMathOperation( item[j] )( k , item[i] )
        }
        return k;
      }
      return item;
    } )

    return mainExpression;
  }

  function handleExpression () {
    var selectItems = /(\d+[x/]\d+(?:[x/]\d+)*)|(\d+|[\+\-])/g;

    $view.value.replace( selectItems , mountSentence );
    return mainExpression;
  }

  function mountSentence ( fullMatch , expression , item ) {
    if ( expression ) {
      expression.replace( /(\d+|[x/])/g , separeteNumbersFromOperators );
      mainExpression.push( subExpression );
      subExpression = [];
    }

    if ( item ) {
      isNumber.test(item) ?
        mainExpression.push( Number( item ) ) :
        mainExpression.push( item );
    }
  }

  function separeteNumbersFromOperators ( subItem ) {
    return isNumber.test(subItem) ?
      subExpression.push( Number( subItem ) ) :
      subExpression.push( subItem );
  }

  function validateFullExpression () {
    var validate = /^\d[\dx\-+\/]*\d$/;
    var divideFromZero = /\d+\/0/g;

    $view.value = handleValidateEndOfExpression('');

    if ( !validate.test($view.value) || divideFromZero.test($view.value) ) {
      alert('Informe valores válidos para cálculo');
      handleClear();
      return false;
    }

    return true;
  }

  initialize();

} ) ( window , document );
