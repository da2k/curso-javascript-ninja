(function(_window, document) {
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
var $visor = document.querySelector('[data-js="visor"]')
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]')
var $buttonOpeation = document.querySelectorAll('[data-js="button-operation"]')
var $buttonCE = document.querySelector('[data-id="btnce"]')
var $buttonResult = document.querySelector('[data-id="btnresult"]')

console.log($buttonsNumbers)
console.log($buttonOpeation)

Array.prototype.forEach.call($buttonsNumbers, function(button) {
  button.addEventListener('click', handleClickNumber, false)
})

function handleClickNumber() {
  $visor.value += this.value
}

Array.prototype.forEach.call($buttonOpeation, function(button) {
  button.addEventListener('click', handleClickOperation, false)
})

function handleClickOperation() {
removeLastItemIfIsAnOperator()
  $visor.value += this.value
}

function handleClickCE() {
  $visor.value = 0
}

$buttonCE.addEventListener('click', handleClickCE, false)

function isLastItemAnOperation() {
  var operations = ['+', '-', 'x', '/']
  var lastItem = $visor.value.split('').pop()
  return operations.some(function(operator) {
    return operator === lastItem
  })
}

$buttonResult.addEventListener('click', handleClickEqual, false)

function removeLastItemIfIsAnOperator() {
  if(isLastItemAnOperation()) {
    $visor.value = $visor.value.slice(0, -1)
  }
}

function handleClickEqual() {
    removeLastItemIfIsAnOperator()
    var allvalues = $visor.value.match(/\d+[+x/-]?/g )
    var result = allvalues.reduce(function(accumulated, actual) {
      var firstvalue = accumulated.slice(0, -1)
      var operator = accumulated.split('').pop();
      var lastValue = actual
      console.log(firstvalue, operator)
      switch(operator) {
        case '+':
          return Number(firstvalue) + Number(lastValue)
        case '-':
          return Number(firstvalue) - Number(lastValue)
        case 'x':
          return Number(firstvalue) * Number(lastValue)
        case '/':
          return Number(firstvalue) / Number(lastValue)
      }
    })
}

})(window, document)
