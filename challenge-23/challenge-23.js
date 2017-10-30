(function (win,doc) {

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


//REVISAO

  var $visor = doc.querySelector('#calcOperation');
  var $numbers = doc.querySelectorAll('[data-js="calcNumber"]');
  var $operations = doc.querySelectorAll('[data-js="calcOperator"]');
  var $result = doc.querySelector('[data-js="equal"]');
  var $clear = doc.querySelector('[data-js="clear"]');

  $visor.value = 0;

  function insertNumber() {
    if ($visor.value == 0)
      $visor.value = this.value
    else
      $visor.value +=this.value; // concatena tudo o que já tem com o valor digitado
  };


  function insertOperation() {
    removeLastItem();
    $visor.value += this.value;
  }
  function isLastItem() {
    var symbols = ['+', '-', 'x', '÷'];
    var lastItem = $visor.value.split('').pop(); // transforma em array e o pop pega o último e retorna o último item para a variável.
    return symbols.some(function (symbol) {
      return symbol === lastItem; //  some - verifica se algum dos operadores é igual ao lastitem
    });
  }

  function removeLastItem() {
    if (isLastItem()) {
      $visor.value = $visor.value.slice(0, -1); // se o último item do visor for uma operacao
    }
  }

  function resultOperation() {
    removeLastItem();

    var resultVisor= $visor.value;
    var allVisor = resultVisor.match(/\d+[+x÷-]?/g);

    var result =  Array.prototype.reduce.call(allVisor, function (acc, value) {
      var firstValue = acc.slice(0, -1); // pega o primeiro numero do primeiro item do array
      var operator = acc.split('').pop(); // pega o primeiro operador
      var lastValue = value.replace(/\D/g, ''); // segundo numero
      var lastOperator = value.replace(/\d+/g, ''); // segundo operador
      switch (operator) {
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

  function inputClear() {
    $visor.value = 0;
  }


  // numbers é um array então precisa utilizar o Array.prototype.forEachr.call - onde number será cada botao de número
  Array.prototype.forEach.call($numbers, function (number) {
    number.addEventListener('click', insertNumber, false);
  });

  Array.prototype.forEach.call($operations, function (operation) {
    operation.addEventListener('click', insertOperation, false);
  });

  $clear.addEventListener('click', inputClear, false);
  $result.addEventListener('click', resultOperation, false);






  // function insertOperation() {
  //   $visor.value = removeLastItem($visor.value);
  //   $visor.value += this.value;
  // }

  // function isLastItem(number) {
  //   var symbols = ['+', '-', 'x', '%'];
  //   var lastItem = number.split('').pop(''); // retorna o último item
  //   return symbols.some(function (operator) {
  //     return operator === lastItem;
  //   });
  // }

  // function removeLastItem(number) {
  //   if (isLastItem(number)) {
  //     return number.slice(0, -1); //remove o ultimo item
  //   }
  //   return number;
  // }



})(window,document);
