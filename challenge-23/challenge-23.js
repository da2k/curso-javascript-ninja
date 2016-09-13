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

  function selectItem(id) {
    return doc.querySelector('[data-js="' + id + '"]');
  }


  var arrIds = ['num0', 'num1', 'num2', 'num3','num4' ,'num5' ,'num6','num7' ,'num8' ,'num9'];
  var arrOps = ['opsum', 'opsub', 'opmult', 'opdiv'];

  arrOps.forEach(function(id){
    selectItem(id).addEventListener('click', handleOp, false);
  });


  arrIds.forEach(function(id){
    selectItem(id).addEventListener('click', handleClick, false);
  });

  selectItem('ce').addEventListener('click', handleCE, false);

  function handleClick() {
    selectItem('display').value += this.innerHTML;
  }

  function handleOp() {
    if(isLastItemAnOperation())
      selectItem('display').value = selectItem('display').value.slice(0, -1);
    selectItem('display').value += this.innerHTML;
  }

  function handleCE() {
    selectItem('display').value = '0';
  }

  function isLastItemAnOperation() {
    var operations = ['+', '-', '*', '/'];
    var lastItem = selectItem('display').value.split('').pop();
    return operations.some(function(operator){
      return operator === lastItem;
    });
  }

}(window, document));
