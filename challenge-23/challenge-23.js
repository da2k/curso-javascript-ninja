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

    // Selecionando elementos HTML
    const $screen = doc.querySelector('[data-js="screen"]');
    const $numbers = doc.querySelectorAll('[data-js="numbers"]');
    const $buttonCE = doc.querySelector('[data-js="clean"]');
    const $operation = doc.querySelectorAll('[data-js="oper"]');
    const $equal = doc.querySelector('[data-js="equal"]');
   
    // Ativando função click nos botões
    Array.prototype.forEach.call($numbers, function(button){
        button.addEventListener('click', handleClickN, false);
    })

    // Ativando função de click nos botões de operação
    Array.prototype.forEach.call($operation, function(button1){
        button1.addEventListener('click', handleClickOpe, false);
    })

    // Ativando função de click no botão CE
    $buttonCE.addEventListener('click', cleanScreen, false);

    // Ativando função de click no botão IGUAL
    $equal.addEventListener('click', equalFunction, false);

    //Criando função para EventListener, atribuir os números dos botões na tela da calculadora.
    function handleClickN(event) {
        $screen.value += this.value;
    }

    // Criando função para apagar os dados na tela
    function cleanScreen (event) {
        $screen.value = 0;
    }

    //Criando função para EventListener dos botões de operação
    function handleClickOpe(event) {
        $screen.value = removeLastItemIfItIsAnOperator($screen.value);
        $screen.value += this.value;
    }

    // Não deixa os operadores se repetir.
    function isLastItemAnOperation(number) {
        const operations = ['+', '-', 'x', '÷'];
        const lastItem = number.split('').pop();
        return operations.some(function(operator){
            return operator === lastItem;
        })
    }

    //Se o último item for operador, é removido.
    function removeLastItemIfItIsAnOperator(number){
        if(isLastItemAnOperation(number)) {
            return number = $screen.value.slice(0, -1);
        }
        return number;
    }

    //Função para o IGUAL
    function equalFunction() {
        $screen.value = removeLastItemIfItIsAnOperator($screen.value);
        const allValues = $screen.value.match(/\d+[+x÷-]?/g);
        $screen.value = allValues.reduce(function(accumulated, actualValue){
            const firstValue = accumulated.slice(0, -1);
            const operator = accumulated.split('').pop();
            const lastValue = removeLastItemIfItIsAnOperator(actualValue);
            const lastOperator = isLastItemAnOperation(actualValue) ? actualValue.split('').pop() : '';
            switch(operator) {
                case '+':
                    return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
                    break;
                case '-':
                    return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
                    break;
                case 'x':
                    return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
                    break;
                case '÷':
                    return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
                    break;
            }
        });
    }

}(window, document))