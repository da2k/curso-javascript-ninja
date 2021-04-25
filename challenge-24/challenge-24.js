/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

function addNumbersInDisplay(){
  $buttonsNumbers.forEach((item) =>{
    item.addEventListener('click', () => {
      $visor.value += item.value;
    })
  })
}
addNumbersInDisplay();

let operators = ['+', '-', '/', '*'];

$buttonsOperations.forEach((item) =>{
  item.addEventListener('click', () => {
      console.log(!isLastItemANumber());
      if(isLastItemANumber()){
        $visor.value += item.value;
      }
  })
})

function isLastItemANumber(){
  return operators.every((item) => item !== $visor.value.charAt($visor.value.length -1));
}

$buttonEqual.addEventListener('click', () => {
  $visor.value = eval($visor.value);
})

$buttonCE.addEventListener('click', () => $visor.value = 0)
