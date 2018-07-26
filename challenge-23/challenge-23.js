(function(win, doc) {
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
    var $visor = doc.querySelector('[data-js="calcInput"]');
    var $buttonNumber = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonOperation = doc.querySelectorAll('[data-js="operation"]');
    var $buttonCE = doc.querySelector('[data-id="button-ce"]');

    Array.prototype.forEach.call($buttonNumber, function(button) {
        button.addEventListener('click', hundleClickButton, false);
    }, false);

    Array.prototype.forEach.call($buttonOperation, function(operation) {
        operation.addEventListener('click', hundleClickOperation, false);
    });

    $buttonCE.addEventListener('click', hundleClickCE, false);

    //coloca os numeros no visor
    function hundleClickButton() {
        $visor.value += this.value;
    }

    function hundleClickCE() {
        $visor.value = 0;
    }

    //coloca os operadores no visor
    function hundleClickOperation() {
        $visor.value += this.value;
    }






})(window, document);