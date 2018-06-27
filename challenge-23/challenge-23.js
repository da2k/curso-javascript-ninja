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

  var btn = doc.querySelectorAll('.number');
  var operators = doc.querySelectorAll('.operator');

  var $btnCE = doc.querySelector('[data-js="btnCE"]');
  var $btnResultado = doc.querySelector('[data-js="btnResultado"]');


  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
      var btnVal = this.innerHTML;

      if ($visor.value == '0')
        $visor.value = btnVal;
      else
        $visor.value += btnVal;
    }
  }

  for (var i = 0; i < operators.length; i++) {
    operators[i].onclick = function() {
      var operatorVal = this.innerHTML;
      var teste = $visor.value;

      if ( $visor.value !== '0' )
        $visor.value += operatorVal;
      if ( /[\+\/\*\-]$/.test($visor.value) ) {
        $visor.value = teste.replace(/[\+\/\*\-]$/, '');
        $visor.value += operatorVal;
      }
    }
  }

  $btnCE.addEventListener( 'click', function(){
    $visor.value = '0';
  });

  $btnResultado.addEventListener( 'click', function(){
    if ( /[\+\/\*\-]$/.test($visor.value)  ) {
      $visor.value = eval($visor.value.slice(0, -1));
    }
    $visor.value = eval($visor.value);
  });

})(window, document);
