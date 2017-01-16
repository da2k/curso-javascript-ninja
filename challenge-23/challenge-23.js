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
  var $numeros = doc.querySelectorAll('[data-js="numero"]');
  var $operadores = doc.querySelectorAll('[data-js="operador"]');
  var $resultado = doc.querySelector('[data-js="resultado"]');

  Array.prototype.forEach.call( $numeros, function( item ) {
   item.addEventListener( 'click', cliqueNumeros, false );
  } );

  Array.prototype.forEach.call( $operadores, function ( item ) {
    switch(item.value){
      case 'ce':
        item.addEventListener( 'click',  limpar, false);
        break;
      case '=':
        item.addEventListener( 'click', calcular, false);
        break;
      default:
        item.addEventListener( 'click', terminaComOperadorEntaoSubstituirPor, false );
        break;

    }
  });

  function cliqueNumeros(){
    setarValorInput(this.value);
  }

  function setarValorInput(valor){
    $resultado.value = $resultado.value === '0' ? valor : $resultado.value + valor;
  }

  function terminaComOperadorEntaoSubstituirPor(){
    var regex = new RegExp('[+\\-*÷]$');

    if (regex.test($resultado.value))
      $resultado.value = $resultado.value.replace( regex, this.value );
    else
      $resultado.value += this.value;
  }

  function calcular(){
    var valores = $resultado.value.match(/\d+/g);
    var operacoesDoUsuario = $resultado.value.match(/\D/g);

    $resultado.value = valores.reduce(
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
