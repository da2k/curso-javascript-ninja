(function (win, doc) {
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

  var flag = 0
  var digito = ''
  var history = ''
// get DOM elements
  var d1 = doc.querySelector("[data-js='d1']")
  var d2 = doc.querySelector("[data-js='d2']")
  var d3 = doc.querySelector("[data-js='d3']")
  var d4 = doc.querySelector("[data-js='d4']")
  var d5 = doc.querySelector("[data-js='d5']")
  var d6 = doc.querySelector("[data-js='d6']")
  var d7 = doc.querySelector("[data-js='d7']")
  var d8 = doc.querySelector("[data-js='d8']")
  var d9 = doc.querySelector("[data-js='d9']")
  var d0 = doc.querySelector("[data-js='d0']")

  var opa = doc.querySelector("[data-js='opa']")
  var ops = doc.querySelector("[data-js='ops']")
  var opd = doc.querySelector("[data-js='opd']")
  var opm = doc.querySelector("[data-js='opm']")

  var ce = doc.querySelector("[data-js='ce']")

  var inp = doc.querySelector("[data-js='inp']")
  // sinal de igual
  var di = doc.querySelector("[data-js='di']")
  // ponto
  var dp = doc.querySelector("[data-js='dp']")

  // Add event on click
  d1.addEventListener('click', inputed1, false)
  d2.addEventListener('click', inputed2, false)
  d3.addEventListener('click', inputed3, false)
  d4.addEventListener('click', inputed4, false)
  d5.addEventListener('click', inputed5, false)
  d6.addEventListener('click', inputed6, false)
  d7.addEventListener('click', inputed7, false)
  d8.addEventListener('click', inputed8, false)
  d9.addEventListener('click', inputed9, false)
  d0.addEventListener('click', inputed0, false)

  opa.addEventListener('click', inputedopa, false)
  ops.addEventListener('click', inputedops, false)
  opd.addEventListener('click', inputedopd, false)
  opm.addEventListener('click', inputedopm, false)

  ce.addEventListener('click', inputedce, false)

  //inp.addEventListener('click', inputedinp, false)

  di.addEventListener('click', inputeddi, false)

  dp.addEventListener('click', inputeddp, false)

  // função para cada digito

  function inputed1() { digito = 1; historico(1); console.log(digito)}
  function inputed2() { digito = 2; historico(2); console.log(digito)}
  function inputed3() { digito = 3; historico(3); console.log(digito)}
  function inputed4() { digito = 4; historico(4); console.log(digito)}
  function inputed5() { digito = 5; historico(5); console.log(digito)}
  function inputed6() { digito = 6; historico(6); console.log(digito)}
  function inputed7() { digito = 7; historico(7); console.log(digito)}
  function inputed8() { digito = 8; historico(8); console.log(digito)}
  function inputed9() { digito = 9; historico(9); console.log(digito)}
  function inputed0() { digito = 0; historico(0); console.log(digito)}

  // função para cada operador
  function inputedopa() { digito = '+'; opHist('+'); console.log(digito)}
  function inputedops() { digito = '-'; opHist('-'); console.log(digito)}
  function inputedopd() { digito = '/'; opHist('/'); console.log(digito)}
  function inputedopm() { digito = '*'; opHist('*'); console.log(digito)}
  function inputeddp() { digito = '.';  opHist('.'); console.log(digito)}

  function inputeddi() { digito = '='; fim(history); console.log(digito)}

  // função CE - para zerar o display
  function inputedce() { inp.value=0; digito=''; history = ''; console.log('Clear')}

  // função para atualizar o input
  function historico(d) {
    console.log('Flag', flag)
    if (flag === 1) {
      flag = 0
      inputedce();
      console.log('lastindex', history.slice(-1))
      history += d;
      inp.value = history;
    } else {
      console.log('Falso', isOperator())
      history += d;
      inp.value = history;
    }


    // if (
    //    history.slice(-1) === '+'
    // || history.slice(-1) === '-'
    // || history.slice(-1) === '/'
    // || history.slice(-1) === '*'
    // ) {
    //   history.replace(/.$/, d)
    // } else {
    //   console.log('lastindex', history.slice(-1))
    //   history += d;
    //   inp.value = history;
    // }
  }

  function opHist(d) {
    console.log('Flag', flag)
     if (isOperator()) {
      console.log('verdade', isOperator())
        history = history.replace(/.$/, d)
        //history += d;
        inp.value = history;
    } else {
      console.log('Falso', isOperator())
      history += d;
      inp.value = history;
    }


    // if (
    //    history.slice(-1) === '+'
    // || history.slice(-1) === '-'
    // || history.slice(-1) === '/'
    // || history.slice(-1) === '*'
    // ) {
    //   history.replace(/.$/, d)
    // } else {
    //   console.log('lastindex', history.slice(-1))
    //   history += d;
    //   inp.value = history;
    // }
  }

  function isOperator() {
    var operators = ['+', '-', '/', '*']
    var last = history.slice(-1);
    return operators.some(function (operator) {
      return operator === last;
    });
  }

  // função para fazer a conta
  function calc(fn) {
    return new Function('return ' + fn)();
  }

  function fim(history) {
      flag = 1
      inp.value = calc(history)
      console.log(calc(history))
      digito=''; history = '';
  }

})(window, document)
