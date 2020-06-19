(function(win, doc){
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

  const $display = doc.querySelector('input');
  const $buttons = doc.querySelectorAll('button');
  let calculated = false;

  $buttons.forEach(function(button) {
    addEvent(button);
  });

  function addEvent(button) {
    if(!isNaN(button.value)) {
      addDisplayNumbers(button);
    } 
    else {
      switch(button.name) {
        case 'sum':
        case 'substraction':
        case 'multiply':
        case 'division':
          calculatorSymbol(button);
          break;
        case 'clear':
          button.addEventListener('click', function() {
            $display.value = '0';
            calculated = false;
          })
          break;
        case 'equals':
          button.addEventListener('click', function() {
            //removing final operator if exists
            if(isNaN($display.value.slice(-1))){
              $display.value = $display.value.slice(0, -1)
            }
            calculated = true;
            $display.value = win.eval($display.value)
          })
          break;
      }
    }

    function addDisplayNumbers(button) {
      button.addEventListener('click', function() {
        if($display.value === '0' || calculated) {
          $display.value = '';
          calculated = false;
        }
  
        $display.value += button.value;
      })
    }

    function calculatorSymbol(button) {
      button.addEventListener('click', function() {
        let lastItem = $display.value.slice(- 1);
        if(isNaN(lastItem)) {
            $display.value = $display.value.slice(0, -1);
        }

        $display.value += button.value;      
      })
    }
  }
})(window, document);