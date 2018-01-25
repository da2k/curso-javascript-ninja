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
    const h1 = document.querySelector('.result-child');
    const buttonNumbers = document.querySelectorAll('.numbers');
    const buttonOperations = document.querySelectorAll('.button-operation');
    const clearButton = document.querySelector('.clear-child');
    const equalButton = document.querySelector('.equal');

    clearButton.addEventListener('click', handleClickClear, false);
    equalButton.addEventListener('click', handleClickEqual, false);

    Array.prototype.forEach.call(buttonNumbers, (button) => {
        button.addEventListener('click', handleClickNumber, false);
    });

    Array.prototype.forEach.call(buttonOperations, (button) => {
        button.addEventListener('click', handleClickOperation, false);
    });

    function handleClickNumber() {
        h1.innerHTML += ' ' + this.value;
    }

    function handleClickOperation() {
        h1.innerHTML = removeLastItemIfItIsOperator(h1.innerHTML);
        h1.innerHTML += ' ' + this.value;
    }

    function handleClickClear() {
        h1.innerHTML = 0;
    }

    function handleClickEqual() {
        h1.innerHTML = removeLastItemIfItIsOperator(h1.innerHTML);
        let allValues = h1.innerHTML.match(/\d+[x+*/]?/g);

        let result = allValues.reduce((accumulated, actual) => {
            var firstValue = accumulated.slice(0, -1);
            var operator = accumulated.split('').pop();
            var lastValue = removeLastItemIfItIsOperator(actual);
            var lastOperator = isLastItemAnOperator(actual) ? actual.split('').pop() : false;

            switch(operator) {
                case '+':
                    return Number(firstValue) + Number(lastValue);
                case '-':
                    return Number(firstValue) + Number(lastValue);
                case '*':
                    return Number(firstValue) * Number(lastValue);
                case '/':
                    return Number(firstValue) / Number(lastValue);
            }
        });
        h1.innerHTML = result;
    }

    function isLastItemAnOperator(number) {
        let operations = ['+', '-', '*', '/'];
        let lastItem = number.split('').pop();

        return operations.some((operator) => operator == lastItem);
    }

    function removeLastItemIfItIsOperator(number) {
        if(isLastItemAnOperator(number)) {
            return number.slice(0, -1);
        }
        return number;
    }
