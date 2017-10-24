(function (win, doc) {

  'use strict';

    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;ç
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */

  var $buttonStart = doc.querySelector('[data-js="button-start"]');
  var $buttonStop = doc.querySelector('[data-js="button-stop"]');
  var $buttonReset = doc.querySelector('[data-js="button-reset"]');
  var $inputCounter = doc.querySelector('[data-js="input-counter"]');
  var interval;

  function cronometro (){
    $inputCounter.value = +$inputCounter.value +1;
    interval = setTimeout(cronometro, 1000);
  }

  function parar () {
    clearTimeout(interval);
  }

  function reset() {
    $inputCounter.value = 0;
    parar();
  }

  $buttonStart.addEventListener('click', cronometro, false);
  $buttonStop.addEventListener('click', parar, false);
  $buttonReset.addEventListener('click', reset, false);


//quando chamo uma função sem invocar com os (), estou dizendo para que no momento do clique ela seja executada
// se passo o + na frente de uma string que é numérica ela se transforma em número

// revisao

})(window, document);
