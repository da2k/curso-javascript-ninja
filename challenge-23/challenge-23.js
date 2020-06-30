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

 const $visor = doc.querySelector('[data-js="visor"]')
 const $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]')
 const $buttonsOperation = doc.querySelectorAll('[data-js="button-operation"]')
 const $buttonCE = doc.querySelector('[data-js="button-ce"]')
 const $buttonEqual = doc.querySelector('[data-js="button-equal"]')
 Array.prototype.forEach.call($buttonsNumbers, function(button){
   button.addEventListener('click', handleClickNumber, false)
 })

 Array.prototype.forEach.call($buttonsOperation, function(button){
  button.addEventListener('click', handleClickOperation, false)
})

$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);
function handleClickNumber() {
  $visor.value += this.value
}

function handleClickOperation(){
  $visor.value = removeLastItemIftIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE(){
  $visor.value = 0;
}

function isLastItemAnOperation(number){
  const operations = [ '+', '-', 'x', '÷']

  const lastItem = number.split('').pop();
  return operations.some(function(operator){
      return operator === lastItem;
  });
}

function removeLastItemIftIsAnOperator(number){
  if(isLastItemAnOperation(number)){
    return number.slice(0,-1)
  }

  return number;
}

function handleClickEqual() {
  $visor.value = removeLastItemIftIsAnOperator($visor.value);
  const allValues = $visor.value.match(/\d+[+x÷-]?/g)

  $visor.value = allValues.reduce((accumulator, actual) => {
      const firstValue = accumulator.slice(0, -1)
      const operator = accumulator.split('').pop();
      const lastValue = removeLastItemIftIsAnOperator(actual)
      const lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
      switch(operator) {
      case '+':
         return (Number(firstValue) + Number(lastValue)) + lastOperator;
      case '-':
         return (Number(firstValue) - Number(lastValue)) + lastOperator;
      case 'x':
         return (Number(firstValue) * Number(lastValue)) + lastOperator;
      case '÷':
         return (Number(firstValue) / Number( lastValue)) + lastOperator;
      }
  })


}


})(window, document);
