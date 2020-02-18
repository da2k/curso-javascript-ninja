(function(win, doc){
    'use strict'
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

    var input = doc.querySelector('[data-js="input"]')
    var botão = doc.querySelectorAll('[data-js="button"]')
    var igual = doc.querySelector('[data-js="igual"]')
    var ce = doc.querySelector('[data-js="ce"]')
    var botãoOp = doc.querySelectorAll('[data-js="buttonop"]')

    // Insere números
    Array.prototype.forEach.call(botão, function(button){
        button.addEventListener('click', handleClick)
    })

    function handleClick(){
        input.value += this.value
    }
    
    // Função resetar valores
    ce.addEventListener('click', restart)
    function restart(){
        input.value = 0
    }

    // Função Resultado
    igual.addEventListener('click', resultado)
    function resultado(){
        input.value = removeLastItemIfItIsAnOperator(input.value)
        var allValues = input.value.match(/\d+[+x%/-]?/g)
        var result = allValues.reduce(function(accumulated, actual){
            var firstValue = accumulated.slice(0, -1)
            var operator = accumulated.split('').pop()
            var lastValue = removeLastItemIfItIsAnOperator(actual) 
            var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : false
            switch(operator){
                case '+':
                    return ( Number(firstValue) + Number(lastValue) ) + lastOperator
                case '-':
                    return ( Number(firstValue) - Number(lastValue) ) + lastOperator
                case 'x':
                    return ( Number(firstValue) * Number(lastValue) ) + lastOperator
                case '/':
                    return ( Number(firstValue) / Number(lastValue) ) + lastOperator
                case '%':
                    return ( Number(firstValue) % Number(lastValue) ) + lastOperator
            }
        })
        input.value = result
    }
    

    // Insere operadores
    Array.prototype.forEach.call(botãoOp, function(button){
        button.addEventListener('click', opera)
    })
    
    function opera(){
        input.value = removeLastItemIfItIsAnOperator(input.value)
        input.value += this.value
    }

    function removeLastItemIfItIsAnOperator(number){
        if(isLastItemAnOperation(number)){
            return number.slice(0, -1)
        }
        return number
    }

    function isLastItemAnOperation(number){
        var operadores = ['+', '-', 'x', '/', '%']
        var lastItem = number.split('').pop()
        return operadores.some(function(operator){
            return operator === lastItem
        })
    }


})(window, document)
