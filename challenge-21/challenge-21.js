(function(win, doc){
    'use strict';
    
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
    // pegar o contador, start, stop, reset e transformá-los em variável.
    const $contador = doc.querySelector('[data-js="contador"]');
    const $start = doc.querySelector('[data-js="start"]');
    const $stop = doc.querySelector('[data-js="stop"]');
    const $reset = doc.querySelector('[data-js="reset"]');
    var tempo;

    // definir ação do start
    // o valor é uma string, ou seja, concatenando o resultado. É necessario passar '+' antes da variável(string) para transformar em número.
    // $start.addEventListener('click', function(){
    //     $contador.value = +$contador.value + 1;
        
    // }, false)

    // Iniciar contador
    function iniciarTemp () {
        $contador.value = +$contador.value + 1;
        //Inicia o startTimer no automatico.
        tempo = win.setTimeout(iniciarTemp, 1000)
    }
    $start.addEventListener('click', iniciarTemp, false)



    // parar contador
    function pararTemp () {
        win.clearTimeout(tempo);
    }
    $stop.addEventListener('click', pararTemp, false)

    // Reinicializar contador
    function resetTemp() {
        $contador.value = 0;
        win.clearTimeout(tempo);
    }
    $reset.addEventListener('click', resetTemp, false)


}(window, document))