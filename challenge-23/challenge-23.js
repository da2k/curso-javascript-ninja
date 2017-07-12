(function(win, doc) {
    'user strict';


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
    var $clear = doc.querySelector('[data-js="clear"]');


    var $buttonNumbers = doc.querySelectorAll('[data-js="button-numbers"]');
    var $buttonOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $results = doc.querySelector('[data-js="results"]');



    Array.prototype.forEach.call($buttonNumbers, function(button) {
        button.addEventListener('click', concatNumber, false);
    });

    Array.prototype.forEach.call($buttonOperations, function(button) {
        button.addEventListener('click', operationNumber, false);
    })

    $results.addEventListener('click', resultSum, false);

    $clear.addEventListener('click', clearVisor, false);

    function concatNumber() {
        $visor.value += this.value;
    }

    function operationNumber() {
        $visor.value = removeLastItem($visor.value);
        $visor.value += this.value;
    }

    function isLastItemAnOperation(number) {
        var signs = ['+', '-', '/', 'x'];

        var lastItem = number.split('').pop();

        return signs.some(function(operator) {
            return operator === lastItem;
        });
    }

    function removeLastItem(number) {
        if (isLastItemAnOperation(number)) {
            return number.slice(0, -1);
        }

        return number;
    }


    function resultSum() {
        $visor.value = removeLastItem($visor.value);
        var allValues = $visor.value.match(/\d+[+x/-]?/g);
        $visor.value = allValues.reduce(function(prev, curr) {

            var firstValue = prev.slice(0, -1);
            var operator = prev.split('').pop();
            var lastValue = removeLastItem(curr);
            var lastOperator = isLastItemAnOperation(curr) ? curr.split('').pop() : '';

            console.log('soy jo', firstValue)
            console.log('soy ope', operator);
            console.log('soy actual', lastValue);


            switch (operator) {
                case '+':
                    return ( Number(firstValue) + Number(lastValue) ) + lastOperator;

                case '-':
                    return ( Number(firstValue) - Number(lastValue) ) + lastOperator;

                case '/':
                    return ( Number(firstValue) / Number(lastValue) ) + lastOperator;

                case 'x':
                    return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
            }
        });

    }

    function clearVisor(){
        $visor.value = 0;
    }




})(window, document);
