(function() {
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
  
 //index.html
 <input type="text" value="0" readonly data-js="visor"/>
<button data-js="number" value="1">1</button>
<button data-js="number" value="2">2</button>
<button data-js="number" value="3">3</button>
<button data-js="number" value="4">4</button>
<button data-js="number" value="5">5</button>
<button data-js="number" value="6">6</button>
<button data-js="number" value="7">7</button>
<button data-js="number" value="8">8</button>
<button data-js="number" value="9">9</button>

<button data-js="operation" value="+">+</button>
<button data-js="operation" value="-">-</button>
<button data-js="operation" value="÷">÷</button>
<button data-js="operation" value="*">*</button>

<button data-js="igual" value="=">=</button>
<button data-js="ce" value="ce">CE</button>

<script src="script.js"></script>
   
 //script.js
 (function() {

    var $visor = document.querySelector('[data-js="visor"]');
    var $buttonNumbers = document.querySelectorAll('[data-js="number');
    var $buttonCE = document.querySelector('[data-js="ce"]');
    var $operations = document.querySelectorAll('[data-js="operation"]');
    var $igual = document.querySelector('[data-js="igual"]');
    
    Array.prototype.forEach.call($buttonNumbers, function(button) {
      button.addEventListener('click', clickNumber, false);
    });
    
    Array.prototype.forEach.call($operations, function(operation) {
      operation.addEventListener('click', clickOperation, false);
    });
    
    $buttonCE.addEventListener('click', clickCE, false);
    $igual.addEventListener('click', clickIgual, false);
    
    function clickNumber() {
      $visor.value += this.value; //cada numero pressionado será adicionado no visor
    }
    
    function clickOperation() {
      $visor.value = removeUltimoItemSeForOperador($visor.value);
      $visor.value += this.value;
    }
    
    function clickCE() {
      $visor.value = 0;
    }
    
    function isOperation(number) {
       var operations = ['+', '-', '*', '÷'];
       var lastItem = number.split('').pop(); //quebra esse cara aqui em um array e pega o ultimo item 
      return operations.some(function(operator) { //passa pelo array e verifica se um deles existe no retorno 
          return operator === lastItem;
      })
    }
    
     function removeUltimoItemSeForOperador(number) {
        if(isOperation(number)) {
          return number.slice(0, -1); //pega todos os itens e remove o ultimo
        }
        return number;
      }
      
     function clickIgual() {
        $visor.value = removeUltimoItemSeForOperador($visor.value);
        var todosValores = $visor.value.match(/\d+[+*÷-]?/g);
        $visor.value = todosValores.reduce(function(acumulado, atual) {
          var primeiroValor = acumulado.slice(0, -1);
          var operador = acumulado.split('').pop();
          var ultimoValor = removeUltimoItemSeForOperador(atual);
          var ultimoOperador = isOperation(atual) ? atual.split('').pop() : '';
          switch(operador) {
            case '+':
              return (Number(primeiroValor) + Number(ultimoValor)) + ultimoOperador;
            case '-':
              return (Number(primeiroValor) - Number(ultimoValor)) + ultimoOperador;
            case '*':
              return (Number(primeiroValor) * Number(ultimoValor)) + ultimoOperador;
            case '÷':
              return (Number(primeiroValor) / Number(ultimoValor)) + ultimoOperador;
          }
        });
      }
     
     })()
  
}()
