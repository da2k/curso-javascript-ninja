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
  
  const $resultField = doc.querySelector('[data-js="resultField"]');
  const $number = doc.querySelectorAll('[data-js="number"]');
  const $ceButton = doc.querySelector('[data-js="ceButton"]');
  const $operationButton = doc.querySelectorAll('[data-js="operationButton"]');
  const $resultButton = doc.querySelector('[data-js="resultButton"]');

  Array.prototype.forEach.call($number, function(button) {
    button.addEventListener('click', clickNumber, false);
  });

  Array.prototype.forEach.call($operationButton, function(button){
    button.addEventListener('click', clickOperation, false);
  })

  $ceButton.addEventListener('click', clickCe, false);
  $resultButton.addEventListener('click', clickEqual, false);

  function clickNumber(event) {
    $resultField.value += this.value;
  }

  function clickCe(event) {
    $resultField.value = 0;
  }

  function clickOperation(event) {
    $resultField.value =  removeLastOperator($resultField.value);
    $resultField.value += this.value;
  }

  function lastItemOperation(number) {
    const operations = ['+', '-', 'x', '÷'];
    const lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
    console.log(lastItem);
  }

  function removeLastOperator(number) {
    if(lastItemOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function clickEqual() {
    $resultField.value = removeLastOperator($resultField.value);
    const allValues = $resultField.value.match(/\d+[+x÷-]?/g);
    $resultField.value = allValues.reduce(function(accumulated, actual) {
      const firstValue = accumulated.slice(0, -1);
      const operator = accumulated.split('').pop();
      const lastValue = removeLastOperator(actual);
      const lastOperator = lastItemOperation(actual) ? actual.split('').pop() : false; 
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
    });
  }
})(window, document);