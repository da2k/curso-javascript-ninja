(function(){
  'use strict';

  //METODO GET
  // var ajax = new XMLHttpRequest();
  // ajax.open('GET', 'http://localhost:3000/user/');
  // ajax.send();

  // ajax.addEventListener('readystatechange', function(e) {
  //   if( ajax.readyState === 4 ) {
  //     console.log(ajax.responseText, ajax.status);
  //   }
  // }, false);

  // ou pode ser requirido dessa forma // aceita apenas um callback:
  // ajax.onreadystatechange = function(e) {
  //   if( ajax.readyState === 4 ){
  //     console.log( ajax.responseText, ajax.status );
  //   }
  // }

  var ajax = new XMLHttpRequest();
  ajax.open( 'POST', 'http://localhost:3000/user' );
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlenconded'); //tipo de conteúdo de form
  ajax.send('username=roberto&user=Roberto&age=32');

  console.log('Cadastrando usuário...');
  ajax.onreadystatechange = function(){
    if(ajax.readyState == 4){
      console.log('Usuário cadastrado', ajax.responseText);
    }
  };


  // var get = new XMLHttpRequest();
  // get.open( 'GET', 'http://localhost:3000/user/roberto' );
  // get.send();

  // get.onreadystatechange = function() {
  //   if(get.readyState === 4){
  //     console.log(get.responseText);
  //   }
  // };

})();