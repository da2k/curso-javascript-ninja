(function (win, doc) { 
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

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="botao-numero"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="botao-operacao"]');
    var $buttonCE = doc.querySelector('[data-js="botao-ce"]');
    var $buttonRes = doc.querySelector('[data-js="botao-res"]');

    Array.prototype.forEach.call($buttonsNumbers, function(button) {
        button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
        button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonRes.addEventListener('click', handleClickRes, false);


    function handleClickNumber(event) {
        $visor.value += this.value;
    }

    function handleClickOperation(event) {
        $visor.value = removeLastItemIfOP($visor.value);
        $visor.value += this.value;
    }
    function removeLastItemIfOP(number){
        if(isLastItemAnOperation(number))
        return number.slice(0, -1);
        return number;
    }
    function isLastItemAnOperation(number) {
        var operations = ['+', '-', 'x', '÷'];
        var lasItem = number.split('').pop();
        return operations.some(function(operator) {
            return operator === lasItem;
        })
    }

    function handleClickCE(event) {
        $visor.value = 0;
    }

    function handleClickRes(event) {
        $visor.value = removeLastItemIfOP($visor.value);
        var allValues = $visor.value.match(/\d+[+-x÷]?/g);
        $visor.value = allValues.reduce(function(acumulated, actual) {
            var firstValue = acumulated.slice(0, -1);
            var operator = acumulated.split('').pop();
            var lastValue = removeLastItemIfOP(actual);
            var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
            switch(operator) {
                case '+': 
                    return (Number(firstValue) + Number(lastValue)) + lastOperator;
                case '-': 
                    return (Number(firstValue) - Number(lastValue)) + lastOperator;
                case 'x': 
                    return (Number(firstValue) * Number(lastValue)) + lastOperator;
                case '÷': 
                    return (Number(firstValue) / Number(lastValue)) + lastOperator;
            }
            return acumulated + actual;
        });
    }


})(window, document);
