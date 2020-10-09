( function ( win , doc ) {
  'use strict';

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $view = doc.querySelector( '[data-js="view"]' );
  var $clear = doc.querySelector( '[data-js="ce"]' );
  var $totalButton = doc.querySelector( '[data-js="total"]' );
  var $buttonNumbers = doc.querySelectorAll( '[data-id="button-number"]' );
  var $buttonOperations = doc.querySelectorAll( '[data-id="button-operation"]' )
  var verifyOperators = /[+\-\/x]$/
  var calculator = [];
  var subCalculator = [];
  var isNumber = /\d+/;

  Array.prototype.forEach.call( $buttonNumbers , handleNumbers );
  Array.prototype.forEach.call( $buttonOperations , handleOperations );
  $clear.addEventListener( 'click' , handleClear , false );
  $totalButton.addEventListener( 'click' , handleTotal , false );

  function handleNumbers ( item ) {
    item.addEventListener( 'click' , function () {
      $view.value = $view.value === '0' ? item.value : $view.value + item.value;

    }, false );
  }

  function handleOperations ( item ) {

    item.addEventListener( 'click' , function () {
      $view.value = verifyOperators.test($view.value) ?
        $view.value.replace( verifyOperators , item.value ) : $view.value + item.value;
    }, false );

  }

  function handleClear () {
    $view.value = '0';
  }

  function handleTotal () {
    var validate = /^\d[\dx\-+\/]*\d$/;
    var selectItems = /(\d+[x/]\d+(?:[x/]\d+)*)|(\d+|[\+\-])/g
    var operator = {
      '+' : function(value1, value2) { return value1 + value2 },
      '-' : function(value1, value2) { return value1 - value2 },
      '/' : function(value1, value2) { return value1 / value2 },
      'x' : function(value1, value2) { return value1 * value2 },
    };

    calculator = [];

    if ( !validate.test($view.value) )
      return;      

    $view.value.replace( selectItems , function(fullMatch , expression , item) {
      
      if ( expression ) {        
        expression.replace( /(\d+|[x/])/g ,
        function ( otherItem ) {
          return isNumber.test(otherItem) ?
            subCalculator.push( Number( otherItem ) ) :
            subCalculator.push( otherItem );
        } );

        calculator.push( subCalculator );

        subCalculator = [];      
      }

      if ( item )
        isNumber.test(item) ? calculator.push( Number( item ) ) : calculator.push( item );
    } );

    calculator = calculator.map( function ( item ) {

      if ( Array.isArray( item ) ) {      
        
        for (var i = 2, j = 1, k = 0; i < item.length; i += 2, j += 2 ) {

          if( k === 0 ){
            k = operator[ item[j] ]( item[k] , item[i] );
            continue;
          }

          k = operator[ item[j] ]( k , item[i] )

        }

        return k;

      }

      return item;

    } )

    var total = String( calculator[0].toFixed(0) );

    if ( calculator.length >= 3 ) {

      total = 0;

      for ( var i = 2, j = 1; i < calculator.length; i += 2, j += 2 ) {

        if ( total === 0 ) {
  
          total = operator[ calculator[ j ] ]( calculator[ total ], calculator[ i ] );
          continue;
  
        }
  
        total = operator[ calculator[ j ] ]( total , calculator[ i ] );
  
      }
    }

    typeof total !== 'string' ?
      $view.value = String( total.toFixed(0) ) :
      $view.value = total;

  }

} ) ( window , document );
