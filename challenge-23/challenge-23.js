(function(win, doc){
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

var $visor      = doc.querySelector('[data-js="visor"]');
var $tecNum     = doc.querySelectorAll('[data-js="tecNum"]');
var $operator   = doc.querySelectorAll('[data-js="operators"');
var $result     = doc.querySelector('[data-js="result"');
var $reset      = doc.querySelector('[data-js="reset"]');

$tecNum.forEach(function(item){
  item.addEventListener('click', function(){
    var num = this.value;
    concNum(num);
  }, false);
});

$operator.forEach(function(item){
  item.addEventListener('click', function(){
    var regex = new RegExp(`(\\d)\\s[-+x÷]\\s\\s[-+x÷]\\s$`, 'g');
    var preValue = `${$visor.value} ${this.value} `;
    return $visor.value = preValue.replace(regex, `$1 ${this.value} `);
  }, false);
});

function concNum(num){
  if(+$visor.value === 0)
  return $visor.value = num;
  return $visor.value = $visor.value + num;
}

$result.addEventListener('click', function(){

  var mul = RegExp('(\\d+)\\s[x]\\s(\\d+)', 'g');
  var div = RegExp('(\\d+)\\s[÷]\\s(\\d+)', 'g');
  var som = RegExp('(\\d+)\\s[+]\\s(\\d+)', 'g');
  var sub = RegExp('(\\d+)\\s[-]\\s(\\d+)', 'g');

  function multiplication(numbers){
    showOperation(numbers.replace(mul, function(regex, num1, num2){
      return (+num1 * +num2);
    }));
  }
  function divition(numbers){
    showOperation(numbers.replace(div, function(regex, num1, num2){
      return Number(num1) / Number(num2);
    }));
  }
  function sum(numbers){
    showOperation(numbers.replace(som, function(regex, num1, num2){
      return +num1 + +num2;
    }));
  }
  function subtraction(numbers){
    showOperation(numbers.replace(sub, function(regex, num1, num2){
      return (+num1 - +num2);
    }));
  }
  function showOperation(operation){
    $visor.value = operation;
  }

  while(mul.test($visor.value)){multiplication($visor.value);}
  while(div.test($visor.value)){divition($visor.value);}
  while(som.test($visor.value)){sum($visor.value);}
  while(sub.test($visor.value)){subtraction($visor.value);}

}, false);

$reset.addEventListener('click', function(){
  return $visor.value = 0;
}, false);

})(window, document);
