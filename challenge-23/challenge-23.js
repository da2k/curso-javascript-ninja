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
  var digito = doc.querySelectorAll("[data-js='d']")

// função para cada digito

  Array.prototype.forEach.call(digito, function (dig) {
    dig.addEventListener('click', historico, false)
  })

  // função para atualizar o input
  function historico() {
    console.log('Flag', flag)
    if (flag === 1) {
      flag = 0
      inputedce();
      console.log('lastindex', history.slice(-1))
      history += this.id;
      inp.value = history;
    } else {
      console.log('Falso', isOperator())
      history += this.id;
      inp.value = history;
    }
  }


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

  opa.addEventListener('click', inputedopa, false)
  ops.addEventListener('click', inputedops, false)
  opd.addEventListener('click', inputedopd, false)
  opm.addEventListener('click', inputedopm, false)

  ce.addEventListener('click', inputedce, false)

  //inp.addEventListener('click', inputedinp, false)

  di.addEventListener('click', inputeddi, false)

  dp.addEventListener('click', inputeddp, false)


  // função para cada operador
  function inputedopa() { digito = '+'; opHist('+'); console.log(digito)}
  function inputedops() { digito = '-'; opHist('-'); console.log(digito)}
  function inputedopd() { digito = '/'; opHist('/'); console.log(digito)}
  function inputedopm() { digito = '*'; opHist('*'); console.log(digito)}
  function inputeddp() { digito = '.';  opHist('.'); console.log(digito)}

  function inputeddi() { digito = '='; fim(history); console.log(digito)}

  // função CE - para zerar o display
  function inputedce() { inp.value=0; digito=''; history = ''; console.log('Clear')}


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
