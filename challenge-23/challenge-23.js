(function (win, doc) {
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
  'use strict'

  var $display = document.querySelector('[data-js="display"]')
  var $numbers = document.querySelectorAll('[data-js="number"]')
  var $operators = document.querySelectorAll('[data-js="operator"]')
  var $clear = document.querySelector('[data-js="clear"]')
  var $result = document.querySelector('[data-js="result"]')

  $display.value = 0

  function handleNumbers () {
    if ($display.value === '0') {
      $display.value = this.value
    } else {
      $display.value += this.value
    }
  }

  function handleOperators () {
    $display.value = removeLastOperator($display.value)
    $display.value += this.value
  }

  function handleClear () {
    $display.value = 0
  }

  function handleResult () {
    $display.value = removeLastOperator($display.value)
    var allValues = $display.value.match(/\d+[+x÷-]?/g)
    $display.value = allValues.reduce(function (acum, curr) {
      var operator = acum.split('').pop()
      var firstValue = acum.slice(0, -1)
      var lastValue = removeLastOperator(curr)
      var lastOperator = isLastOperator(curr) ? curr.split('').pop() : ''

      switch (operator) {
        case '+': return (Number(firstValue)) + (Number(lastValue)) + lastOperator
        case '-': return (Number(firstValue)) - (Number(lastValue)) + lastOperator
        case 'x': return (Number(firstValue)) * (Number(lastValue)) + lastOperator
        case '÷': return (Number(firstValue)) / (Number(lastValue)) + lastOperator
      }
    })
  }

  function isLastOperator (number) {
    var operators = ['+', '-', 'x', '÷']
    var lastItem = number.split('').pop()
    return operators.some(function (operator) {
      return operator === lastItem
    })
  }

  function removeLastOperator (number) {
    if (isLastOperator(number)) {
      return number.slice(0, -1)
    }
    return number
  }

  Array.prototype.forEach.call($numbers, function (item) {
    item.addEventListener('click', handleNumbers, false)
  })

  Array.prototype.forEach.call($operators, function (item) {
    item.addEventListener('click', handleOperators, false)
  })

  $clear.addEventListener('click', handleClear, false)
  $result.addEventListener('click', handleResult, false)
})(window, document)
