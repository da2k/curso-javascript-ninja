(function () {
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

  //console.time( ' ' )
  //console.timeEnd( ' ' )
  //Serve para contr o tempo de execucao de uma aplicacao
  //console.table ( var ) << muito bom apra exibir arrays de objetos, em forma de uma tabela

  var actualValue = 0;
  var len;
  var isLastOperator;
  var operando;
  var canCalc;
  var $input = document.querySelector('[data-js="input"]');
  var $btn1 = document.querySelector('[data-js="btn1"]');
  var $btn2 = document.querySelector('[data-js="btn2"]');
  var $btn3 = document.querySelector('[data-js="btn3"]');
  var $btn4 = document.querySelector('[data-js="btn4"]');
  var $btn5 = document.querySelector('[data-js="btn5"]');
  var $btn6 = document.querySelector('[data-js="btn6"]');
  var $btn7 = document.querySelector('[data-js="btn7"]');
  var $btn8 = document.querySelector('[data-js="btn8"]');
  var $btn9 = document.querySelector('[data-js="btn9"]');
  var $btn0 = document.querySelector('[data-js="btn0"]');
  var $btnSum = document.querySelector('[data-js="btnSum"]');
  var $btnSub = document.querySelector('[data-js="btnSub"]');
  var $btnDiv = document.querySelector('[data-js="btnDiv"]');
  var $btnMult = document.querySelector('[data-js="btnMult"]');
  var $btnResult = document.querySelector('[data-js="btnResult"]');
  var $btnCE = document.querySelector('[data-js="btnCE"]');

  //Numbers buttons
  $btn1.addEventListener('click', btn1, false);
  $btn2.addEventListener('click', btn2, false);
  $btn3.addEventListener('click', btn3, false);
  $btn4.addEventListener('click', btn4, false);
  $btn5.addEventListener('click', btn5, false);
  $btn6.addEventListener('click', btn6, false);
  $btn7.addEventListener('click', btn7, false);
  $btn8.addEventListener('click', btn8, false);
  $btn9.addEventListener('click', btn9, false);
  $btn0.addEventListener('click', btn0, false);

  //operation buttons
  $btnSum.addEventListener('click', btnSum, false);
  $btnSub.addEventListener('click', btnSub, false);
  $btnDiv.addEventListener('click', btnDiv, false);
  $btnMult.addEventListener('click', btnMult, false);

  //Resert and Result
  $btnResult.addEventListener('click', result, false);
  $btnCE.addEventListener('click', ce, false);


  //Functions btns
  function btn1() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '1'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn2() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '2'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn3() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '3'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn4() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '4'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn5() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '5'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn6() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '6'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn7() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '7'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn8() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '8'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn9() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '9'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  function btn0() {
    if (actualValue === 0)
      actualValue = '';
    actualValue = actualValue + '0'
    Number(actualValue);
    $input.value = actualValue;
    isLastOperator = false;
    len = actualValue.length;
  }

  //Operations btns
  function btnSum() {
    if (actualValue === 0)
      return;
    if (isLastOperator) {
      actualValue = actualValue.replace(actualValue[len - 1], '+')
      $input.value = actualValue;
      isLastOperator = true;
      return;
    }
    actualValue = actualValue + '+'
    $input.value = actualValue;
    isLastOperator = true;
    len = actualValue.length;
  }

  function btnSub() {
    if (actualValue === 0)
      return;
    if (isLastOperator) {
      actualValue = actualValue.replace(actualValue[len - 1], '-')
      $input.value = actualValue;
      isLastOperator = true;
      return;
    }
    actualValue = actualValue + '-'
    $input.value = actualValue;
    isLastOperator = true;
    len = actualValue.length;
  }

  function btnDiv() {
    if (actualValue === 0)
      return;
    if (isLastOperator) {
      actualValue = actualValue.replace(actualValue[len - 1], '/')
      $input.value = actualValue;
      isLastOperator = true;
      return;
    }
    actualValue = actualValue + '/'
    $input.value = actualValue;
    isLastOperator = true;
    len = actualValue.length;
  }

  function btnMult() {
    if (actualValue === 0)
      return;
    if (isLastOperator) {
      actualValue = actualValue.replace(actualValue[len - 1], '*')
      $input.value = actualValue;
      isLastOperator = true;
      return;
    }
    actualValue = actualValue + '*'
    $input.value = actualValue;
    isLastOperator = true;
    len = actualValue.length;
  }

  //Reset and result
  function ce() {
    actualValue = 0;
    $input.value = actualValue;
  }

  function result() {
    canCalc = false;
    var resultado;
    var numb = actualValue[0]
    for (var i = 1; i < len; i++) {
      if (actualValue[i] === "/" || actualValue[i] === "-" ||
        actualValue[i] === "+" || actualValue[i] === "*") {
        if (canCalc) {
          switch (operando) {
            case "+":
              resultado = (+resultado) + (+numb)
              break;
            case "-":
              resultado = (+resultado) - (+numb)
              break;
            case "*":
              resultado = (+resultado) * (+numb)
              break;
            case "/":
              resultado = (+resultado) / (+numb)
              break;
          }
        }
        operando = actualValue[i];
        if (!canCalc)
          resultado = numb;
        numb = "";
        canCalc = true;
      } else {
        var numb = numb + actualValue[i]
      }
    }
    switch (operando) {
      case "+":
        resultado = (+resultado) + (+numb)
        break;
      case "-":
        resultado = (+resultado) - (+numb)
        break;
      case "*":
        resultado = (+resultado) * (+numb)
        break;
      case "/":
        resultado = (+resultado) / (+numb)
        break;
    }
    $input.value = resultado;
  }

})();
