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
  let $visor = doc.querySelector('[data-js="visor"]');
  let $numberButtons = doc.querySelectorAll('[data-js="button-number"]');
  let $operationButtons = doc.querySelectorAll('[data-js="button-operation"]');
  let $equalButton = doc.querySelector('[data-js="button-equal"]');
  let $ceButton = doc.querySelector('[data-js="button-ce"]');

  $numberButtons.forEach(function(button) {
      button.addEventListener('click', handleClickNumber, false);
  });
  $operationButtons.forEach(function(button) {
      button.addEventListener('click', handleClickOperation, false);
  });

  $equalButton.addEventListener('click', handleClickEqual, false);
  $ceButton.addEventListener('click', handleClickCe, false);

  function handleClickNumber() {
      $visor.value += this.value;
  }

  function handleClickOperation() {
      $visor.value = removeLastItemIfItIsAnOperation($visor.value);
      $visor.value += this.value;
  }

  function handleClickEqual() {
      $visor.value = removeLastItemIfItIsAnOperation($visor.value);
      let regex = $visor.value.match(/\d+[+x÷-]?/g);
      let result = regex.reduce(function(accumulated, actual) {
          let firstValue = removeLastItemIfItIsAnOperation(accumulated);
          let operator = accumulated.split('').pop();
          let lastValue = removeLastItemIfItIsAnOperation(actual);
          let lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
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
      $visor.value = result;
  }

  function isLastItemAnOperation(number) {
      let operations = ['+', '-', 'x', '÷'];
      let lastItem = number.split('').pop();
      return operations.some(function(operator) {
          return lastItem === operator;
      });
  }

  function removeLastItemIfItIsAnOperation(number) {
      if(isLastItemAnOperation(number))
          number = number.slice(0, -1);
      return number;
  }

  function handleClickCe() {
      $visor.value = 0;
  }
})(window, document);
