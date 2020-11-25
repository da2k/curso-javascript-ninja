(function( win, doc ) {
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

  //Cria um NodeList (Array-like) com as tags 'button'
  const $buttons = doc.querySelectorAll( 'button' ); 
   //seleciona o visor da calculadora
  const $display = doc.querySelector( 'input' );   
  
  //função que adiciona evento nos botões
  function addEvent( button ){
    button.addEventListener( 'click', calculate );
  }

  //adiciona evento e todos os botões
  $buttons.forEach( addEvent );
  //Array.prototype.forEach.call($buttons, addEvent)
  //[].forEach.call($buttons, addEvent) 
  
  //função que faz os calculos
  function calculate( event ){

    //seleciona o value do alvo do evento (valor do botãoo clicado)
    const buttonValue = event.target.value;
    //const buttonValue = this.value;

    //se o valor do botão é '='
    if( buttonValue === '=' ) {
      //e se o value do display nao for 'vazio'
      if( $display.value !== '' ) {
        //avalia e calcula o display
        $display.value = eval( $display.value );
      }
      //se não, se o valor do botão for 'ce'
    } else if( buttonValue === 'ce' ) {
      //o value do display limpa => ''
      $display.value = '';
    } else {
      // se não, concatena os valores dos botões
      $display.value += buttonValue;
    }
  }
  
})(window, document);