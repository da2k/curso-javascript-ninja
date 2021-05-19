    (function(document, window){

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


      let $inputField = document.querySelector('[data-js="input"]');
      let $numbers =  document.querySelectorAll('[data-js="numbers"]');
      let $operators =  document.querySelectorAll('[data-js="operators"]')
      let $buttonCE = document.querySelector('[data-js="CE"]');
      let $buttonEqual = document.querySelector('[data-js="equal"]');

        //Events
        Array.prototype.forEach.call($numbers, function(number){
          number.addEventListener('click', handleClickNumber , false);
        });

        $buttonCE.addEventListener('click', clearInputField, false );

        Array.prototype.forEach.call($operators, function(operator){
          operator.addEventListener('click', handleClickOperation, false);
        })

        $buttonEqual.addEventListener('click', handleClickEqual, false);


        //Functions
        function handleClickNumber(){
            $inputField.value === '0' ? $inputField.value = this.value : $inputField.value += this.value;
        }

        function handleClickOperation(){
            $inputField.value = removeLastItemIfOperator($inputField.value);
            $inputField.value += this.value;
        }

        function isLastItemAnOperation(number){
          let operations = ['+', '-', 'x', '÷'];
          let lastItem = number.split('').pop();

          return operations.some(function(operator){
            return operator === lastItem;
          });
        }


        function removeLastItemIfOperator(number){
          if (isLastItemAnOperation(number)){
            return number.slice(0,-1);
          }

          return number;
        }


        function handleClickEqual(){
          $inputField.value = removeLastItemIfOperator($inputField.value);
          console.log($inputField.value)
          let allValues = $inputField.value.match(/\d+[x÷+-]?/g); // numeros sao obrigatorios mais os operadores nao sao.
          // a regex acima, pega numero seguido de numero e deixamos o operador opcional para que ele possa pegar numero apos ele.
          console.log(allValues);

         $inputField.value = allValues.reduce(function(acumulator, actual){
            console.log( 'AA', acumulator, actual)
            let firstValue = acumulator.slice(0,-1);
            let operator = acumulator.split('').pop();
            let lastValue = removeLastItemIfOperator(actual);
            let lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop(): '';

            console.log(firstValue, 'e ' , operator, lastValue + ' lastOperator' + lastOperator);

            switch(operator){
              case '+':
                return Number(firstValue) + Number(lastValue) + lastOperator;

              case '-':
                return Number(firstValue) - Number(lastValue) + lastOperator;

              case 'x':
                return Number(firstValue) * Number(lastValue) + lastOperator;

              case '÷':
                return Number(firstValue) / Number(lastValue) + lastOperator;

            }

          })
        }


        function clearInputField(){
            $inputField.value = 0;
          }


    })(document, window);


