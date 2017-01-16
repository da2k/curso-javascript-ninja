(function ( win, doc ) {
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

  var $zero = doc.querySelector('[data-js="zero"]');
  var $um = doc.querySelector('[data-js="um"]');
  var $dois = doc.querySelector('[data-js="dois"]');
  var $tres = doc.querySelector('[data-js="tres"]');
  var $quatro = doc.querySelector('[data-js="quatro"]');
  var $cinco = doc.querySelector('[data-js="cinco"]');
  var $seis = doc.querySelector('[data-js="seis"]');
  var $sete = doc.querySelector('[data-js="sete"]');
  var $oito = doc.querySelector('[data-js="oito"]');
  var $nove = doc.querySelector('[data-js="nove"]');
  var $soma = doc.querySelector('[data-js="soma"]');
  var $subtracao = doc.querySelector('[data-js="subtracao"]');
  var $multiplicacao = doc.querySelector('[data-js="multiplicacao"]');
  var $divisao = doc.querySelector('[data-js="divisao"]');
  var $limpar = doc.querySelector('[data-js="limpar"]');
  var $igual = doc.querySelector('[data-js="igual"]');
  var $resultado = doc.querySelector('[data-js="resultado"]');

  $zero.addEventListener( 'click', function() {
    setarValorInput($zero.value);
  }, false );

  $um.addEventListener( 'click', function() {
    setarValorInput($um.value);
  }, false );

  $dois.addEventListener( 'click', function() {
    setarValorInput($dois.value);
  }, false );

  $tres.addEventListener( 'click', function() {
    setarValorInput($tres.value);
  }, false );

  $quatro.addEventListener( 'click', function() {
    setarValorInput($quatro.value);
  }, false );

  $cinco.addEventListener( 'click', function() {
    setarValorInput($cinco.value);
  }, false );

  $seis.addEventListener( 'click', function() {
    setarValorInput($seis.value);
  }, false );

  $sete.addEventListener( 'click', function() {
    setarValorInput($sete.value);
  }, false );

  $oito.addEventListener( 'click', function() {
    setarValorInput($oito.value);
  }, false );

  $nove.addEventListener( 'click', function() {
    setarValorInput($nove.value);
  }, false );

  $soma.addEventListener( 'click', function() {
    terminaComOperadorEntaoSubstituirPor($soma.value);
  }, false );

  $subtracao.addEventListener( 'click', function() {
    terminaComOperadorEntaoSubstituirPor($subtracao.value);
  }, false );

  $multiplicacao.addEventListener( 'click', function() {
    terminaComOperadorEntaoSubstituirPor($multiplicacao.value);
  }, false );

  $divisao.addEventListener( 'click', function() {
    terminaComOperadorEntaoSubstituirPor($divisao.value);
  }, false );

  $igual.addEventListener( 'click', function() {
    $resultado.value = calcular();
  } );

  $limpar.addEventListener( 'click', function() {
    limpar();
  });

  function setarValorInput(valor){
    $resultado.value = $resultado.value === '0' ? valor : $resultado.value + valor;
  }

  function terminaComOperadorEntaoSubstituirPor(novoOperador){
    var regex = new RegExp('[+\\-*÷]$');

    if (regex.test($resultado.value))
      $resultado.value = $resultado.value.replace( regex, novoOperador );
    else
      $resultado.value += novoOperador;
  }

 var operacoes = {
    '-' : function( x, y ){
      return +x - +y;
    },

    '+' : function( x, y ){
      return +x + +y;
    },

    '-' : function( x, y ){
      return +x - +y;
    },
    '÷' : function( x, y){
      return +x / +y;
    },
    '*' : function(x , y){
      return +x * +y;
    }
 };

  function calcular(){
    var valores = $resultado.value.match(/\d+/g);
    var operacoesDoUsuario = $resultado.value.match(/\D/g);

    return valores.reduce(
      function(acumulated, item){
        if (operacoesDoUsuario.length > 0)
          return operacoes[operacoesDoUsuario.shift()](acumulated, item);

        return 0;
      }
    );


  }

  function limpar(){
    $resultado.value = "0";
  }

})(window, document);
