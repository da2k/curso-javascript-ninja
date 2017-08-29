(function(document, window){
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

    var $inputCalc = document.querySelector('[data-js="inputCalc"]');
    var $buttonsNum = document.querySelectorAll('[data-js="num"]');
    var $buttonsOperation = document.querySelectorAll('[data-js="btnOperation"]');
    var $buttonCE = document.querySelector('[data-js="btnCE"]');
    var $buttonResult = document.querySelector('[data-js="btnResult"]');

    // ação de clique nos botões de números
    Array.prototype.forEach.call($buttonsNum, function(btn){
        btn.addEventListener('click', clickNum, false);
    });

    // ação de clique nos botões de operações
    Array.prototype.forEach.call($buttonsOperation, function(btn){
        btn.addEventListener('click', clickOperation, false);
    });

    // ação de zerar input
    $buttonCE.addEventListener('click', clickCE, false);

    // ação calcular
    $buttonResult.addEventListener('click', clickResult, false);
    
    function clickNum(event){
        $inputCalc.value = ($inputCalc.value === '0' ? this.value : $inputCalc.value + this.value);
    }

    function clickOperation(event){
        if($inputCalc.value.search(/[\D]$/) === -1){
            $inputCalc.value += this.value;
        }else{
            $inputCalc.value = $inputCalc.value.replace(/[\D]$/, this.value);
        }        
    }

    function clickCE(event){
        $inputCalc.value = 0;
    }

    function clickResult(event){
        limpaUltimoOperador();
        fazCalculo();
    }

    function limpaUltimoOperador(){
        $inputCalc.value = $inputCalc.value.replace(/\D$/, '');
    }

    function fazCalculo(){
        var arrTudo = $inputCalc.value.replace(/(\D)/g, ',$1').split(',');

       $inputCalc.value = arrTudo.reduce(function(previous, current){
           var operador = current.split('').shift();
           var current = current.replace(/^\D/, '');
           switch(operador){
                case '+':
                    return Number(previous) + Number(current);
                    break;
                case '-':
                    return Number(previous) - Number(current);
                    break;
                case 'x':
                    return Number(previous) * Number(current);
                    break;
                case '÷':
                    return Number(previous) / Number(current);
                    break;
           }
       });

    }



})(document, window);