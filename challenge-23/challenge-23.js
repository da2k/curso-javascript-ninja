(function(doc){
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

  var $display = doc.querySelector('[data-js="display"]');
  for (var i = 0; i <= 9; ++i) {
    window["$"+i] = doc.querySelector('[data-js="'+i+'"]');
  }
  var $addition = doc.querySelector('[data-js="+"]');
  var $subtraction = doc.querySelector('[data-js="-"]');
  var $multiplication = doc.querySelector('[data-js="*"]');
  var $division = doc.querySelector('[data-js="/"]');
  var $clear = doc.querySelector('[data-js="ce"]');
  var $equal = doc.querySelector('[data-js="="]');

  function addValueToDisplay(value){
    $display.value = $display.value + value;
  }

  function getLastChar(value){
    return value.substring(value.length-1, value.length)
  }

  function substringLastChar(value){
    return value.substring(0, value.length-1)
  }

  $0.addEventListener('click', function(){
    addValueToDisplay(0);
  });
  $1.addEventListener('click', function(){
    addValueToDisplay(1);
  });
  $2.addEventListener('click', function(){
    addValueToDisplay(2);
  });
  $3.addEventListener('click', function(){
    addValueToDisplay(3);
  });
  $4.addEventListener('click', function(){
    addValueToDisplay(4);
  });
  $5.addEventListener('click', function(){
    addValueToDisplay(5);
  });
  $6.addEventListener('click', function(){
    addValueToDisplay(6);
  });
  $7.addEventListener('click', function(){
    addValueToDisplay(7);
  });
  $8.addEventListener('click', function(){
    addValueToDisplay(8);
  });
  $9.addEventListener('click', function(){
    addValueToDisplay(9);
  });

  $addition.addEventListener('click', function(){
    $display.value = $display.value + "+";
  })
  $subtraction.addEventListener('click', function(){
    $display.value = $display.value + "-";
  })
  $multiplication.addEventListener('click', function(){
    $display.value = $display.value + "*";
  })
  $division.addEventListener('click', function(){
    $display.value = $display.value + "/";
  })

  $clear.addEventListener('click', function(){
    $display.value = "";
  })

  $equal.addEventListener('click', function(){
    var value = $display.value;
    if (getLastChar(value) === "+" || getLastChar(value) === "-" || getLastChar(value) === "*" || getLastChar(value) === "/") {
      $display.value = value.substring(0, value.length-1)
    }
    var result = eval($display.value);
    $display.value = result;
  });

})(document);
