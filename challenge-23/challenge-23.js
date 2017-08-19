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
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  $buttonsNumbers.forEach(function( item, index ){

    item.addEventListener('click', function(){
      handleGetValues(this.value);
    }, false);

  });

  $buttonsOperations.forEach(function( item, index ){

    item.addEventListener('click', function(){
      handleClickOperator(item);
    }, false);

  });

  $buttonCE.addEventListener('click', clearVisor, false);

  $buttonEqual.addEventListener('click', handleResultEqual, false);

  function handleGetValues( valueButton ) {
    $inputVisor.value += valueButton;
  }

  function clearVisor( valueButton ) {
    $inputVisor.value = 0;
  }

  function handleClickOperator (button){
    $inputVisor.value = removeLastOperator( $inputVisor.value );
    $inputVisor.value += button.value;
  }

  function removeLastOperator( number ){
    if (isChecklastOperator(number) ){
      return number.split('').slice(0, -1).join('');
    }
    return number;
  }

  function isChecklastOperator( number ){
    var listOperators = ['+', '-', 'x', '÷'];
    var numbersInput = number.split('').pop();
    return listOperators.some(function(element, index){
      return element === numbersInput;
    })
  }

  function handleResultEqual( ){
    console.log('tetes');
    $inputVisor.value = removeLastOperator($inputVisor.value);
    var allValues = $inputVisor.value.match(/\d+[+x÷-]?/g);
    $inputVisor.value = allValues.reduce(function (accumulated, actual) {
      var firstValue = accumulated.slice(0, -1);
      console.log( accumulated )
      console.log( actual )
      console.log(firstValue )

    })
  }



// @fdaciuk Eu fiz da seguinte forma o exercio fui montando do meu jeito e nas dúvidas eu tentava dar uma olhada no seu código para tentar fazer parecido.

// Minhas dificuldades começaram quando passei tentar bolar a logica do operador e sua validação, chegou num momento que tive que dar uma colada no seu codigo para entender, fui fazendo funcão por funcão e assim fui vendo o fluxo e aprendendo como se faz.

// Outra coisa eu fiz de uma forma diferente da sua usei o forEach e funciou mais teve em alguns momentos que meu código ficou diferente do seu e talvez tenha sido por não utilizar o prototype, estou certo ?

// Como disse a maioria fiz sozinho só mesmo o mais hard que tive que olhar só para ter uma noção. Será que é ruim para meu aprendizado ?


})(window, document)

