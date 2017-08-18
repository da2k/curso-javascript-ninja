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

  var $inputVisor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');

  $buttonsNumbers.forEach(function( item, index ){

    item.addEventListener('click', function(){
      handleGetValues(this.value);
    }, false);

  });

  $buttonsOperations.forEach(function( item, index ){

    item.addEventListener('click', function(){
      console.log('retorno handleSetOperator: ', handleClickOperator(item) );
    }, false);

  });

  $buttonCE.addEventListener('click', clearVisor, false);


  function handleGetValues( valueButton ) {
    $inputVisor.value += valueButton;
  }

  function clearVisor( valueButton ) {
    $inputVisor.value = 0;
  }

  function handleClickOperator( valueButton ) {
    console.log(removeLastOperator( valueButton.value ));
    $inputVisor.value += valueButton.value;


  }

  function removeLastOperator(buttonvalueOpetator){
    if (isLastOperator(buttonvalueOpetator) ){
      console.log('retorno', buttonvalueOpetator);
    }

  }

  function isLastOperator( buttonClickOperator ){

    var listOperators = ['+', '-', 'x', '÷'];
    var numbersInput = $inputVisor.value.split('');

    return listOperators.some(function(element, index){
      return element === numbersInput.pop();
    });

  }




  // function valiOperator(){

  //   if(handleSetOperator){
  //     console.log('clicou igual')
  //   }
  //   console.log('ficou fora do if')


  // }






})(window, document)

