(function(win, doc){
    'use strict';

    // var $inputs = doc.getElementsByTagName('input');

    var $inputUsername = doc.querySelector( '#username' );
    var $inputPassword = doc.querySelector( '#password' );
    var $button = doc.querySelector('#button');

    //Value
    // $inputUsername.value = 'Valdir Pereira';
    // $inputPassword.value = 'MinhaSenha';

    // console.log( $inputUsername.value, $inputPassword.value );

    // addEventListner('click')
    $button.addEventListener('click', function(event) {
        event.preventDefault();
        console.log( 'Click no botão' );
    }, false )


    //Sincrono e Assincrono
    console.log( 'inicio' );
    // setTimeout(function() {  //Esta função será jogada no "Event Loop" aguardando o tempo de 2s para ir para Thread
    //     console.log( 'Executou o setTimeout' );
    // }, 2000);

    // setInterval(function() {
    //     console.log( 'Executou o setInterval' );
    // }, 1000);

    // setTimeout(function timer() {
    //     console.log( counter++ );
    //     timer();
    // }, 1000);

    // setTimeout usado de forma recursiva
    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;

    function timer() {
        console.log('timer', counter++);
        if( counter > 10 )
            return;
        temporizador = setTimeout(timer, 1000);
    }
    timer();

    $button.addEventListener('click', function() {
        clearTimeout(temporizador);
    }, false)


    console.log( 'fim' );

})(window, document);