(function(doc){
  "use strict";
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
  var $numbers = doc.querySelectorAll('[data-js="numbers"]');
  var $operators = doc.querySelectorAll('[data-js="operators"]');
  var $screen = doc.querySelector('[data-js="screen"]');
  var $specials = doc.querySelectorAll('[data-js="special"]');

  function setScreen(value){
    var lastSymbol = $screen.value.charAt($screen.value.length-1);
    if(isOperator(value) && isOperator(lastSymbol)){
      $screen.value = $screen.value.substring(0, $screen.value.length-1) + value;
    }else{
      $screen.value = $screen.value != 0 ? $screen.value + value : value;
    }
  }
  function clearScreen(){
    $screen.value = 0;
  }
  function isOperator(value){
    var symbols = ['+','-','x','÷'];
    return symbols.lastIndexOf(value) !== -1;
  }
  function expressionToArray(expression){
    expression = isOperator(expression.charAt(expression.length-1))
    ? expression.substring(0,expression.length-1)
    : expression;
    return expression.match(/(\d+)([\+\-\x\÷])?/g);
  }
  function operations(operator){
    var operation = {
      '+': function(x, y){
        return Number(x) + Number(y);
      },
      '-': function(x, y){
        return Number(x) - Number(y);
      },
      'x': function(x, y){
        return Number(x) * Number(y);
      },
      '÷': function(x, y){
        return Number(x) / Number(y);
      }
    };
    return operation[operator];
  }
  function calculate(){
    var array = expressionToArray($screen.value);
    var result = 0;
    var operator = '';
    result = array.reduce(function(accumulate, number1){
      accumulate = accumulate.toString();
      operator = isOperator(accumulate.charAt(accumulate.length-1))
      ? accumulate.charAt(accumulate.length-1)
      : operator;
      var operationFunction = operations(operator);
      operator = isOperator(number1.charAt(number1.length-1)) ? number1.charAt(number1.length-1) : operator;
      accumulate = isOperator(accumulate.charAt(accumulate.length-1))
      ? accumulate.substring(0,accumulate.length-1)
      : accumulate;
      number1 = isOperator(number1.charAt(number1.length-1)) ? number1.substring(0,number1.length-1) : number1;
      return accumulate = operationFunction(accumulate, number1);
    });
    $screen.value = result;
  }

  Array.prototype.forEach.call($numbers, function(button){
    button.addEventListener('click', function(){
      setScreen(button.value);
    }, false);
  });
  Array.prototype.forEach.call($operators, function(button){
    button.addEventListener('click', function(){
        setScreen(button.value);
    },false);
  });
  Array.prototype.forEach.call($specials, function(button){
    button.addEventListener('click', function(){
      button.value === 'ce' ? clearScreen() : calculate();
    },false);
  });

})(document);
