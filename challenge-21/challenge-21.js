/**
 * 
 * anotacoes ---
 * 
 * if ( counter > 10 ) // forma de parar a recurção
		return;
	setTimeout(timer, 1000) // Chamando o setTimeout() a cada 1 segundo, executando a própria function timer()
}
timer() // não esquecer de executar a function

PARA PARAR UM CRONOMETRO - 

no html:
<button data-js="button"> </button> / para usar no javascript

no js:
var $button = document.querySelector ( '[data-js="button"]' )

para pegar o id do setTimeout(), basta atribuir o setTimeout() a uma variável, por exemplo:

temporizador = setTimeout(function (){}, 1000);
onde o Temporizador, agora, é o id do setTimeout()

parar parar um temporizador, deve-se usar o clearTimeout(id)
para adcionar a um botâo essa funçâo, basta:
adcioanr um evento ao botão e na função de callback  do evento, passa-se o cearTimeout(temporizador), ficando:

$button.addEventListener ( ´click´, function (){
	clearTimeout(temporizador);
}, false )

setInterval() e o clearSetinterval() // funciona da mesma forma
 * 
 * 
 * 
 */

(function (window, document) {
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
    
    var $buttonStart = document.querySelector( '[data-js="btnStart"]' )
    var $buttonStop = document.querySelector( '[data-js="btnStop"]' )
    var $buttonReset = document.querySelector( '[data-js="btnReset"]' )
    var $inputShow = document.querySelector ( '[data-js="show"]' )
    var segundo = 0;
    var stop;

    $buttonStart.addEventListener('click', start, false)
    $buttonStop.addEventListener('click', stop, false)
    $buttonReset.addEventListener( 'click', reset, false )

    function start (){
        $inputShow.value = segundo++
        stop = setTimeout(start, 1000)
        console.log(stop)
    }

    function stop (){
     clearTimeout(stop)   
    }

    function reset (){
        $inputShow.value = 0
        segundo = 0
    }

})(window, document)