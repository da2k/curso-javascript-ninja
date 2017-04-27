(function () {
    'use strict';

    var ajax = new XMLHttpRequest();
    //console.log(ajax.readyState);
    ajax.open('GET', '/');
    //console.log(ajax.readyState);
    ajax.send();
    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function () {
        if( isRequestOk() ){
            console.log('requisição ok', ajax.responseText);
        }
        
        //console.log('Terminou requisição.', ajax.readyState, ajax.status)
    }, false);
    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();
