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
(function(win, doc){
  'use strict';

  var $visor = doc.querySelector('[data-js="resultadoVisor"]');

  var btn = doc.querySelectorAll('[data-js="button-number"]');
  var operators = doc.querySelectorAll('[data-js="button-operation"]');

  var $btnCE = doc.querySelector('[data-js="btnCE"]');
  var $btnResultado = doc.querySelector('[data-js="btnResultado"]');


//criar os eventos de clique
  Array.prototype.forEach.call(btn, function(button){
    button.addEventListener('click', handleClickNumber, false);
  });

  Array.prototype.forEach.call(operators, function(button){
    button.addEventListener('click', handleClickOperation, false);
  });

  $btnCE.addEventListener('click', handleClickCE, false);
  $btnResultado.addEventListener('click', handleClickEqual, false);

//modularizar as funções de acordo com o botão clicado
  function handleClickNumber(event) {
    $visor.value += this.value; // adiciona o valor do botao numero ao visor
  }
  function handleClickCE(event) {
    $visor.value = 0;
  }
  function handleClickOperation(event) {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }
  function handleClickEqual(){
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[\+\*\/\-]?/g); //captura todos os digitos até o próximo operador
    $visor.value = allValues.reduce(function(accumulated, actual){
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemIfItIsAnOperator(actual);
      var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
      switch(operator) {
        case '+':
          return (Number(firstValue) + Number(lastValue)) + lastOperator;
        case '-':
          return (Number(firstValue) - Number(lastValue)) + lastOperator;
        case '*':
          return (Number(firstValue) * Number(lastValue)) + lastOperator;
        case '/':
          return (Number(firstValue) / Number(lastValue)) + lastOperator;
      }
    });
  }


  //verifica se ultimo item é uma operação
  function isLastItemAnOperation(number){
    var operations = ['+', '-', '*', '/'];
    var lastItem = number.split('').pop(); //define nova variável com valor do último item do visor
    return operations.some(function(operator) { //verifica se algum dos operadores se equipara ao valor do botão
      return operator === lastItem;
    });
  }
  //remove o último item se for operador
  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) { //verifica se o último digito do visor é um operador. Se for, retira com slice.
      return number.slice(0, -1);
    }
    return number;
  }






// OUTRA RESOLUÇÃO
  // for (var i = 0; i < btn.length; i++) {
  //   btn[i].onclick = function() {
  //     var btnVal = this.innerHTML;

  //     if ($visor.value == '0')
  //       $visor.value = btnVal;
  //     else
  //       $visor.value += btnVal;
  //   }
  // }

  // for (var i = 0; i < operators.length; i++) {
  //   operators[i].onclick = function() {
  //     var operatorVal = this.innerHTML;
  //     var teste = $visor.value;

  //     if ( $visor.value !== '0' )
  //       $visor.value += operatorVal;
  //     if ( /[\+\/\*\-]$/.test($visor.value) ) {
  //       $visor.value = teste.replace(/[\+\/\*\-]$/, '');
  //       $visor.value += operatorVal;
  //     }
  //   }
  // }

  // $btnCE.addEventListener( 'click', function(){
  //   $visor.value = '0';
  // });

  // $btnResultado.addEventListener( 'click', function(){
  //   if ( /[\+\/\*\-]$/.test($visor.value)  ) {
  //     $visor.value = eval($visor.value.slice(0, -1));
  //   }
  //   $visor.value = eval($visor.value);
  // });

})(window, document);
