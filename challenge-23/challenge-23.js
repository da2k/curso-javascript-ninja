(function(win, doc){
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
    var input = 0;
    var $display = doc.querySelector( '[data-js="display"]' );
    var $zero    = doc.querySelector( '[data-js="zero"]' );
    var $one     = doc.querySelector( '[data-js="one"]' );
    var $two     = doc.querySelector( '[ data-js ="two"]' );
    var $three   = doc.querySelector( '[data-js="three"]' );
    var $four    = doc.querySelector( '[data-js="four"]' );
    var $five    = doc.querySelector( '[data-js="five"]' );
    var $six     = doc.querySelector( '[data-js="six"]' );
    var $seven   = doc.querySelector( '[data-js="seven"]' );
    var $eight   = doc.querySelector( '[data-js="eight"]' );
    var $nine    = doc.querySelector( '[data-js="nine"]' );
    var $div     = doc.querySelector( '[data-js="div"]' );
    var $mult    = doc.querySelector( '[data-js="mult"]' );
    var $sub     = doc.querySelector( '[data-js="sub"]' );
    var $add     = doc.querySelector( '[data-js="add"]' );
    var $ce      = doc.querySelector( '[data-js="CE"]' );
    var $equals  = doc.querySelector( '[data-js="equals"]' );

    var displayArray = [];
    $display.value = displayArray

    function updateDisplay( arr ){
        var str = displayArray.toString().replace(',', '');//.match(/\d+([\*\/+-])?\d+([\*\/+-])?/g);
        $display.value = str;
    }

    function checkOperator( display, operator ){
        var last = display[display.length-1];
        console.log(last, display);  
        if( last === '/' || last === '+' || last === '-' || last === '*'){
            
            display.pop();
            updateDisplay(display);
        }
    }
    
    var num = [];
    var op = [];
    var calcArray = num.concat(op);

    function insertDisplay( digito ){
        displayArray.push(digito);
        $display.value += digito;
    }
   
    $zero.addEventListener( 'click', function(event){
        insertDisplay($zero.value);
    } );

    $one.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($one.value);
    });

    $two.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($two.value);
    });

    $three.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($three.value);
    });

    $four.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($four.value);
    });

    $five.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($five.value);
    });

    $six.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($six.value);
    });

    $seven.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($seven.value);
    });

    $eight.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($eight.value);
    });

    $nine.addEventListener( 'click', function(event){
        event.preventDefault();
        insertDisplay($nine.value);
    });


    //ADD AND CHECK OPERATOR
    $div.addEventListener( 'click', function(event){
        event.preventDefault();
        checkOperator( displayArray, '/' );
        insertDisplay($div.value);
        op.push($div.value);
        
        
        
    });

    $mult.addEventListener( 'click', function(event){
        event.preventDefault();
        checkOperator( displayArray, '*' );
        insertDisplay($mult.value);
        op.push($mult.value);
        
    });

    $sub.addEventListener( 'click', function(event){
        event.preventDefault();
        checkOperator( displayArray, '-' );
        insertDisplay($sub.value);
        op.push($sub.value);
        
        
    });

    $add.addEventListener( 'click', function(event){
        event.preventDefault();
        checkOperator( displayArray, '+' );
        insertDisplay($add.value);
        op.push($add.value);
        
    });

    //CLEAR THE INPUT
    $ce.addEventListener( 'click', function(event){
        event.preventDefault();
        displayArray = [];
        $display.value = displayArray;
        console.log(displayArray);
       
    });

    
    // EXECUTE CALCULATIONS
    $equals.addEventListener( 'click', function(event){
        var resultado = $display.value.replace(/[^-()\d/*+.]/g, '');
        $display.value = eval(resultado);
        displayArray = [];       
    });
    

}(window, document));

