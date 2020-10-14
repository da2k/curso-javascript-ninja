( function( win, doc ) {
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

    var $input = doc.querySelector( '[data-js="input"]' );
    var $numbers = doc.querySelectorAll( '[data-js="numbers"]' );
    var $operations = doc.querySelectorAll( '[data-js="operations"]' );
    var $CE = doc.querySelector( '[data-js="CE"]' );
    var $equals = doc.querySelector( '[data-js="equals"]' );

    Array.prototype.forEach.call( $numbers, function( elem ) {
        elem.addEventListener( 'click', handleClickNumber, false );         
    } );

    Array.prototype.forEach.call( $operations, function( elem ) {
        elem.addEventListener( 'click', handleClickOperation, false );
    } );

    $CE.addEventListener( 'click', handleClickCE, false );
    $equals.addEventListener( 'click', handleClickEquals, false );

    var equal = false;

    var operation = {
        '+': function() {
                return function( value1, value2 ) {
                    return value1 + value2;
                }
        },

        '-': function() {
                return function( value1, value2 ) {
                    return value1 - value2;
                }
        },

        'x': function() {
                return function( value1, value2 ) {
                    return value1 * value2;
                }
            },
            
        '/': function() {
            return function( value1, value2 ) {
                return value1 / value2;
            }
        }
    }        

    function handleClickNumber() {
        if ( $input.value == 0 || equal ) {            
            equal = false;

            $input.value = this.value;

            return;
        }

        $input.value += this.value;
    }

    function handleClickOperation() {
        if ( hasSymbolEnd( $input.value ) ) {
            $input.value = $input.value.replace( /\D$/, this.value );
    
            return; 
        }

        equal = false;
        $input.value += this.value;
    }

    function handleClickCE() {
        $input.value = 0;    
    }

    function handleClickEquals() {
        var regexOperacao = /(\D)(\d+)/g;            
        var match;

        var result =  Number( $input.value.match( /^\d+/ ) );
        var calc;

        while ( ( match = regexOperacao.exec( $input.value ) ) !== null ) {
            calc = operation[ match[ 1 ] ]();
            result = calc( result, Number( match[ 2 ] ) );
        }

        $input.value = result;

        equal = true;
    }

    function hasSymbolEnd( value ) {
        var symbol = /\D$/;

        return symbol.test( value );
    }
} )( window, document );