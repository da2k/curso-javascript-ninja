(function (win, doc) {
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

  //SELECIONANDO OS ELEMENTOS
  var $inputResultado = doc.querySelector('[data-js="inputResultado"]');

  var $btnIgual = doc.querySelector('[data-js="btnIgual"]');
  var $btnCE = doc.querySelector('[data-js="btnCE"]');

  var $btnNumeros = doc.querySelectorAll('[data-js="btnNumero"]');
  var $btnOperacoes = doc.querySelectorAll('[data-js="btnOperacao"]');

  //CRIANDO AS FUNÇÕES
  function handleClickCE() {
    $inputResultado.value = 0;
  }

  function handleClickNumero() {
    if ($inputResultado.value.charAt(0) === '0') {
      $inputResultado.value = $inputResultado.value.substring(1);
    }
    $inputResultado.value += this.value;
  }

  function handleClickOperacao() {
    removeLastItemOperator();
    $inputResultado.value += this.value;
  }

  function isLastItemAnOperation() {
    var operations = ['+', '-', '*', '/'];
    var lastItem = $inputResultado.value.split('').pop();

    return operations.some(function(op) {
      return op === lastItem;
    })
  }

  function removeLastItemOperator() {
    if (isLastItemAnOperation()) {
      $inputResultado.value = $inputResultado.value.slice(0, -1);
    }
  }

  function handleClickIgual() {
    removeLastItemOperator();
    $inputResultado.value = eval($inputResultado.value);
  }

  //ADICIONANDO EVENTO CLICK AOS BOTÕES
  $btnIgual.addEventListener('click', handleClickIgual, false);
  $btnCE.addEventListener('click', handleClickCE, false);

  Array.prototype.forEach.call($btnNumeros, function(button) {
    button.addEventListener('click', handleClickNumero, false);
  })

  Array.prototype.forEach.call($btnOperacoes, function(button) {
    button.addEventListener('click', handleClickOperacao, false);
  })

})(window, document);
