(function(win, doc) {
    'use strict'
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    var $inputTime = document.querySelector('[type="text"]');
    var $buttonStart = document.querySelector('[data-js="startButton"]');
    var $buttonStop = document.querySelector('[data-js="stopButton"]');
    var $buttonReset = document.querySelector('[data-js="resetButton"]');

    var counter = 0;
    var temporizador;

    function time() {
        $inputTime.value = counter++;
        temporizador = setTimeout(time, 1000);
    }

    $buttonStart.addEventListener('click', function() {
        time();
    }, false);

    $buttonStop.addEventListener('click', function() {
        clearTimeout(temporizador);
    }, false);

    $buttonReset.addEventListener('click', function() {
        counter = 0
        clearTimeout(temporizador);
        $inputTime.value = counter;

    }, false);


}(window, document));