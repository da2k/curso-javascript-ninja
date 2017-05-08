(function () {
    'use strict';

    var ajax = new XMLHttpRequest();
    console.log(ajax.readyState);

    ajax.open('GET', '/data/data.xml');
    console.log(ajax.readyState);

    ajax.send();
    console.log('Carregando...');
    
    var response = '';

    ajax.addEventListener('readystatechange', function () {
        
        if (isRequestOk()) {
            //var data = JSON.parse(ajax.responseText);
            //console.log('requisição:\n ', data.message);
            try{
                response = JSON.parse(ajax.responseText);
            }
            catch(e){
                response = ajax.responseText;
            }
            console.log(response);
        }

        console.log('Terminou requisição.', ajax.readyState, ajax.status)
    }, false);

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    /*
        'ajax.readyState' diz que ponto da requisão estamos:
        0 = requisção não enviada, deu algum problema. Quando o 'ajax.open' não é chamado.
        1 = Conexão foi aberta.
        2 = Headers foram recebidos
        3 = Carregando o corpo do request. Carregando o conteúdo para manipulação
        4 = Concluído. Requisição foi concluída com sucesso.
        
        exempro de status de conexão
        https://http.cat/
        
        'ajax.responseText' = é a resposta da requiseção
        */
})();
