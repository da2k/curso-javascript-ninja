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

  var $button = doc.querySelectorAll("button");
  var $input = doc.querySelector("input");

  $button.forEach(function ($item) {
    if($item.innerHTML == '<span style="color:transparent;">_</span>'){
      return;
    }
        $item.addEventListener('click', function () {
        if($input.value[0] == 0 && $input.value.length == 1)
          clearInput();

        if($item.innerHTML === '='){
          calculator()
          return;
        }

        if($item.innerHTML === 'CE'){
          clearInput();
          $input.value = 0;
          return;
        }

        if(isOperator($item.innerHTML) && isOperator($input.value[$input.value.length -1])){
          removeLastIndex();
        }

        if($item.innerHTML === 'C'){
          removeLastCalc($input.value);
          return;
        }

        if($item.innerHTML === '&lt;-'){
          removeLastIndex();
          return;
        }
        addInput($item.innerHTML);


      })

  })


  function addInput(item) {
    $input.value += item;
  }

  function clearInput(){
    $input.value = '';
  }

  function calculator() {
    var calculator = $input.value;
    $input.value = eval(calculator);
  }


  function removeLastCalc(){
    var calculator = $input.value;
    for (var i = calculator.length -1; i >= 0; i--) {
      if(isOperator(calculator[i])){
        populater(i);
        return;
      }
    }

  }

  function isOperator(operator) {
    var op = {
      '+' : true,
      '-' : true,
      '*' : true,
      '/' : true
    };
    return !!op[operator];
  }

  function populater(index) {
    var calculator = $input.value;
    var value = '';
    for (var i = 0; i < index; i++) {
      value += calculator[i];
    }
    $input.value = value;
  }

  function removeLastIndex() {
    var index = $input.value.length - 1;
    console.log(index);
    populater(index);
    if(!$input.value){
      $input.value = 0;
    }
  }

})(window, document);
