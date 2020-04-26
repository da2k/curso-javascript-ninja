(function (document) {
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

  var $display = document.querySelector('#display');
  var $buttons = document.querySelectorAll('button');
  Array.prototype.forEach.call($buttons, function (button) {
    button.addEventListener('click', pressButton);
  });

  function pressButton(e) {
    var entry = e.target.innerHTML;
    if (entry === "=") {
      return calculate();
    }
    if (entry === "CE") {
      clearDisplay();
    }
    else if (checkIfFirstEntry()) {
      if (checkEntryType(entry) === 'symbol') {
        doNothing();
      }
      else {
        enterFirstNumber(entry);
      }
    }
    else if (checkEntryType(entry) === 'symbol') {
      if (checkIfOperator(entry)) {
        if (checkEntryType(entry) === 'symbol' && checkLastEntryType() === 'symbol') {
          if (checkIfSameSymbol(entry)) {
            doNothing();
          }
          else {
            replaceSymbol(entry);
          }
        }
        else {
          concatEntry(entry);
        }
      }
      else {
        doNothing();
      }
    }
    else {
      concatEntry(entry);
    }
  }

  function checkIfFirstEntry() {
    return $display.value === "0";
  }

  function enterFirstNumber(num) {
    $display.value = num;
  }

  function concatEntry(entry) {
    $display.value += entry;
  }

  function replaceSymbol(symbol) {
    $display.value = $display.value.slice(0, -1) + symbol;
  }

  function doNothing() {
    $display.value = $display.value;
  }

  function checkLastEntryType() {
    if ($display.value.substr(-1).match(/\D/)) {
      return 'symbol';
    }
    return 'number';
  }

  function checkIfSameSymbol(symbol) {
    return symbol === $display.value.substr(-1);
  }

  function checkEntryType(entry) {
    if (entry.match(/\D/)) {
      return 'symbol';
    }
    return 'number';
  }

  function checkIfOperator(entry) {
    return entry === "+" || entry === "-" || entry === "x" || entry === "%";
  }

  function clearDisplay() {
    $display.value = "0";
  }

  function calculate() {
    var primaryRemaining = makePrimaryOperations($display.value);
    var secondaryRemaining = makeSecondaryOperations(primaryRemaining);
    $display.value = secondaryRemaining;
  }

  function checkIfHasPrimary(exp) {
    return /(\d+)(\x|%)(\d+)/.test(exp);
  }

  function checkIfHasSecondary(exp) {
    return /(-?\d+)(\+|-)(\d+)/.test(exp);
  }

  function makePrimaryOperations(exp) {
    if (checkIfHasPrimary(exp)) {
      var myExp = exp;
      while (checkIfHasPrimary(myExp)) {
        myExp = myExp.replace(
          /(\d+)(\x|%)(\d+)/g,
          function (match, n1, op, n2) {
            return makeOperation(op)(n1, n2);
          });
      }
      return myExp;
    }
    return exp;
  }

  function makeSecondaryOperations(exp) {
    if (checkIfHasSecondary(exp)) {
      var expArr = exp.match(/-?\d+/g);
      return expArr.reduce(function (t, v) {
        return makeOperation('+')(t, v);
      });
    }
    return exp;
  }

  function makeOperation(operator) {
    var operations = {
      'x': function (x, y) {
        return x * y;
      },
      '%': function (x, y) {
        return x / y;
      },
      '+': function (x, y) {
        return Number(x) + Number(y);
      },
      '-': function (x, y) {
        return Number(x) - Number(y);
      }
    };
    return operations[operator];
  }
})(document);
