( function(win, doc){
  'user strict';


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

  var $inputData = doc.querySelector('[data-js="calcData"]');
  var $inputNumbers = doc.querySelectorAll('[data-js="calcNumber"]');
  var $operadores = doc.querySelectorAll('[data-js="operador"]');
  var $result = doc.querySelector('[data-js="result"]');
  var $clear = doc.querySelector('[data-js="calcReset"]');

  $inputData.value = 0;
  var inputVal = $inputData.value;


    Array.prototype.forEach.call($inputNumbers, function(button) {
        button.addEventListener('click', numberInput, false);
    });

    Array.prototype.forEach.call($operadores, function(button) {
        button.addEventListener('click', operacao, false);
    });

    function numberInput() {
          if ($inputData.value == 0)
           $inputData.value = this.value;
          else
           $inputData.value += this.value;
    }

    function operacao() {
        $inputData.value = removeLastItem($inputData.value);
        $inputData.value += this.value;

    }

    function lastItem(number) {
      var symbols = ['+', '-', '%', 'x'];
      var lastItem = number.split('').pop();
      return symbols.some(function(operator) {
          return operator === lastItem;
      });
  }

    function removeLastItem(number) {
        if (lastItem(number)) {
            return number.slice(0, -1);
        }
        return number;
    }


// Botão CE - zerar input
  function clearCalc() {
      return $inputData.value = 0;
  }


  function resultOperation () {
    $inputData.value = removeLastItem($inputData.value);
    var inputAll = $inputData.value.match(/(\d+)([+x%-])?/g);
    $inputData.value = inputAll.reduce (function (acum, atual){
      var firstVal = acum.slice(0, -1); // pega o primeiro número
      var oper = acum.split('').pop();  // transforma em array e pega o último número
      var lastVal = removeLastItem(atual);
      var lastOper = lastItem(atual) ? atual.split('').pop() : '';
      switch (oper){
        case '+':
          return (Number(firstVal) + Number(lastVal)) + lastOper;
        case '-':
          return (Number(firstVal) - Number(lastVal)) + lastOper;
        case 'x':
          return (Number(firstVal) * Number(lastVal)) + lastOper;
        case '%':
          return (Number(firstVal) / Number(lastVal)) + lastOper;
      }
    });
  }


  function resultSum() {
        $visor.value = removeLastItem($visor.value);
        var allValues = $visor.value.match(/\d+[+x/-]?/g);
        $visor.value = allValues.reduce(function(prev, curr) {

            var firstValue = prev.slice(0, -1);
            var operator = prev.split('').pop();
            var lastValue = removeLastItem(curr);
            var lastOperator = isLastItemAnOperation(curr) ? curr.split('').pop() : '';

            console.log('soy jo', firstValue)
            console.log('soy ope', operator);
            console.log('soy actual', lastValue);


            switch (operator) {
                case '+':
                    console.log(item);
                    // return ( Number(firstValue) + Number(lastValue) ) + lastOperator;

                case '-':
                    return ( Number(firstValue) - Number(lastValue) ) + lastOperator;

                case '/':
                    return ( Number(firstValue) / Number(lastValue) ) + lastOperator;

                case 'x':
                    return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
            }
        });

    }

  $result.addEventListener('click', resultOperation, false);

  $clear.addEventListener('click', clearCalc, false);


})(window, document);




