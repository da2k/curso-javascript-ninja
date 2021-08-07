(function (W, D) {

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
    
    var $start = D.querySelector("[data-js='start']")
    var $stop = D.querySelector("[data-js='stop']")
    var $reset = D.querySelector("[data-js='reset']")
    var $tempo = D.querySelector("[data-js='tempo']");
    var $intervalo;

        $start.addEventListener('click', startFunc, false);
        $stop.addEventListener('click', stopFunc, false);
        $reset.addEventListener('click', resetFunc, false);

        function startFunc() {
            $tempo.value = +$tempo.value+1;
            console.log($tempo.value)
            $intervalo = setTimeout(startFunc, 1000)
            $start.setAttribute('disabled', true)
        }

        function stopFunc() {
            clearInterval($intervalo)
            $start.removeAttribute('disabled', true)
        }

        function resetFunc() {
            clearInterval($intervalo)
            $tempo.value = 0;
            $start.removeAttribute('disabled', true)
        }

})(window, document)