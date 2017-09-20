(function() {
  'use strict';

  // BACKUP DE CÓDIGO ANTES DO VÍDEO SOBRE POST
  var ajax = new XMLHttpRequest();

  // ajax.open('GET', 'http://localhost:4000/user/jose', false); o ultimo parâmetro significa que n é assincrono
  ajax.open('GET', 'http://localhost:4000/user/jose');
  ajax.send();
  // ajax.addEventListener('readystatechange', function(e){
  //   if (ajax.readyState === 4){
  //     console.log(ajax.responseText, ajax.status);
  //   }
  // },false)
  // O construtor ajax pode ser utilizado sem o addEventListener pois ele possui um metódo proprio para retornar a resposta
  ajax.onreadystatechange = function (e) {
    // if( ajax.readyState === 2){
    //   console.log('headers OK!');
    //   ajax.abort(); // Finaliza a requisição
    // }

    if (ajax.readyState === 4){
      console.log(ajax.responseText, ajax.status);
    }
  }

})()
