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

    var $displayCalc = doc.querySelector('[data-js="displayCalc"]');
    var $clearCalc = doc.querySelector('[data-js="clearCalc"]');
    var $number1 = doc.querySelector('[data-js="number1"]');
    var $number2 = doc.querySelector('[data-js="number2"]');
    var $number3 = doc.querySelector('[data-js="number3"]');
    var $number4 = doc.querySelector('[data-js="number4"]');
    var $number5 = doc.querySelector('[data-js="number5"]');
    var $number6 = doc.querySelector('[data-js="number6"]');
    var $number7 = doc.querySelector('[data-js="number7"]');
    var $number8 = doc.querySelector('[data-js="number8"]');
    var $number9 = doc.querySelector('[data-js="number9"]');
    var $number0 = doc.querySelector('[data-js="number0"]');
    var $opSum = doc.querySelector('[data-js="opSum"]');
    var $opSub = doc.querySelector('[data-js="opSub"]');
    var $opMul = doc.querySelector('[data-js="opMul"]');
    var $opDiv = doc.querySelector('[data-js="opDiv"]');
    var $point = doc.querySelector('[data-js="point"]');
    var $calculator = doc.querySelector('[data-js="calculator"]');

    function insertNumber(inputNumber) {
        if ($displayCalc.value === '0')
            $displayCalc.value = '';
        if (!/[+\-\/*]0$/.test($displayCalc.value))
            return $displayCalc.value += inputNumber;
    }

    function isLastOperator(){
        if (/[+\-\/*]$/.test($displayCalc.value))
            $displayCalc.value = $displayCalc.value.replace(/[+-/*]$/, '');
    }

    function insertOperator(inputOperator){
        isLastOperator();
        return $displayCalc.value += inputOperator;
    }

    function inserPoint(){
         if (!/\.$/.test($displayCalc.value)){
          if (/[+\-\/*]$/.test($displayCalc.value)) {
            $displayCalc.value += '0.';
          } else if (!/\d+\.(?:\d+)?$/.test($displayCalc.value)){
              return $displayCalc.value += '.';
            }
         }
    }

    function letsCalc(){
        isLastOperator();
        return $displayCalc.value = eval($displayCalc.value);
    }

    $clearCalc.addEventListener('click', function(){
        return $displayCalc.value = '0';
    }, false);

    $number1.addEventListener('click', function(){insertNumber('1');} , false);
    $number2.addEventListener('click', function(){insertNumber('2');} , false);
    $number3.addEventListener('click', function(){insertNumber('3');} , false);
    $number4.addEventListener('click', function(){insertNumber('4');} , false);
    $number5.addEventListener('click', function(){insertNumber('5');} , false);
    $number6.addEventListener('click', function(){insertNumber('6');} , false);
    $number7.addEventListener('click', function(){insertNumber('7');} , false);
    $number8.addEventListener('click', function(){insertNumber('8');} , false);
    $number9.addEventListener('click', function(){insertNumber('9');} , false);
    $number0.addEventListener('click', function(){insertNumber('0');} , false);

    $opSum.addEventListener('click', function(){insertOperator('+');} , false);
    $opSub.addEventListener('click', function(){insertOperator('-');} , false);
    $opMul.addEventListener('click', function(){insertOperator('*');} , false);
    $opDiv.addEventListener('click', function(){insertOperator('/');} , false);

    $point.addEventListener('click', inserPoint , false);

    $calculator.addEventListener('click', letsCalc , false);

})(window,document);
